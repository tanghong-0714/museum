import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareDynamicExhibit} from '../src/scene.js';

test('dynamic exhibit preserves multiple meshes, material groups and original PBR',()=>{
 const root=new THREE.Group();
 const texture=new THREE.DataTexture(new Uint8Array([120,160,200,255]),1,1);
 const textured=new THREE.MeshStandardMaterial({map:texture,color:0x446688,roughness:.21,metalness:.13});
 const plain=new THREE.MeshStandardMaterial({color:0xc4b090,roughness:.8});
 const geometry=new THREE.BoxGeometry(1,1,1);
 const first=new THREE.Mesh(geometry,[textured,plain,textured,plain,textured,plain]);
 first.position.set(-2,1,0);root.add(first);
 const second=new THREE.Mesh(new THREE.SphereGeometry(.5,8,6),plain);
 second.position.set(2,0,0);root.add(second);
 const prepared=prepareDynamicExhibit(root,true);
 assert.equal(prepared.mesh.children.length,2);
 assert.equal(prepared.mesh.children[0].material.length,6);
 assert.equal(prepared.mesh.children[0].geometry.groups.length,6);
 assert.equal(prepared.mesh.children[0].material[0].roughness,.21);
 assert.equal(prepared.mesh.children[0].material[0].map,texture);
 assert.equal(prepared.particles[0].uniforms.uMap.value,texture);
 assert.equal(prepared.mesh.children[0].material[0].metalness,.13);
 assert.equal(prepared.mesh.children[1].material.color.getHex(),0xc4b090);
 assert.notEqual(prepared.mesh.children[0].geometry,geometry);
 assert.equal(first.position.x,-2);
 const dimensions=prepared.bounds.getSize(new THREE.Vector3());
 assert.ok(Math.abs(Math.max(dimensions.x,dimensions.y,dimensions.z)-2.65)<1e-6);
 assert.ok(prepared.bounds.getCenter(new THREE.Vector3()).length()<1e-6);
 assert.equal(prepared.particles.length,7);
 assert.ok(prepared.particles.every(p=>p.points.geometry.attributes.position.count>0));
 assert.equal(prepared.particles[0].uniforms.uMaterialColor.value.getHex(),0x446688);
 const originalGeometry=first.geometry;
 assert.ok(originalGeometry.attributes.position.count>0);
 prepared.mesh.traverse(node=>{node.geometry?.dispose();for(const material of node.material?(Array.isArray(node.material)?node.material:[node.material]):[])material.dispose();});
 for(const particle of prepared.particles){particle.points.geometry.dispose();particle.points.material.dispose();}
 prepared.white.dispose();
});
