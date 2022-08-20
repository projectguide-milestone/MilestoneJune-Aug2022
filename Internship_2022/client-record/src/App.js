import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/homePage';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Update } from './Components/update';
import { LoginPage } from './Login/loginpage';

function App() {
/*  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  ); */
  return (
    <BrowserRouter>
    <Header></Header>
      <div>
        <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/footer' element= {<Footer/>}></Route>
          <Route path={`/update/:id`} element={<Update/>}></Route>
          <Route path='/login' element= {<LoginPage/>}></Route>
        </Routes>
      </div>     
    </BrowserRouter>
  )
}

export default App;
