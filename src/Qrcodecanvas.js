import React, { useEffect, useRef } from "react";
import  QRCode  from 'qrcode';
export default function Qrcodecanvas({Text}) {


    const canvasref=useRef()
    useEffect(()=>{

        QRCode.toCanvas(canvasref.current,Text,{width:500},( Error )=>{
            console.log (Error)
        })
        },[Text])

return(
<div>
    <canvas ref={canvasref} id="canvas"> </canvas>
</div>


)




}