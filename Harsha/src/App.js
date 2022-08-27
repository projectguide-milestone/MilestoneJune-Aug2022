import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/components/home'
import Navbar from './components/Navbar';
import Login from './components/login';
import Rentdetails from './components/rentdetails';
import Signup from './components/signup';
import Welcome from './components/welcome';
import Cardetails from './components/cardetails';
import Addcar from './components/addcar';
import Adminlogin from './components/adminlogin';
import Forget from './components/forget';
import Otp from './components/otp';
import Newpass from './components/newpass';
import Adminhome from './components/admin/adminhome';
import Adminrecord from './components/admin/adminrecord';
import Update from './components/update';
import About from './components/About';
import Admincontact from './components/admin/admincontact';
import Contact from './components/contact';
import Adminaddcar from './components/admin/adminaddcar';
import Payment from './components/payment';
import Success from './components/success';


function App() {
  return (
<BrowserRouter>
<div>
  <Navbar />
  <Routes>
  <Route path="/" element={<Welcome></Welcome>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/adminlogin" element={<Adminlogin></Adminlogin>}></Route>
    <Route path="/rentdetails" element={<Rentdetails></Rentdetails>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/cardetails" element={<Cardetails></Cardetails>}></Route>
    <Route path="/addcar" element={<Addcar></Addcar>}></Route>
    <Route path="/forget" element={<Forget></Forget>}></Route>
    <Route path="/otp" element={<Otp></Otp>}></Route>
    <Route path={`/update/:id`} element={<Update></Update>}></Route>
    <Route path="/newpass" element={<Newpass></Newpass>}></Route>
    <Route path="/adminhome" element={<Adminhome></Adminhome>}></Route>
    <Route path="/adminrecord" element={<Adminrecord></Adminrecord>}></Route>
    <Route path="/About" element={<About></About>}></Route>
    <Route path="/admincontact" element={<Admincontact></Admincontact>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/adminaddcar" element={<Adminaddcar></Adminaddcar>}></Route>
    <Route path="/payment" element={<Payment></Payment>}></Route>
    <Route path="/success" element={<Success></Success>}></Route>




  </Routes>
</div>
</BrowserRouter>
  );
}

export default App;
