import './App.css';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
// import More_deatils from './component/Moredeatils';
import  Home  from './component/home';
import Services from './component/Services';
import  Record  from './component/Record';
import {BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return ( 
    <BrowserRouter>
       <div>
       <Navbar/>
     
        <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
         {/* eslint-disable-next-line */}
        {/* <Route path='/Moredeatils' element={<More_deatils></More_deatils>}></Route> */}
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Record' element={<Record></Record>}></Route>
        </Routes>
       </div>
    
       
    </BrowserRouter>



    
    )
    
}

export default App;
