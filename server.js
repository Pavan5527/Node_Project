//express note L-5
const express=require('express');
const app=express();
const db=require('./db');

//body parser is used to take data from client and parse it into object and render it on thr server
const bodyParser=require('body-parser');
app.use(bodyParser.json());




app.get('/',function(req,res){
    res.send("Hey I am listening & ready to serve");
})

// app.get('/chick', (req,res) =>{
//     res.send("Chicken is my favourite food!"); 
// })

// app.get('/veg',(req,res) =>{
//     var customize={
//         name : "idli",
//         size: "10 cm",
//         is_sambar: true,
//         is_chutney: false
//     }
//     res.send(customize);
// })

// app.post('/item', (req,res)=>{
//     res.send("I am sending post data");
// })






//import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
//use the routers
//Router usage
app.use('/person',personRoutes);
app.use('/MenuItem',menuItemRoutes);


app.listen(3000, ()=>{
    console.log("server is listening to port");
});