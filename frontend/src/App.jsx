import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from './components/Signup';
import Update from './components/Updatesign';
import Login from "../src/components/Login";
// import Signup from './components/signup';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Update />} />
        <Route path="/signup" element={<Update />}/>
        <Route path="/login" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
