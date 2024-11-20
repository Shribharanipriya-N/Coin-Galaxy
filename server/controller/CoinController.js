const { v4 } = require('uuid');
const CoinModel=require('../model/CoinModel');

const addcoin= async(req,res)=>{
    const data=req.body;
    try{
        const newcoin = new CoinModel({
            userid:data.userid,
            coinid:v4(),
            title:data.title,
            description:data.description,
            period:data.period,
            amount:data.amount,
            availability:data.availability,
            rating:data.rating,
            image:data.image,
            category:data.category
    
        });
        await newcoin.save();
        return res.status(200).json({message:"Coin added"});
    }
    catch(e){
        return res.status(500).json(e);
    }
    
}

const updatecoin = async(req,res)=>{
    const coinid=req.params;
    const data=req.body;
    try{
        const oldcoin=await CoinModel.findOne({coinid:coinid});
        if(oldcoin){
            oldcoin.userid=data.id,
            oldcoin.coinid=v4(),
            oldcoin.title=data.title,
            oldcoin.description=data.description,
            oldcoin.period=data.period,
            oldcoin.amount=data.amount,
            oldcoin.availability=data.availability,
            oldcoin.rating=data.rating,
            oldcoin.image=data.image,
            oldcoin.category=data.category
            await oldcoin.save();
            return res.status(200).json({message:"Coin detail updated"});
        }
        else{
            return res.status(404).json({message:"No coin found"});
        }
    }catch(e){
        return res.status(500).json(e);
    }
}

const deletecoin = async(req,res)=>{
    const coinid=req.params;
    try{
        const coin=await CoinModel.findOneAndDelete(coinid);
        if(coin){
            return res.status(200).json({message:"Coin deleted"});
        }
        else{
            return res.status(404).json({message:"No coin found"});
        }
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const getallcoin= async(req,res)=>{
    try{
        const coins=await CoinModel.find();
        return res.status(200).json({coins,message:"Coins fetched"});
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const getcoin =async(req,res)=>{
    const coinid=req.params;
    try{
        const coin=await CoinModel.findOne(coinid);
        if(coin){
            return res.status(200).json({coin,message:"Details fetched"});
        }
        return res.status(404).json({message:"Coin not found"});
    }
    catch(e){
        return res.status(500).json(e);
    }
}

const getcoinofuser = async(req,res)=>{
    const userid=req.body;
    try{
        const coins= await CoinModel.find({userid:userid});
        return res.status(200).json({coins,message:"Details fetched"});
    }
    catch(e){
        return res.status(500).json(e);
    }
}

module.exports={addcoin,updatecoin,deletecoin,getallcoin,getcoin,getcoinofuser};