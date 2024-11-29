const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:  "",
    database: "miau",
    connectionLimit:5
});
conexion.connect((err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("conectado");
})

conexion.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos: ', err);
        return;
    }
    console.log('Conectado a mysql')
})
module.exports = conexion;
app.use(express.json());
app.use(cors());


app.post('/miau/usuarios',async(req,res)=>{
    const {usuario, contraseña} = req.body;
    console.log(usuario, contraseña);
    if(!usuario || !contraseña){
        return res.status(400).json({message:'Faltan Datos'});
    }
    try{
        const query = 'INSERT INTO usuarios (usuario, contraseña) VALUES (?,?)';
        conexion.query(query,[usuario, contraseña],(err,result)=>{
            if(err){
                return res.status(500).json({message:'Error al crear el Personaje', error: err});
            }
            console.log('Usuario ',{usuario: usuario, contraseña: contraseña});
            res.status(201).json({message:'Usuario creado'})
        })
    }
    catch(err){
        console.error('Error al crear el Usuario', err);
        res.status(500).json({message:'Error al crear el Usuario'});
    }
})


app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
})