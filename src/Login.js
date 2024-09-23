import "./Login.css";





const Login=({outLoginPage})=>{
    return (
        <>
        <div className="login"></div>
        <div className="login-1">
           <div className="login-2">
            <button>Login</button>
            <button>Register</button>
           </div>
           <div className="login-3">
           <input type="text" placeholder="Mobile Number"></input>
           <input type="text" placeholder="Pasword"></input>
           <button onClick={outLoginPage}>Login</button>
           </div>
        </div>
        </>
    )
}
export default Login;