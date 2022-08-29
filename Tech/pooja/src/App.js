import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Recent from "./Components/Recent-news/Home"
import { Admin } from "./Components/Admin/admin"
import { Create } from "./Components/Admin/create"
import { Update } from "./Components/Admin/update"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/about' exact element={<About></About>} />
          <Route path='/gallery' exact element={<Gallery></Gallery>} />
          <Route path='/Recent-news' exact element={<Recent></Recent>} />
          <Route path='/singlepage/:id' element={<SinglePage></SinglePage>} />
          <Route path='/blog' exact element={<Blog></Blog>} />
          <Route path='/blogsingle/:id' element={<BlogSingle></BlogSingle>} />
          <Route path='/testimonial' element={<Testimonial></Testimonial>} />
          <Route path='/admin' element={<Admin></Admin>} />
          <Route path='/create' element={<Create></Create>} />
          <Route path={`/update/:id`} element={<Update/>}></Route>
          <Route path='/contact' element={<Contact></Contact>} />
          <Route path='/sign-in' element={<Login></Login>} />
          <Route path='/Register' element={<Register></Register>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
