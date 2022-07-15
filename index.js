
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('./config');
const model = require('./model');

const app = express();
app.use(express.json())
app.use(cors());
dotenv.config();



//CRUD OPERATION WITH API
// I have used mongoDB atlas and Postman


//1.)create/post
// app.post('/',async(req,res)=>{

//     let data = await model.insertMany(req.body);
//     res.status(201).send(data);
//     console.log(data);

// });



//2.)read/get
// app.get('/',async(req,res)=>{

//     let data = await model.find();
//     res.status(200).send(data);
//     console.log(data);

// });


//3.)update/put
// app.put('/:_id',async(req,res)=>{

//     let data = await model.updateMany(req.params,{$set:req.body});
//     res.status(202).send(data);
//     console.log(data);

// });


//4.)delete
app.delete('/:_id',async(req,res)=>{

    let data = await model.deleteMany(req.params);
    res.status(202).send(data);
    console.log(data);

});


const port = process.env.PORT || 4500;
app.listen(port,()=>console.log(`server is running successfully on port ${port}`));
