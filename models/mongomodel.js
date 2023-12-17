const dotenv=require('dotenv').config();
var DBNAME="registraion"
var COLLECTIONNAME="users"
const mongoose=require("mongoose")
const [dbname,collectionname]=[DBNAME,COLLECTIONNAME]


 const myschema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    gender:{type:String}, 
})

 
const collection=mongoose.model(`${collectionname}`,myschema)

module.exports=[collection,dbname];