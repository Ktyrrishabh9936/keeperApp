import  Alert  from './Alert';
import React, { useContext, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import notecontext from '../notesContext/createcontext';
// import env from "react-dotenv";
import { API_URL } from '../helper';

const Signup = (props) => {
  const modetog = useContext(notecontext);
  const {mode} = modetog;
  const navigate = useNavigate();
  const [logcr,setlogcr] = useState({myname:"",emai:"",pass:"",cpassword:""});
  const signsubmit = async(e,res)=>{
    e.preventDefault();
    if(logcr.cpassword!==logcr.pass)
    {
      return res.json({success:false,error:"Password Do Not match"});
    }
    const response = await fetch(`${API_URL}/api/auth/createuser`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"},
          body:JSON.stringify({name:logcr.myname,email:logcr.emai,password:logcr.pass})
      })
      const logjson = await response.json();
      console.log(logjson);
      if(logjson.success)
      {
        props.setShowAlert("Hello Rishabh","Welocme to Flowbite");
        navigate('/NotesApp');
        localStorage.setItem("token",logjson.auth);
      }
      else{
         props.setShowAlert("Failed",logjson.message);
      }
  }
    const onchanger = (e)=>{
      setlogcr({...logcr,[e.target.name]:e.target.value});
      };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={{background:`${mode.itemcolor}`}}>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{background:`${mode.containercolor}`, color:`${mode.text}`}}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" >
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="myname" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onchanger} placeholder="userName" required="" style={{background:`${mode.itemcolor}`, color:`${mode.text}`}}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="emai" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onchanger} placeholder="Email Address" required="" style={{background:`${mode.itemcolor}`, color:`${mode.text}`}} />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="pass" id="password" placeholder="At least 3 character" autoomplete="samepass" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onchanger} required="" style={{background:`${mode.itemcolor}`, color:`${mode.text}`}} />
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" name="cpassword" id="confirm-password" autoComplete="samepass" placeholder="At least 3 character" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onchanger} required="" style={{background:`${mode.itemcolor}`, color:`${mode.text}`}} />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <span className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Terms and Conditions</span></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={signsubmit}>Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
                  <Alert/>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Signup
