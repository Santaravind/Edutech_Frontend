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
import ScrollToTop from "./component/route/ScrollToTop"
import SendNotification from "./component/notifications/SendNotification"
import Notification from "./component/notifications/Notification"
import { Toaster } from "react-hot-toast"
import Buy from "./component/pages/Buy"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { login } from "./component/redux/authSlice"



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(login(token)); // restore login
    }
  }, [dispatch]);
 return (
   <>
    <Toaster position="top-right" reverseOrder={false} />
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
     <ScrollToTop/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/course" element={<Course/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/notificationsend" element={
      <ProtectetRoute>
      <SendNotification/>
      </ProtectetRoute>
      }/>
    <Route path="/notification" element={
       <ProtectetRoute>      
      < Notification/>
      </ProtectetRoute>
      }/>

    <Route path="/details" element={
      <ProtectetRoute>
    <Details/>
      
      </ProtectetRoute>
      
      }/>
    {/* <Route path="/class" element={
      <ProtectetRoute>
    <TakeClass/>      
      </ProtectetRoute> 
      
      }/>*/}
      <Route path="/buy" element={<Buy/>}/>
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
