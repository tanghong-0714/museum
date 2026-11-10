import {sampleSurfaceData} from './surface-sampling.js';

self.onmessage = ({data}) => {
  try {
    const samples = sampleSurfaceData(data.attributes, data.count);
    self.postMessage(samples, Object.values(samples).map(array => array.buffer));
  } catch {
    self.postMessage({error: true});
  }
};
