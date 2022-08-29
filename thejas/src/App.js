
import './App.css';
import Contact from './Components/Contact';
import More_deatils from './Components/More_deatils';
import Home from './Components/Home';
import {BrowserRouter,useLocation} from 'react-router-dom';
import {Routes, Route,  } from 'react-router-dom';
import Signin from './Components/Dumpfolder/signin';
import Signup from './Components/Dumpfolder/Signup';
import Forgetpass from './Components/Forgetpass';
import Adminlog from './Components/Dumpfolder/Adminlog';
import Records from './Components/Admin/Records';
import Enterotp from './Components/Enterotp';
import Reasetpass from './Components/Resetpass';
import Booktik from './Components/Booktik'
import Update from './Components/Admin/update';
import Trainlist from './Components/Trainlist';
import Navbar from "./Components/Nav"
import Admin from './Components/Admin/Admin';
import Sampleadmin from './Components/Dumpfolder/sampleadmin';
import History from './Components/History';
// import Admin from './Components/Admin/Admin';





function App() {

  const locationObj = useLocation()
  console.log(locationObj.pathname)


  return (
    <div>
      
      
      

      {locationObj.pathname == '/' ? null  : 
        locationObj.pathname == '/Signup' ? null :
        locationObj.pathname == '/Adminlog' ? null :
        locationObj.pathname == '/Login' ? null :
        
        locationObj.pathname == '/Admin' ? null : <Navbar/> }

        <Routes>
          <Route path='/' element={<Signin></Signin>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/More_details' element={<More_deatils></More_deatils>}></Route>
          <Route path='/Login'element={<Signin></Signin>}></Route>
          <Route path='/Signup'element={<Signup></Signup>}></Route>
          <Route path='/Adminlog'element={<Adminlog></Adminlog>}></Route>
          <Route path='/Forgetpass'element={<Forgetpass></Forgetpass>}></Route>
          <Route path='/Records'element={<Records></Records>}></Route>
          <Route path='/Enterotp'element={<Enterotp></Enterotp>}></Route>
          <Route path='/Resetpass'element={<Reasetpass></Reasetpass>}></Route>
          <Route path={`/update/:id`} element={<Update></Update>}></Route>
          <Route path='/Booktik'element={<Booktik></Booktik>}></Route>
          <Route path='/Trainlist'element={<Trainlist></Trainlist>}></Route>
          <Route path='/Admin'element={<Admin></Admin>}></Route>
          <Route path='/History'element={<History></History>}></Route>
          <Route path='/sampleadmin'element={<Sampleadmin></Sampleadmin>}></Route>
          {/* <Route path='/Admin'element={<Admin></Admin>}></Route> */}
          
          
          
          
        </Routes>

    
        
     
      </div>
  );
}

export default App;
