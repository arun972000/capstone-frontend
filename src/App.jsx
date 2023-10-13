
import './App.css'
import NavbarMain from './components/Header/Navbar'
import AllBlogs from './components/content/Blog/AllBlogs'
import EditBlogForm from './components/content/Blog/Crud/Edit'
import CreateBlogForm from './components/content/Blog/createBlog'
import Searchblogs from './components/content/Blog/searchresult'
import SingleBlog from './components/content/Blog/singleBlog'
import Dashboard from './components/content/Dashboard'
import {Route,Routes} from "react-router-dom"
import Profile from './components/content/Profile'
import LoginForm from './components/Login/Login'
import RegistrationForm from './components/Register/Register'
import PasswordResetCard from './components/password/email'
function App() {
 

  return (
    <>
     <NavbarMain/>
     <div className="container">
      <Routes>
        <Route path="/" element={"hello"}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/blog" element ={<AllBlogs/>}/>
        <Route path="/blog/create" element={<CreateBlogForm/>}/>
        <Route path="/view/:id" element={<SingleBlog/>}/>
        <Route path="/Edit/:id" element={<EditBlogForm/>}/>
        <Route path="/search/:name" element={<Searchblogs/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login"  element={<LoginForm/>}/>
        <Route path="/register"  element={<RegistrationForm/>}/>
        <Route path="/verifyPass" element={<PasswordResetCard/>}/>
      </Routes>
     
     </div>
    </>
  )
}

export default App
