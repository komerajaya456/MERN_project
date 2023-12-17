const [getdata,adddata,checkdata,deletedata]=require('../config/mongoconnect')



const home=(req,res)=>{res.send("home page")}

const login =(req,res)=>{res.send("login page")}

const register=async (req,res)=>{
    //deleleting data by name
        if (req.body.gender != "F"){
        console.log("deleted console")
        console.log(req.body)
        await deletedata(req.body)
        }


    // //check whether data is present or not
    // if (await checkdata(req.body)){
    //     res.json({error:"Already registered"})

    // }
    // else if(!(await checkdata(req.body))){
    // //array of collection all data send to react fetch 
    // const data=await adddata(req.body)
    // console.log("kumarikkkkkkkkkkkkkkkkkk")
    // res.json(data)


    // } 


    // console.log((req.body))
  
    


}

module.exports=[home,login,register];