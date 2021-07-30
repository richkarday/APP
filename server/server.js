//Mandamos a llamar todos los paquetes que descargamos
require('./conf/conf')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Conexión a la base de datos mandano a llamar nuestra variable global que contiene nuestro string de conexión
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},
    (err, resp) => {
        if(err) throw err;
        console.log("Base de datos conectada exitosamente")
}); 

//Comprobamos si nuestro servidor está corriendo por el puerto que le asignamos, mandano a llamar nuestra variable globar PORT
app.listen(process.env.PORT, () => {
    console.log("Escuchando por el puerto", process.env.PORT);
})