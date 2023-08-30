import React, { useState } from 'react';
import { BASE_URL } from '../helper';
// import { useLocation } from 'react-router-dom';
// // import { json } from 'react-router-dom';

import Notecontext from './createcontext';

const NoteState = (props)=>{
  const dark = {type:"dark",appcolor:'#303030',itemcolor:'#424242',containercolor:'#574f57',text:"#ffff"};
  const light = {type:"light",appcolor:'#B6EADA',itemcolor:'rgb(231 255 248)',containercolor:'rgb(231, 255, 248)',text:'grey'};
  const [mode,setmode] = useState(light);

  const togglemode=()=>{
      if(mode.type ==='light')
      {
          setmode(dark);
      }
      else{
          setmode(light);
      }
  }
  
  const state = [];
const host = BASE_URL||'http://localhost:5000';
        const getNotes = async()=>{
          const response = await fetch(`${host}/api/notes/getallnotes`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              "auth-token":localStorage.getItem('token')
            },
          });
          const getnotejson = await response.json();
          setnotes(getnotejson);
        }
        const [notes,setnotes] = useState(state);

        const addnote = async(title,desc)=>{
          const response = await fetch(`${host}/api/notes/addnote`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              "auth-token":localStorage.getItem('token')
            },
            body:JSON.stringify({title,desc})
          })

          const add = await response.json();
            setnotes(notes.concat(add));
        }

        const deleteNote =async(frontid)=>{
          const afterdel = notes.filter((note)=>{return note._id !== frontid});
          setnotes(afterdel);
          const response = await fetch(`${host}/api/notes/deletenote/${frontid}`,{
            method:"DELETE",
            headers:{
              "Content-Type":"application/json",
              "auth-token":localStorage.getItem('token')
            },
          })
          const del = await response.json();
        }
        const updatenote = async(id ,title,description)=>{
          const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json",
              "auth-token":localStorage.getItem('token')
            },
            body:JSON.stringify({title,description})
          })
          const upjson = await response.json();

          let newnote = JSON.parse(JSON.stringify(notes));
          for(let i = 0 ; i < notes.length;i++)
          {
            let elem = newnote[i];
            if(elem._id === id)
            {
              newnote[i].title = title;
              newnote[i].desc = description;
              break;
            }
          }
          setnotes(newnote);
        }

    return(
        <Notecontext.Provider value={{notes,addnote,deleteNote,updatenote,getNotes,mode,togglemode}}>
            {props.children}
        </Notecontext.Provider>
    )
    }
export default NoteState;