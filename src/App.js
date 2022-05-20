import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointments from "./Pages/DashBoard/MyAppointments";
import MyReviews from "./Pages/DashBoard/MyReviews";
import MyHistory from "./Pages/DashBoard/MyHistory";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./Pages/RequireAuth/RequireAdmin";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <DashBoard />
        </RequireAuth>}>
          <Route index element={<MyAppointments/>}></Route>
          <Route path="reviews" element={<MyReviews/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
