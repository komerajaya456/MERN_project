const [getdata,adddata,checkdata,deletedata]=require('../config/mongoconnect')



const home=(req,res)=>{res.send("home PAGED")}

const alldata =async (req,res)=>{
    res.json(await getdata())
    }

const register=async (req,res)=>{
    //deleleting data by name
    if ( req.body.gender != "F" & req.body.gender !="M" ){
     const deldata=await deletedata(req.body)
     
        //return {deleted:[hvn,abu]
        res.json({deleted:deldata.map((val)=>{return (val.name)})})
        return true;    //this return is for not going next if
        }
        
 //check whether data is present or not
    if (await checkdata(req.body) != null){
        res.json({error:"Already registered"})}



    else if((await checkdata(req.body))== null & req.body.name != ""){
    //array of collection all data send to react fetch 
    await adddata(req.body)
    res.json({added:req.body.name})


    } 


    // console.log((req.body))
  
    


}

module.exports=[home,alldata,register];