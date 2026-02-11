import { Route, Router, Routes, useLocation } from "react-router-dom"
import Header from "./component/pages/Header"
import Home from "./component/pages/Home"
import Course from "./component/pages/Course"
// import AboutUs from "./component/pages/AboutUs"
import Footer from "./component/pages/Footer"
import Signin from "./component/auth/Signin"
import Login from "./component/auth/Login"
import Details from "./component/pages/Details"
import Verifycation from "./component/auth/Verifycation"
import { ToastContainer } from "react-toastify"
import ProtectetRoute from "./component/route/ProtectetRoute"
import Logout from "./component/auth/Logout"

import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./component/route/ScrollToTop"
import SendNotification from "./component/notifications/SendNotification"
import Notification from "./component/notifications/Notification"
import { Toaster } from "react-hot-toast"
import Buy from "./component/pages/Buy"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { login } from "./component/redux/authSlice"
import ArduinoCouse from "./component/pages/ArduinoCouse"
import Olevel from "./component/pages/Olevel"
import CCourse from "./component/pages/CCourse.jsx"
import AboutUs from "./component/aboutPages/AboutUs.jsx"
import Indresh from "./component/aboutPages/Indresh.jsx"
import Aravind from "./component/aboutPages/Aravind.jsx"
import DoutCourse from "./component/pages/DoutCourse.jsx"
import ForensicIFrame from "./component/pages/forensicPage/ForensicIFrame.jsx"
import ForensicDetails from "./component/pages/forensicPage/ForensicDetails.jsx"
import DoutClass from "./component/pages/forensicPage/DoutClass.jsx"
import AboutUsFooter from "./component/aboutPages/AboutUsFooter.jsx"
import TechSite from "./component/techsite/TechSite.jsx"
import Homet from "./component/techsite/Homet.jsx"
import ServicesSection from "./component/techsite/ServiceSection.jsx"
import Indresht from "./component/techsite/Indresht.jsx"
import Internshiprogram from "./component/pages/Internshiprogram.jsx"


function App() {
  const dispatch = useDispatch();
   const location = useLocation(); // detect current route

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(login(token)); // restore login
    }
  }, [dispatch]);

   // Hide Header/Footer for /techsite routes
  const hideLayout = location.pathname.startsWith("/tech");
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
     {/* <Header/> */}
     {/* Show Header only when not on techsite */}
      {!hideLayout && <Header />}
     <ScrollToTop/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/course" element={<Course/>}/>
    {/* //Abous us pages */}
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/indresh" element={<Indresh/>}/>
    <Route path="/sant" element={<Aravind/>}/>
    <Route path="/internship" element={<Internshiprogram/>}/>

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
    <Route path="/arduino" element={
       
       <ArduinoCouse/> 
                 
      }/>

      <Route path="/olevel" element={
         <Olevel/>   
              }/>

                 {/* Forensic Science  */}
              <Route path="/Iframe" element={
                  <ProtectetRoute>
                  <ForensicIFrame/>
                   </ProtectetRoute>
                
                
              }/>

              {/* Forensic Details  */}
              <Route path="/framedetails" element={<ForensicDetails/>} />
              {/* Forensic Doubt  */}

              <Route path="/frameDoubt" element={
                 <ProtectetRoute> 
                  <DoutClass/>
                 </ProtectetRoute>          
              } />

      <Route path="/ccourse" element={
         <CCourse/>         
          
      }/>

      {/* doute class  */}
       <Route path="/doute" element={
         <DoutCourse/>           
      }/>

      <Route path="/footeraboutus" element={<AboutUsFooter/>}/>

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
   {!hideLayout &&<Footer/>}
   {/* //TechSite route for header and outlet */}
 <Routes>
     <Route path="/tech" element={<TechSite/>}>
          <Route index element={<Homet/>}/>
          <Route path="servicet" element={<ServicesSection/>}/>
          <Route path="Indresht" element={<Indresht/>}/>
       </Route>
  </Routes>
       
    
   </>
  )
}

export default App
