import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/appointment" element={<Appointment/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
