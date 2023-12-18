import React,{ useState,useEffect } from 'react';

function Mydata(){
  

    const [name, setName] = useState("");
    const [age,setAge]=useState()
    const [gender,setGender]=useState('') 
    const [selectdata,setselectdata]=useState('[]')
    const [returnjson,setreturnjson]=useState('')
    
  
    useEffect(()=>{
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

    getalldata();},[returnjson])
    
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
            setName('');setAge(0);setGender('') //this for input box value change if dont delete take much values
           
            })
           

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
       
        <p>{selectdata}</p>
        <p>{returnjson}</p>
        </>
    )

}

export default Mydata;