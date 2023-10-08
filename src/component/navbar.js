import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notecontext from '../notesContext/createcontext';
import weblogo from '../img/notelgo.png';
const Navbar = ()=>{
  const modecontext = useContext(Notecontext);
  const {mode,togglemode} = modecontext;
  const navgate = useNavigate();

  // eslint-disable-next-line no-console
    return (
        <>
<nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" style={{background:`${mode.appcolor}`,color:mode.text}}>
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <div  className="flex items-center">
        <img src={weblogo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GoalNotes</span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div id="menuitem">
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      
    </div>
<label className="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" onClick={togglemode}/>
  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
</label>
    <div className="inline-flex">
 { !(localStorage.getItem('token')) ? <div><Link to = "/login" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Login
  </Link>
  <Link to = "/signup" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    SignUp
  </Link></div> : <button onClick={()=>{localStorage.removeItem('token'); navgate('/login')}} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Logout
  </button>
}
</div>
</div> 
  </div>
</nav>

        </>
    )
}

export default Navbar;