import React, { useContext } from 'react';
import noteContext from '../notesContext/createcontext';
const NoteItem = (props)=>{
  const noter = useContext(noteContext);
  const {mode,deleteNote} = noter;
  const {note,modalclick} = props;
  return(
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg" style={{background:`${mode.itemcolor}`,color:`${mode.text}`}}>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{note.title}</div>
    <p className="text-gray-700 text-base" style={{color:`${mode.text}`}}>
      {note.desc}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button  onClick ={()=>{deleteNote(note._id)}} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 fas fa-trash"> Delete </button>
    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>{modalclick(note)}}><i className="fa fa-file-archive-o mx-2"></i> ReadMore </button>
  </div>
</div>

)};

export default NoteItem;