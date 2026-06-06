import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from './components/Signup';
import Login from "../src/forms/Login";
import Signup from "./forms/Signup";
// import Signup from './components/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Update />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
