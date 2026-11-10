"""Render supplied textured geometry in an independent background Blender process."""
import bpy, math, sys, json
from pathlib import Path
from mathutils import Vector, Matrix

args=sys.argv[sys.argv.index('--')+1:]
source=Path(args[0]);output=Path(args[1]);output.mkdir(parents=True,exist_ok=True)
items=[('goujian-sword','越王勾践剑',-math.pi/2,.10),('galloping-horse','马踏飞燕',-math.pi/2,.15),('four-ram-zun','四羊方尊',-math.pi/4,.65),('zenghouyi-bells','曾侯乙编钟',-math.pi/2,.18)]
reports=[]
for artifact_id,name,rotation,elevation in items:
 bpy.ops.wm.read_factory_settings(use_empty=True)
 scene=bpy.context.scene
 scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=32;scene.cycles.use_denoising=True
 scene.render.resolution_x=960;scene.render.resolution_y=960;scene.render.resolution_percentage=100
 scene.render.image_settings.file_format='PNG';scene.render.image_settings.color_mode='RGBA';scene.render.film_transparent=True
 scene.view_settings.view_transform='AgX';scene.view_settings.look='AgX - Medium High Contrast';scene.view_settings.exposure=.1
 scene.world=bpy.data.worlds.new('Studio ambient');scene.world.use_nodes=True
 scene.world.node_tree.nodes['Background'].inputs['Color'].default_value=(.72,.79,.85,1)
 scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.38
 bpy.ops.import_scene.gltf(filepath=str(source/(name+'.glb')))
 meshes=[o for o in scene.objects if o.type=='MESH']
 coords=[o.matrix_world@Vector(p) for o in meshes for p in o.bound_box]
 lo=Vector(tuple(min(p[i] for p in coords) for i in range(3)));hi=Vector(tuple(max(p[i] for p in coords) for i in range(3)));center=(lo+hi)/2;scale=2.65/max(hi-lo)
 root=bpy.data.objects.new('PresentationRoot',None);scene.collection.objects.link(root)
 for o in meshes:
  matrix=o.matrix_world.copy();o.parent=root;o.matrix_parent_inverse=Matrix.Identity(4);o.matrix_basis=matrix
  for mat in o.data.materials:
   if mat and mat.use_nodes:
    for node in mat.node_tree.nodes:
     if node.type=='BSDF_PRINCIPLED':node.inputs['Roughness'].default_value=.68;node.inputs['Metallic'].default_value=.12
 for image in bpy.data.images:
  if image.size[0]>2048 or image.size[1]>2048:
   r=2048/max(image.size);image.scale(round(image.size[0]*r),round(image.size[1]*r))
 root.matrix_world=Matrix.Rotation(rotation,4,'Z')@Matrix.Scale(scale,4)@Matrix.Translation(-center)
 camera_data=bpy.data.cameras.new('Portrait camera');camera=bpy.data.objects.new('Portrait camera',camera_data);scene.collection.objects.link(camera)
 camera.location=(0,-6,elevation);camera.rotation_euler=(Vector((0,0,0))-camera.location).to_track_quat('-Z','Y').to_euler();camera_data.type='ORTHO';camera_data.ortho_scale=3.25;camera_data.lens=50;scene.camera=camera
 def area(name,position,power,color,size):
  data=bpy.data.lights.new(name,'AREA');data.energy=power;data.color=color;data.shape='DISK';data.size=size
  light=bpy.data.objects.new(name,data);scene.collection.objects.link(light);light.location=position;light.rotation_euler=(-light.location).to_track_quat('-Z','Y').to_euler()
 area('Warm key',(-3,-4,4),500,(1,.91,.77),4)
 area('Cool fill',(3,-2,1),270,(.73,.85,1),3)
 area('Edge',(1,3,3),650,(1,.93,.79),3)
 scene.render.filepath=str(output/(artifact_id+'.png'));bpy.ops.render.render(write_still=True)
 reports.append({'id':artifact_id,'source':str(source/(name+'.glb')),'renderer':'Blender Cycles CPU, 32 samples, AgX','rotationZ':rotation,'cameraElevation':elevation,'size':[960,960],'transparent':True})
 (output/'render-report.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2),encoding='utf8')
