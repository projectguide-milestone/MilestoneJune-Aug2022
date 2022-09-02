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
import Adminrecord from './component/admin/adminrecord';
import Createrecord from './component/createrecord';
import Welcome from './component/welcome';
import Adminlogin from './component/admin/adminlogin';
import Adminhome from './component/admin/adminhome';
import Sidebar from './component/sidebar';
import Admincontact from './component/admin/admincontact';
import Details1 from './component/details1';
import Details2 from './component/details2';
import Details3 from './component/details3';
import Addagent from './component/admin/addagent'
import Adminagent from './component/admin/adminagent';
import Updateagent from './component/admin/updateagent';
import Adminpayment from './component/admin/adminpayment';
import Success from './component/success';
import Aprj from './component/aprj';
import  Reply from './component/reply'
import Netbanking from './component/netbanking';
import Google from './component/google';
import Paydetails from './component/paydetails';


function App() {
  return ( 
    <BrowserRouter>
       <div>
       <Navbar/>
     
        <Routes>
        <Route path='/google' element={<Google></Google>}></Route>
        <Route path='/' element={<Welcome></Welcome>}></Route>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Record' element={<Record></Record>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
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
        <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
        <Route path='/adminhome' element= {<Adminhome></Adminhome>}></Route>
        <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
        <Route path='/admincontact' element= {<Admincontact></Admincontact>}></Route>
        <Route path='/details1' element={<Details1></Details1>}></Route>
        <Route path='/details2' element={<Details2></Details2>}></Route>
        <Route path='/details3' element={<Details3></Details3>}></Route>
        <Route path='/addagent' element={<Addagent></Addagent>}></Route>
        <Route path='/adminagent' element={<Adminagent></Adminagent>}></Route>
        <Route path={`/updateagent/:id`} element={<Updateagent></Updateagent>}></Route>
        <Route path='/adminpayment' element={<Adminpayment></Adminpayment>}></Route>
        <Route path='/success' element={<Success></Success>}></Route>
        <Route path='/reply' element={<Reply></Reply>}></Route>
        <Route path={`/aprj/:id`} element={<Aprj></Aprj>}></Route>
        <Route path='/netbanking' element={<Netbanking></Netbanking>}></Route>
        <Route path='/paydetails' element={<Paydetails></Paydetails>}></Route>


        
       
        </Routes>
       </div>
  


    
       
    </BrowserRouter>
  

  
    
    )
    
}

export default App;
