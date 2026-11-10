// Only the new quick workspace expires. Existing research/legacy archives stay intact.
export async function cleanWorkspaceCache({ imageService, analysisService, multiviewService, modelService, now = Date.now() }) {
  const services = [imageService, analysisService, multiviewService, modelService];
  if ((await Promise.all(services.map(s => s.status()))).some(s => s.activeJobId)) return;
  const cutoff = now - 24 * 60 * 60 * 1000;
  const [models, images, views, analyses] = await Promise.all([modelService.list({includeDeleted:true}), imageService.list(), multiviewService.list(), analysisService.list()]);
  const protectedModels = models.filter(j => j.state !== 'failed');
  const keepViews = new Set(protectedModels.map(j => j.multiviewJobId).filter(Boolean));
  const keepAssets = new Set(protectedModels.flatMap(j => [j.sourceAssetId, j.source?.id]).filter(Boolean));
  const keepImages = new Set(protectedModels.map(j => j.sourceJobId).filter(Boolean));
  for (const v of views) if (!['success','failed','expired'].includes(v.state) || Date.parse(v.updatedAt) >= cutoff) keepViews.add(v.id);
  // A retained refinement may refer to an older view set.
  for (const id of keepViews) { const v = views.find(v => v.id === id); if (v?.priorId) keepViews.add(v.priorId); }
  for (const v of views) if (keepViews.has(v.id) || !['success','failed','expired'].includes(v.state) || Date.parse(v.updatedAt) >= cutoff) { if (v.sourceJobId) keepImages.add(v.sourceJobId); if (v.preparedJobId) keepImages.add(v.preparedJobId);
    for (const id of [v.sourceAssetId, ...Object.values(v.referenceViews || {}), ...(v.views || []).map(item => item.assetId)].filter(Boolean)) keepAssets.add(id);
    for(const d of v.directions || []) if(d.jobId) keepImages.add(d.jobId); }
  // An edited result can depend on an earlier generated version. Keep that provenance chain too.
  for (const j of images) if (j.workspace !== 'quick' || !['success','failed'].includes(j.state) || Date.parse(j.updatedAt) >= cutoff) keepImages.add(j.id);
  for (const assetId of [...keepAssets]) { const parent = images.find(j => j.result?.id === assetId); if (parent) keepImages.add(parent.id); }
  for (const id of keepImages) {
    const child = images.find(j => j.id === id); if (!child) continue;
    const referenceIds = new Set((child.references || []).map(a => a.id));
    for (const parent of images) if (referenceIds.has(parent.result?.id)) keepImages.add(parent.id);
  }
  const keepAnalyses = new Set(images.filter(j => keepImages.has(j.id) || j.workspace !== 'quick' || !['success','failed'].includes(j.state) || Date.parse(j.updatedAt) >= cutoff).map(j => j.analysisId).filter(Boolean));
  for (const j of images.filter(j => keepImages.has(j.id))) for (const asset of j.references || []) keepAssets.add(asset.id);
  for (const id of analyses.filter(j => keepAnalyses.has(j.id) || j.workspace !== 'quick' || !['success','failed'].includes(j.state) || Date.parse(j.updatedAt) >= cutoff).flatMap(j => j.images.map(a => a.id))) keepAssets.add(id);
  await analysisService.prune(keepAnalyses, cutoff);
  await multiviewService.prune(keepViews, cutoff);
  await imageService.prune(keepImages, keepAssets, cutoff);
}
