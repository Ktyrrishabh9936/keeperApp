import React, { useContext, useState } from 'react'
import noteContext from "../notesContext/createcontext";

export default function AddNote(props) {
    const [mynote,setmynote] = useState({title:"",desc:""});
    const noter = useContext(noteContext);
    const {mode,addnote} = noter; 
    const handleclick = (e)=>{
      e.preventDefault();
      addnote(mynote.title,mynote.desc);
    props.setShowAlert("Success","AddNote Note Successful");
    }
    const onchanger = (e)=>{
      setmynote({...mynote,[e.target.name]:e.target.value});
    };
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" style={{background:`${mode.itemcolor}`}}>
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl" style={{background:`${mode.itemcolor}`}}>
            <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
              Your Notes Application
            </h1>
            <form className="mt-6" >
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Title</span>
                  <input
                    type="text"
                    name="title"
                    id = "tit"
                    onChange={onchanger}
                    className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Enter Your note title here..."
                    style={{background:`${mode.itemcolor}`,color:`${mode.text}`}}
                  />
                </label>
              </div>
              
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Message</span>
                  <textarea
                    name="desc"
                    style={{background:`${mode.itemcolor}`,color:`${mode.text}`}}
                    className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          id = "description"
          onChange={onchanger}
                    rows="5"
                    placeholder="Description here..."
                  ></textarea>
                </label>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  onClick={handleclick}
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Submit
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>

    </div>
  )
}
