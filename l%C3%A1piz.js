let canv=document.querySelector("#mycanvas")
let ctx= canv.getContext("2d")
ctx.fillStyle="orange"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(160,160,90,240)
ctx.stroke()
ctx.fill()

ctx.fillStyle="grey"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(160,120,90,40)
ctx.stroke()
ctx.fill()

ctx.strokeStyle="#4f4a4a"
ctx.fillStyle="#fade9d"
ctx.beginPath()
ctx.moveTo(160,400)
ctx.lineTo(200,480)
ctx.lineTo(240,400)
ctx.lineTo(160,400)
ctx.stroke()
ctx.fill()

ctx.strokeStyle="black"
ctx.fillStyle="#4f4a4a"
ctx.beginPath()
ctx.moveTo(180,440)
ctx.lineTo(220,440)
ctx.lineTo(200,480)
ctx.lineTo(180,440)
ctx.stroke()
ctx.fill()

ctx.strokeStyle="black"
ctx.fillStyle="pink"
ctx.beginPath()
ctx.arc(200,120,40,1*Math.PI,2*Math.PI)
ctx.stroke()
ctx.fill()

ctx.fillStyle="blue"
ctx.strokestyle="black"
ctx.beginpath()
ctx.rect(80,80,90,240)
ctx.fill()
ctx.stroke()
