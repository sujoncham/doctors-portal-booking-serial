import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About';
import Appointment from './Components/Pages/Appointment';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Reviews from './Components/Pages/Reviews';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
