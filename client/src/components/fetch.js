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
    const [selectdata,setselectdata]=useState('')
    
    const [bodydata,setbodydata]=useState(localStorage.getItem("usercollection"))
    
    function btnhandle(){
        fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({name:name,age:age,gender:gender}),
        })
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data);

            //this for store only data seperate in localStorage if data={error:"Already exist"}
            if ((JSON.stringify(data)).length != 30){
                setselectdata(JSON.stringify(data))
                localStorage.setItem("updatedata",);
            }

            localStorage.setItem("usercollection",JSON.stringify(data));
            setbodydata(localStorage.getItem("usercollection"))})

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
     
        <button onClick={btnhandle}>submit</button>
        <br/><br/>
     
        <h3>delete by name</h3>
         <select type="text" value={name} onChange={(e)=>{setName(e.target.value)}}>
        <option value="">select name</option>
         {(JSON.parse((localStorage.getItem("updatedata")))).map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
         </select>
         <button onClick={btnhandle}>delete</button>
        
        <br/><br/>
        
        
        {/* <p>{typeof(Object.entries(JSON.stringify(bodydata)))}</p> */}
        {/* <p>{(Object.keys(bodydata).map((key) => bodydata[key.name]))}</p> */}
        <p>{(bodydata)}</p>

        {/* <p>{(localStorage.getItem("updatedata"))}</p> */}
        </>
    )

}

export default Mydata;