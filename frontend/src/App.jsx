import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Update from './components/Updatesign';
import Login from "../src/components/Login";
import Dashboard from './components/Dashboard';
import Admin_dash from "./components/Admin_Dash";
import Manager_dash from "./components/Manager_Dash";
import Home from './components/Home';

 
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Update />} />
        <Route path="/Signup" element={<Update />}/>
        <Route path="/login" element={<Login />}/>  
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Admin_dash" element={<Admin_dash />} />
        <Route path="/Manager_dash" element={<Manager_dash />} />  
        <Route path="/Home" element={<Home />} />  
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
