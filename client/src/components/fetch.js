import React,{ useState } from 'react';

function Mydata(){
    //for localStorage
   // localStorage.clear();  
    if(localStorage.length===0){ 
        console.log("camed")
        localStorage.setItem("usercollection","hjk")
    }


    const [name, setName] = useState("");
    const [age,setAge]=useState()
    const [gender,setGender]=useState('') 
    const [selectdata,setselectdata]=useState('[]')
    const [returnjson,setreturnjson]=useState('')
    
  
    const getalldata=async ()=>{
        console.log("thisssssssssssssssssss")
        const response=await fetch('http://localhost:8080/alldata',{
            method:"POST",
            headers:{'Content-Type':'application/json'}
        })
        const data=await response.json()
        setselectdata(JSON.stringify(data))
        console.log(selectdata)

    }

    getalldata();
    
    function btnhandle(){
       
        fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({name:name,age:age,gender:gender}),
        })
        .then((response)=>{return response.json()})
        .then((data)=>{        
            console.log(data);

            setreturnjson(JSON.stringify(data))
            localStorage.setItem("usercollection",JSON.stringify(data));
            })
            getalldata();

    }
    
    return(
      
        <>
        <h1>heading of fetch</h1>
        <form>
            <label>name:</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br />

            <label>age:  </label>
            <input type="Number" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/>

            <label>gender:</label>
            <select type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                <option value="">--select--</option>
                <option value="M">male</option>
                <option value="F">female</option>
            </select>     
        </form>
         <br/><br/>
     
        <button onClick={btnhandle}>Add</button>
        <br/><br/>
     
        <h3>delete by name</h3>
         <select type="text" value={name} onChange={(e)=>{setName(e.target.value)}}>
        <option value="">select name</option>
         {(JSON.parse(selectdata)).map((item) => (
          <option value={item.name}>
            {item.name}
          </option>
        ))}
         </select>
         <button onClick={btnhandle}>delete</button>
        
        <br/><br/>
        
        
        {/* <p>{typeof(Object.entries(JSON.stringify(bodydata)))}</p> */}
        {/* <p>{(Object.keys(bodydata).map((key) => bodydata[key.name]))}</p> */}
       
        <p>{selectdata}</p>

        <p>{returnjson}</p>
        </>
    )

}

export default Mydata;