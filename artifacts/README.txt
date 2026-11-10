器生 · 多文物 R10
青花凤首扁壶 / 青铜头像“守望” / 铜镜“照影” / 菩萨立像“静照” / 青瓷人物像“青隐” / 琵琶女俑“弦月”

启动：npm.cmd ci，然后 start-preview.cmd。
青花：http://127.0.0.1:5189/?artifact=phoenix-ewer
青铜：http://127.0.0.1:5189/?artifact=bronze-head
铜镜：http://127.0.0.1:5189/?artifact=cloud-mirror
立像：http://127.0.0.1:5189/?artifact=liquan-bodhisattva
青瓷：http://127.0.0.1:5189/?artifact=longquan-figure
琵琶：http://127.0.0.1:5189/?artifact=pipa-figurine
开发：npm.cmd run dev
构建：npm.cmd run build（release_R10）
测试：npm.cmd test
打包：python -X utf8 scripts/package-release.py

详细说明：docs/run-R10.txt
接入新文物：docs/add-artifact-R10.txt
验证记录：docs/verification-R10.txt

交付不含密钥、原始大模型、node_modules 或本机备份。未配置模型服务时仍可使用本地资料问答。
