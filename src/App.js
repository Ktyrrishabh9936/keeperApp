import './App.css';
import Navbar from './component/navbar';
import { Route, Routes,BrowserRouter as Router  } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Notestate from './notesContext/notesContext';
import Login from './component/Login';
import Signup from './component/Signup';
import {  useState } from 'react';
import Alert from './component/Alert';
// import Notecontext from "./notesContext/createcontext";
// import { useContext } from 'react';
function App() {
  // const modecontext = useContext(Notecontext);
  // const {mode} = modecontext;
  const [alert,setAlert] = useState(null);
  const setShowAlert = (type,mess)=>{
    setAlert({swich:true,typealert:type,message:mess});
    setTimeout(()=>{
      setAlert(null);
    },1200);
  }
  return (
    <Notestate>
    <Router>
      {/* <div className = "" style={{background:`${mode.appcolor}`}}> */}
      <Navbar/>
      <Alert alert = {alert}/>
            <Routes>
        <Route path='/' element={<Home setShowAlert={setShowAlert}/>}/>
        <Route exact path='/About'  element={<About setShowAlert={setShowAlert}/>}/>
        <Route exact path='/Contact'  element={<Contact setShowAlert={setShowAlert}/>}/>
        <Route exact path='/login'  element={<Login setShowAlert={setShowAlert}/>}/>
        <Route exact path='/signup' element={<Signup  setShowAlert={setShowAlert}/>}/>
      </Routes>
    {/* </div> */}
    </Router>
    </Notestate>
  );
}

export default App;