//Definimos el puerto por el que va a correr nuestro servidor
process.env.PORT = process.env.PORT || 3000;

//Definimos el entorno por el que va estar corriendo nuestro servidor
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://ricardo:Admin@cluster0.gw00l.mongodb.net/APP?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;