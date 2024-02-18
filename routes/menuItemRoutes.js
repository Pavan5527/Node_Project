const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/', async(req,res) =>{
    try{
        const data=req.body;
        const newMenu= new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server error"});
    }
})


router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal server error"});
    }
});


//to fetch the data based on parameters
router.get('/:tasteType', async(req,res) =>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='sour'){
            const response=await MenuItem.find({taste: tasteType});
            console.log('response feteched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal server error"});
    }
})

module.exports=router;