import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Components/Pages/About";
import Appointment from "./Components/Pages/Appointment";
import Payment from "./Components/Pages/AppointmentSection/Payment";
import Login from "./Components/Pages/AuthenticateUser/Login";
import Register from "./Components/Pages/AuthenticateUser/Register";
import RequireAdmin from "./Components/Pages/AuthenticateUser/RequireAdmin";
import RequireAuth from "./Components/Pages/AuthenticateUser/RequireAuth";
import Contact from "./Components/Pages/Contact";
import AddDoctor from "./Components/Pages/Dashboard/AddDoctor";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import ManageDoctors from "./Components/Pages/Dashboard/ManageDoctors";
import MyAppointment from "./Components/Pages/Dashboard/MyAppointment";
import MyHistory from "./Components/Pages/Dashboard/MyHistory";
import MyReviews from "./Components/Pages/Dashboard/MyReviews";
import Users from "./Components/Pages/Dashboard/Users";
import Home from "./Components/Pages/Home";
import Page404 from "./Components/Pages/Page404";
import Reviews from "./Components/Pages/Reviews";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="myReviews" element={<MyReviews></MyReviews>}></Route>
          <Route path="myHistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="manageDoctors" element={<ManageDoctors></ManageDoctors>}></Route>
          <Route path="payment/:payId" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
