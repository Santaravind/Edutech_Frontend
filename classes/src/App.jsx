import { Route, Routes } from "react-router-dom"
import Header from "./component/pages/Header"
import Home from "./component/pages/Home"
import Course from "./component/pages/Course"
import AboutUs from "./component/pages/AboutUs"
import Footer from "./component/pages/Footer"
import Signin from "./component/auth/Signin"
import Login from "./component/auth/Login"
import Details from "./component/pages/Details"
import Verifycation from "./component/auth/Verifycation"
import { ToastContainer } from "react-toastify"



function App() {
 return (
   <>
    <ToastContainer position="top-right" autoClose={3000} />
     <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/course" element={<Course/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/details" element={<Details/>}/>
     <Route path="/signin" element={<Signin/>}/>
     
     <Route path="/verify" element={<Verifycation/>}/>

     <Route path="/login" element={<Login/>}/>

   </Routes>
    <Footer/>
   </>
  )
}

export default App
