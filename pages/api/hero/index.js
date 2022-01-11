import dbConnect from '../../../db/dbconect';
import Hero from '../../../models/Hero';
dbConnect()

//get all records post a new records

export default async (req , res) => {
 const  {method}=req;

 switch(method){
 case 'GET' :
     try {
         const heros = await Hero.find({})
         res.status(200).json({success:true , hero: heros})
         
     } catch (error) {
         res.status(404).json({success:false})
     }
     break;
     case 'POST' :
     try {
         const hero = await Hero.create(req.body)
         res.status(200).json({success:true , hero: hero})
         
     } catch (error) {
         res.status(404).json({success:false})
     }
     break;
     default :
     res.status(404).json({success:false})
     break;
 }
}