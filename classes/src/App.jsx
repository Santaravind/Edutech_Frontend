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
import ProtectetRoute from "./component/route/ProtectetRoute"
import Logout from "./component/auth/Logout"
import TakeClass from "./component/pages/TakeClass"
import 'react-toastify/dist/ReactToastify.css';



function App() {
 return (
   <>
    <ToastContainer
     position="top-center" 
     autoClose={3000} 
        toastOptions={{
    style: {
      background: '#673AB7', // purple
      color: '#fff',
    },
    success: {
      style: {
        background: '#4CAF50',
      },
    },
    error: {
      style: {
        background: '#f44336',
      },
    },
  }}
     />
     <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/course" element={<Course/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/details" element={
      <ProtectetRoute>
    <Details/>
      
      </ProtectetRoute>
      
      }/>
    <Route path="/class" element={
      <ProtectetRoute>
    <TakeClass/>      
      </ProtectetRoute>
      
      }/>
     <Route path="/signin" element={<Signin/>}/>
     
     <Route path="/verify" element={<Verifycation/>}/>

     <Route path="/login" element={<Login/>}/>

      <Route path="/logout" element={
      <ProtectetRoute>
    <Logout/>
      
      </ProtectetRoute>
      
      }/>

   </Routes>
    <Footer/>
   </>
  )
}

export default App
