const UserModel=require('../model/UserModel')
import { v4 } from 'uuid';

const adduser= async(req,res)=>{
    const data=req.body;
    try{
        const olduser=await UserModel.findOne({email:data.email});
        if(olduser){
            return res.status(404).json({message:"User Email Exists"});
        }
        else{
            const user=new UserModel({
                name:data.name,
                email:data.email,
                password:data.password,
                userid:v4(),
            })

            await user.save();
            return res.status(200).json({message:"User Created",user:user});
        }
    }
    catch(e){
        return res.json(e);
    }
}


module.exports={adduser};