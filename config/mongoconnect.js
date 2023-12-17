
const mongoose = require("mongoose");
const [collection,dbname]=require('../models/mongomodel')

const url = `mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function getdata(){
    const alldata=await collection.find({})
    return alldata;
}


async function adddata(data){
    const mynew=await collection.insertMany({name:data.name,age:data.age,gender:data.gender})
    console.log(mynew)
    console.log(dbname)
    //deleting all __v=0
    await collection.updateMany({__v:0},{$unset:{__v:0}})
    console.log("this2222")
    //getting all collection data and send to react
    const alldata=await collection.find({})

    return (alldata) 
}



async function checkdata(data){
    if (typeof(data)=="object"){
        const chk=await collection.findOne({name:data.name})
        console.log(chk,"komera")
        console.log("camedkkkkkkkkkkkk")
        return chk;
        
    }
    else{
        const chk=await collection.findOne({name:data})
        console.log(chk)
    }
}

async function deletedata(data){

    if (typeof(data)=="object"){
        console.log(data.name)
        const deleted=await collection.deleteMany({name:data.name})
    
      console.log("here")
      console.log(deleted)
        
    } 
    else{
        const deleted=await collection.deleteMany({name:data})
        
    }
}




module.exports=[getdata,adddata,checkdata,deletedata];