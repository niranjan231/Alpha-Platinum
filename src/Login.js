import "./Login.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
// import PhoneInput from 'react-phone-number-input/input'
import axios from "axios"





const Login=({outLoginPage})=>{
    const [value, setValue] = useState("91+")
    const [clik , setClick] = useState(true)
    const [mobile , setMobile] = useState("");
    const [password , setPassword] = useState("");
    const handleLoginInpurt=(e)=>{
        setClick(false)
    }

    
    const handleRegisterInpurt=()=>{
        setClick(true)
    }
const handleMobile=(e)=>{
    setMobile(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}
const outLoginPage2=(e)=>{
    // e.preventDefault()
    const user = {mobile,password};
    console.log(user);
    axios.post("https://hellostay.com/api/auth/login",{user})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err);
    })
}


    return (
        <>
        <div className="login"></div>
        <div className="login-1">
           <div className="login-2">
            <button onClick={handleLoginInpurt}>Login</button>
            <button onClick={handleRegisterInpurt}>Register</button>
           </div>
           <div className="login-3">
            
                {
                    clik ? (<div><input onChange={handleMobile} value={mobile} type="text" placeholder="Mobile Number"></input>
                        <input value={password} onChange={handlePassword} type="text" placeholder="Pasword"></input>
                        <button onClick={()=>{
                            outLoginPage()
                            outLoginPage2()
                        }}>Login</button></div>) 
                        :
                        (<div><PhoneInput type="text" country="India"  placeholder="Enter Mobile Number" value={value}></PhoneInput>
                            <button onClick={outLoginPage}>Send OTP</button></div>)
                }
                 


                
           
            
           



           </div>
        </div>
        </>
    )
}
export default Login;