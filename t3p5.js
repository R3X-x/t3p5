let canv=document.querySelector("#mycanvas")
let ctx= canv.getContext("2d")

ctx.fillStyle="orange"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(160,160,80,240)
ctx.stroke()
ctx.fill()

ctx.fillStyle="grey"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(160,120,80,40)
ctx.stroke()
ctx.fill()

ctx.strokeStyle="black"
ctx.fillStyle="#black"
ctx.beginPath()
ctx.moveTo(160,400)
ctx.lineTo(200,480)
ctx.lineTo(240,400)
ctx.lineTo(160,400)
ctx.stroke()
ctx.fill()

ctx.strokeStyle="black"
ctx.fillStyle="black"
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

