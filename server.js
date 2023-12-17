const express=require('express')
const cors=require('cors')
const app=express()
//const getdata=require('./config/mongoconnect')
const route=require('./routes/route')
require('dotenv').config()
app.use(cors()); // Enable CORS for all routes
app.use(express.json())
 

console.log(process.env.DBNAME); // Check if this logs the correct value
console.log(process.env.COLLECTIONNAME); // Check if this logs the correct value
console.log(process.env.PORT)

const port=process.env.PORT

app.use(['/','/login','/register'],route)


//getdata();
//console.log(([{"_id":"657cc3460edee478fc753994","name":"newww","age":44,"gender":"M"},{"_id":"657cc39b80b76b959a5a813d","name":"newww","age":44,"gender":"M"},{"_id":"657cc48df634ab08281d1ea8","name":"ghj","age":6,"gender":"M"},{"_id":"657cc524f634ab08281d1eab","name":"vbn","gender":"M"},{"_id":"657cc6e5e7eed5f7e4ca60e3","name":"kjk","age":3,"gender":"M"},{"_id":"657cc8181ccc58a6c73004b0","name":"jjb","age":6,"gender":"M"},{"_id":"657ccb2e20916b16aef94bd1","name":"df","age":4,"gender":"M"},{"_id":"657ccdeb20916b16aef94be1","name":"5678","age":4,"gender":"M"},{"_id":"657cce7820916b16aef94be5","name":"er","age":4,"gender":"M"},{"_id":"657cce7920916b16aef94be9","name":"er","age":4,"gender":"M"},{"_id":"657dae8a23abd489274dbfb5","name":"komerr67345v87u7","age":3,"gender":"F"},{"_id":"657daedebc241c6f8fd1dd56","name":"komerr67345v87u7890","age":3,"gender":"F"},{"_id":"657db0b6bc241c6f8fd1dd5d","name":"ko","age":6,"gender":"M"},{"_id":"657db0dabc241c6f8fd1dd62","name":"fgbnm","age":67,"gender":"F"},{"_id":"657db22fc0339b42aa3c4587","name":"tgyu","age":4,"gender":"M"}]).toArray())



app.listen(port,()=>{console.log(`running on port ${port}`)})
 