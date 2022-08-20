import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';



import PaymentForm from './Components/PaymentForm'
import Home from './Components/Home';
import Login from './LoginAndSignup/Login'
import Logtest from './LoginAndSignup/logintest';
import NavbarBS from './NavigationBar/NavbarBS'
import Logintest from './LoginAndSignup/logintest'

function App() {
  return (
    
      <div>
        
        {/* <NavbarBS/> */}
        <Routes>    
           <Route path ='/' element={<Home></Home>}></Route>
           <Route path ='Home' element={<Home></Home>}></Route>
           <Route path ='/Login' element={<Logintest></Logintest>}></Route>
           <Route path ='/PaymentForm' element={<PaymentForm></PaymentForm>}></Route>
           <Route path ='Trainer/PaymentForm' element={<PaymentForm></PaymentForm>}></Route>
           <Route path ='Employee/PaymentForm' element={<PaymentForm></PaymentForm>}></Route>
        </Routes>
        </div>
      
    
    
  );
}

export default App;
