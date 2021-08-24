const { default: axios } = require('axios')
const {flowerModel}=require ('./Models/flowers.model')

const getFlowers =async(req,res)=>{

const url=`https://flowers-api-13.herokuapp.com/getFlowers`
await axios
.get(url)
.then( response=>res.send(response.data))
.catch(error=>console.log(erroe.messege));

};

const getFav =async(req,res)=>{
flowerModel.find({},(error,data)=>{
    if(error){res.send(error);}
    else{res.send(data)}
})
    };

const createFav =async(req,res)=>{
const {name,photo,instructions}=req.body;
const newFlower= new flowerModel({

    name:name,
    photo:photo,
    instructions:instructions

})
 newFlower.save();
};

const updateFav =async(req,res)=>{
   const flowerID =req.params.flower_id;
   const{name,
    photo,
    instructions}=req.body;
    flowerModel.FindByIdAndUpdate(
        {_id:flowerID},{name:name},{photo:photo},{new:true},(error,data)=>{res.send(data)}
    )
    };


    const deleteFav =async(req,res)=>{
   const id =req.params.id;
   flowerModel.deleteOne({_id:id},(error,data)=>{})
   flowerModel.find({},(error,data)=> {res.send(data);)

}
  
   
  
module.exports={getFlowers,getFav,createFav,updateFav,deleteFav};
    