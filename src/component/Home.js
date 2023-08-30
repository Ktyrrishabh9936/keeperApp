
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../notesContext/createcontext";
import AddNote from "./AddNote";
import NoteItem from "./noteitem";
const Home = (props) => {
    // const modecontext = useContext(Notecontext);
  // const {mode,togglemode} = modecontext;
  let navgate = useNavigate();
  const [modal,setmodal] =useState(false);
  const noter = useContext(noteContext);
  const {mode,notes,getNotes,updatenote} = noter;
  const onchanger = (e)=>{
    setmynote({...mynote,[e.target.name]:e.target.value});
  };
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else{
      navgate('/login');
    }
    
    // eslint-disable-next-line
  },[]);
  const ref = useRef(null);
  const [mynote,setmynote] = useState(null);
  const modalclick=(note)=>
  {
    console.log(note);
    setmynote({id:note._id,title:note.title,desc:note.desc});
    ref.current.click();
  }
  const handleupdate=async()=>{
    updatenote(mynote.id,mynote.title,mynote.desc);
    setmodal(false);
    props.setShowAlert("Success","Updated Note Successful");
  }
  return (
    <>
      <AddNote setShowAlert={props.setShowAlert} />
      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none hidden focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" ref={ref} onClick={()=>{setmodal(true)}} >
  Toggle modal
</button>

{ modal && <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" style={{background:"#9c9c9cd4"}}>
    <div className="relative w-full h-full max-w-md md:h-auto m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={()=>{setmodal(false)}}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only" >Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update a note</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                        <input type="title" name="title" onChange={onchanger} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your title" value={mynote.title} required/>
                    </div>
                    <div>
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Description</label>
                        <input type="desc" name="desc" id="desc" onChange={onchanger} placeholder="Enter something to update" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={mynote.desc} required/>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleupdate}>UpdateNote</button>
                </form>
            </div>
        </div>
    </div>
</div> }

      <div className=" grid gap-x-8 gap-y-4 grid-cols-3 scroll-mt-12  gap-x-8 py-10 lg:py-12 xl:grid-cols-4" style={{background:`${mode.appcolor}`,color:mode.text}}>
        { (notes.length!==0 )? notes.map(note => {
          return <NoteItem note={note} key={note._id} modalclick = {modalclick}/>
        }) : <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">Please Add Notes To Preview.....</h3> }
      </div>
    </>
  )
};
export default Home;
