import './App.css';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import  Home  from './component/home';
import Services from './component/Services';
import  Record  from './component/Record';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './component/register';
import Login from './component/login';
import Forgot from './component/forgot';
import Otp from './component/opt';
import Recover from './component/recover';
import Details from './component/details';
import About from './component/About';
import Advert from './component/advert';
import Profile from './component/profile';
import Payment from './component/payment';
import Update from './component/update';
import Adminrecord from './component/adminrecord';
import Createrecord from './component/createrecord';

function App() {
  return ( 
    <BrowserRouter>
       <div>
       <Navbar/>
     
        <Routes>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Record' element={<Record></Record>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/forgot' element={<Forgot></Forgot>}></Route>
        <Route path='/otp' element={<Otp></Otp>}></Route>
        <Route path='/recover' element={<Recover></Recover>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/advert' element={<Advert></Advert>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path={`/update/:id`} element={<Update></Update>}></Route>
        <Route path='/adminrecord' element={<Adminrecord></Adminrecord>}></Route>
        <Route path='/craeterecord' element={<Createrecord></Createrecord>}></Route>
        </Routes>
       </div>
    
       
    </BrowserRouter>



    
    )
    
}

export default App;
