const express =require('express');
const cors=require("cors");
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();


app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const messageRoutes=require('./api/routes/messageRoutes');
messageRoutes(app);

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(process.env.PORT || 4000);
<<<<<<< HEAD
module.exports=app;

=======

module.exports = app;
>>>>>>> cd78d6e7588fe3acd01a402fd5f6f9114a8dafd3
