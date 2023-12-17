const [getdata,adddata,checkdata,deletedata]=require('../config/mongoconnect')



const home=(req,res)=>{res.send("home page")}

const alldata =async (req,res)=>{
    res.json(await getdata())
    }

const register=async (req,res)=>{
    //deleleting data by name
    if (req.body.gender != "F" & req.body.gender !="M"){
        console.log("deleted console")
        console.log(req.body)
        await deletedata(req.body)
        }


    //check whether data is present or not
    if (await checkdata(req.body) != null){
        console.log("thisddddddddd chk there")
        res.json({error:"Already registered"})

    }
    else if((await checkdata(req.body))== null){
    //array of collection all data send to react fetch 
    await adddata(req.body)
    console.log("kumarikkkkkkkkkkkkkkkkkk added")
    res.json({added:"added success"})


    } 


    // console.log((req.body))
  
    


}

module.exports=[home,alldata,register];