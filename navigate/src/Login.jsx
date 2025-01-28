import { useState } from 'react'
import Form from  'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import'./App.css'
    
export default function Login(){
    const navigate=useNavigate();
    const[pwd,setPwd]=useState(0);

const handlePwd=(e)=>{
    setPwd(e.target.value)

}
function login(){

    let p=1234567;
    if(p==pwd){
        alert("Login Success")
        navigate("/App")
    }
    else{

    alert("failed password");

}
}
    return(

        <>
       < div className='ka'>
        <h1>Enter your Login Page</h1>
       
     <input type="Number"  onChange={handlePwd} placeholder="enter student password"></input>
    
     <Button variant="primary" onClick={login }> click button</Button>
     </div>
       </>
     )
}

