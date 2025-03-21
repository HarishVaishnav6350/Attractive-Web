 import {useState} from 'react';
 import login from '../assets/login.png';
 function Login(){
    const [isLogin, setIsLogin] =useState(false)

    return (
        <div className='pagecont'>
            <div className='imgsec'>
                <img src={login} alt='Image' className='imgstyle' />
            </div>
         <div className='formsec'>
             <div className='toglebutton'>
                <button type='togle'onClick={()=>setIsLogin(true)}>Login</button>
                <button type='togle' onClick={()=>setIsLogin(false)}>Signup</button>
            </div>
                <div >
                    <input type='text' placeholder='User Name..' className='formin'/>
                    <br/>
                
                    <input type='password' className='formin' placeholder='Password'/>
                    <br/>

                    {!isLogin &&
                  <>  <input type='email' className='formin' placeholder='Email'/>
                    <br/>

                    <input type='tel' className='formin' placeholder='Mobile no'/></>}
                    
                  <div>
                <button type='submit' >
                  {isLogin? 'Login':'SignUp'}
                </button>
                <p> {isLogin?'Alredy have an account ?':"don't have an account ?"} 
                <span onClick={()=>setIsLogin(!isLogin)} style={{cursor:'pointer' ,color:'blue'}} >
                    {isLogin ?' login':' signUp'}
                </span>
                </p>

                     </div>
                </div>



         </div>

        </div>
    )

 }
 export default Login;