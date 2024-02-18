const mongoose=require('mongoose');

//defint the mongodb connection URL
const mongoURL='mongodb://0.0.0.0:27017/hotels'  //replace the hotela with your choice DB

//setup the mongodb connection
mongoose.connect(mongoURL);

//get the default connection
//mongoose maintains a ddefault connection object representing the Mongodb connection
const db=mongoose.connection;

//define event listeners fro DB connection
db.on('connected',() =>{
    console.log('Connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
});

db.on('disconnected',()=>{
    console.log('MongoDb disconnected');
});

//to make the final connecton we should export the DB conection
module.exports=db;