import bpy, math, json, os
from mathutils import Vector

OUT=r'E:\2026黑客松\文物动画\四件活化_R35\bells'
sc=bpy.data.scenes['R35_Bells_Interactive'];bpy.context.window.scene=sc
ob=bpy.data.objects['R35_Bells_Surface']
bpy.ops.object.select_all(action='DESELECT');ob.select_set(True);bpy.context.view_layer.objects.active=ob
bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
sc.render.fps=24;sc.frame_start=1;sc.frame_end=145

# The source is fused; select five free bell bodies, never the rack/base.
centers=[-.355,-.218,-.085,.175,.345]
halfwidths=[.035,.031,.031,.036,.035]
arm=bpy.data.armatures.new('R35_Bells_Rig');rig=bpy.data.objects.new('R35_Bells_Rig',arm);sc.collection.objects.link(rig)
bpy.ops.object.select_all(action='DESELECT');rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.object.mode_set(mode='EDIT')
root=arm.edit_bones.new('rack');root.head=(0,0,0);root.tail=(0,0,.12)
for i,c in enumerate(centers):
 b=arm.edit_bones.new('bell_%02d'%(i+1));b.head=(0,c,-.008);b.tail=(0,c,.032);b.parent=root
bpy.ops.object.mode_set(mode='OBJECT')
groups=[ob.vertex_groups.new(name='rack')]+[ob.vertex_groups.new(name='bell_%02d'%(i+1)) for i in range(len(centers))]
counts=[0]*5;full=[0]*5
def smooth(t):
 t=max(0,min(1,t));return t*t*(3-2*t)
for v in ob.data.vertices:
 x,y,z=v.co;chosen=-1;w=0
 if -.173<z<-.012:
  for i,(c,hw) in enumerate(zip(centers,halfwidths)):
   if abs(y-c)<hw:
    # Lower body rigid; taper only its fused suspension collar and lateral seams.
    w=smooth((-.012-z)/.030)*smooth((hw-abs(y-c))/.004)
    if w>0:chosen=i;break
 if chosen>=0:
  groups[chosen+1].add([v.index],w,'REPLACE');counts[chosen]+=1
  if w>.999:full[chosen]+=1
 if w<1:groups[0].add([v.index],1-w,'REPLACE')
ob.parent=rig
modifier=ob.modifiers.new('Bell local deformation','ARMATURE');modifier.object=rig
rig.show_in_front=True
amp=math.radians(1.8)
def shake(t):
 return amp*math.sin(2*math.pi*4*t)*math.exp(-3.8*t)*(1-t)**2 if 0<t<1 else 0
def make_action(name,end,events):
 action=bpy.data.actions.new(name);action.use_fake_user=True;rig.animation_data_create();rig.animation_data.action=action
 for frame in range(1,end+1):
  t=(frame-1)/24
  for i in range(5):
   b=rig.pose.bones['bell_%02d'%(i+1)];b.rotation_mode='XYZ';b.rotation_euler=(sum(shake(t-start) for index,start in events if index==i),0,0)
   b.keyframe_insert(data_path='rotation_euler',frame=frame,group=b.name)
 return action
demo=make_action('bell_demo',145,[(i,.2+i) for i in range(5)])
for i in range(5):make_action('bell_%02d'%(i+1),25,[(i,0)])
rig.animation_data.action=demo;sc.frame_set(1)
for b in rig.pose.bones:b.rotation_euler=(0,0,0)
for im in bpy.data.images:
 if im.name not in ['Render Result','Viewer Node'] and im.filepath and not im.packed_file:
  # Only images used by our imported model.
  if any(n.type=='TEX_IMAGE' and n.image==im for m in ob.data.materials if m and m.use_nodes for n in m.node_tree.nodes):im.pack()
bpy.ops.object.select_all(action='DESELECT');ob.select_set(True);rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'bells-animated-raw-R35.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='ACTIONS',export_frame_range=False,export_force_sampling=True,export_skins=True,export_yup=True)

# Lightweight studio exists in the editable blend only, never in the exported web GLB.
world=bpy.data.worlds.new('R35_Bells_World');world.use_nodes=True;world.node_tree.nodes.get('Background').inputs[0].default_value=(.035,.045,.065,1);world.node_tree.nodes.get('Background').inputs[1].default_value=.4;sc.world=world
camdata=bpy.data.cameras.new('R35_Bells_Camera');cam=bpy.data.objects.new('R35_Bells_Camera',camdata);sc.collection.objects.link(cam);cam.location=(1.6,-.035,.12);cam.rotation_euler=(Vector((0,0,-.008))-cam.location).to_track_quat('-Z','Y').to_euler();camdata.type='ORTHO';camdata.ortho_scale=1.12;sc.camera=cam
for name,loc,power,size in [('Key',(1,-.6,.8),90,1.1),('Fill',(.8,.6,.35),45,1),('Rim',(-.7,.1,.7),65,.8)]:
 ld=bpy.data.lights.new('R35_Bells_'+name,'AREA');lo=bpy.data.objects.new('R35_Bells_'+name,ld);sc.collection.objects.link(lo);lo.location=loc;lo.rotation_euler=(-lo.location).to_track_quat('-Z','Y').to_euler();ld.energy=power;ld.shape='DISK';ld.size=size
sc.render.resolution_x=1280;sc.render.resolution_y=720;sc.render.resolution_percentage=100
sc.render.image_settings.file_format='PNG';sc.render.film_transparent=False
sc.frame_set(1)
bpy.data.libraries.write(os.path.join(OUT,'曾侯乙编钟_互动骨架_R35.blend'),{sc},fake_user=True)
report={'source':'zenghouyi-bells-web-desktop.glb','meshVertices':len(ob.data.vertices),'meshFaces':len(ob.data.polygons),'fusedComponents':1,'coordinateSystem':'glTF world: x=Blender x,y=Blender z,z=-Blender y; same scale/orientation as source','defaultAction':'bell_demo','duration':6,'fps':24,'maxDegrees':1.8,'limitation':'Fused source mesh: localized body weighting, smooth suspension collars; not physical separated bells. Five front bodies only. Rack and base have root weight.','bells':[]}
for i,c in enumerate(centers):report['bells'].append({'id':'bell_%02d'%(i+1),'clip':'bell_%02d'%(i+1),'label':'编钟 %d'%(i+1),'centerGltf':[.045,-.095,-c],'pivotGltf':[0,-.008,-c],'weightedVertices':counts[i],'fullWeightVertices':full[i],'demoStart':.2+i,'duration':1})
with open(os.path.join(OUT,'bells-animation-R35.json'),'w',encoding='utf8') as f:json.dump(report,f,ensure_ascii=False,indent=2)
print(json.dumps(report,ensure_ascii=False))
