const express=require("express");
const mongoose=require("mongoose");
const {Coins}=require("./schema.js");
const bodyParser = require("body-parser");
const cors=require("cors");
const app=express();

app.use(bodyParser.json())
app.use(cors());

    async function connectdb(){
        try{
        await mongoose.connect("mongodb+srv://CoinGalaxy:DevTrio@cluster0.z9kbeyv.mongodb.net/CoinGalaxy?retryWrites=true&w=majority&appName=Cluster0")
         console.log("db connnection success")
         const x=process.env.PORT || 5000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();

//coins

app.get('/get-coins',async function(request,response){
    try{
        const coinData= await Coins.find()
        response.status(200).json(coinData);
    }
    catch(error){
    response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
    }
   
})

app.post('/add-coins',async function(request,response){
    try{
        await Coins.create({
            "id":request.body.id,
            "title": request.body.title,
            "description":request.body.description,
            "period":request.body.period,
            "amount":request.body.amount,
            "availability":request.body.availability,
            "rating":request.body.rating,
            "image":  request.body.image,
            "category":request.body.category,
        })
        response.status(201).json({
            "status":"success",
            "message":"entry added"
        })
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"entry not added",
            "eroor":error
        })
    }
    
})


//ancientcoins

app.get('/get-coins/ancientcoins',async function(request,response){
    try{
        const coinData= await Coins.find({category:"ancientcoins"})
        response.status(200).json(coinData);
    }
    catch(error){
    response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
    }
   
})


//britishcoins
app.get('/get-coins/britishcoins',async function(request,response){
    try{
        const coinData= await Coins.find({category:"britishcoins"})
        response.status(200).json(coinData);
    }
    catch(error){
    response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
    }
   
})

//Indian coins
app.get('/get-coins/indiancoins',async function(request,response){
    try{
        const coinData= await Coins.find({category:"indiancoins"})
        response.status(200).json(coinData);
    }
    catch(error){
    response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
    }
   
})

//islamic coins

app.get('/get-coins/islamiccoins',async function(request,response){
    try{
        const coinData= await Coins.find({category:"islamiccoins"})
        response.status(200).json(coinData);
    }
    catch(error){
    response.status(500).json({
    "status":"failure",
    "message":"couldn't fetch",
    "error": error
})
    }
   
})

//coindetails

app.get('/coindetails/:id',async function(request,response){
    try{
     const coindata=await Coins.findById(request.params.id)
    if(coindata){
        response.status(200).json(coindata);
    }
    else{
     response.status(404).json({
       "status":"failure",
       "mesage":"coin item not found"
     })
    }
    }
    catch(error){
     response.status(500).json({
       "status":"failure",
       "message":"could not delete entry",
       "error":error
     })
   
    }
   })
