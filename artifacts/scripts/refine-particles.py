from pathlib import Path
p=Path(__file__).resolve().parent.parent/'src'/'particles.js'
s=p.read_text(encoding='utf8')
s=s.replace('const p=geometry.attributes.position,uv=geometry.attributes.uv,idx=geometry.index;','const p=geometry.attributes.position,uv=geometry.attributes.uv,norm=geometry.attributes.normal,idx=geometry.index;')
s=s.replace('seeds=new Float32Array(count*3);','seeds=new Float32Array(count*3),normals=new Float32Array(count*3);')
s=s.replace('const n=indices[k],w=weights[k];','const n=indices[k],w=weights[k];if(norm){normals[i*3]+=norm.getX(n)*w;normals[i*3+1]+=norm.getY(n)*w;normals[i*3+2]+=norm.getZ(n)*w;}')
s=s.replace("result.setAttribute('aSeed'","result.setAttribute('normal',new THREE.BufferAttribute(normals,3));result.setAttribute('aSeed'")
s=s.replace('const uniforms={uMap:{value:texture},','texture.updateMatrix();\n const uniforms={uMap:{value:texture},uUvTransform:{value:texture.matrix},')
s=s.replace('void main(){vUv=uv;','uniform mat3 uUvTransform; void main(){vUv=(uUvTransform*vec3(uv,1.)).xy;')
s=s.replace('(1.3+aSeed.y*2.3)','(1.35+aSeed.y*.85)').replace('-1.4+aSeed.z*3.5','-1.3+aSeed.z*2.8').replace('mix(.13,.92,settled)','mix(.035,.95,settled)')
s=s.replace('gl_Position=projectionMatrix*mv;','vAlpha*=mix(1.,smoothstep(-.1,.35,dot(normalize(normalMatrix*normal),normalize(-mv.xyz))),settled);gl_Position=projectionMatrix*mv;')
p.write_text(s,encoding='utf8')
