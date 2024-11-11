const express=require('express');
const path= require('path');

const startServer = (options)=>{
    const{port,public_path='public'}=options
    console.log(port)
    const app=express()

    //midlewares
    app.use(express.static(public_path))
    app.get('*', (req,res)=>{
        const indexPath =path.join(__dirname +`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(port, ()=>{
        console.log('Escuchando en el puerto '+port)
    })
}


module.exports={
    startServer
}