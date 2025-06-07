import { Route, Routes } from "react-router-dom"
import Header from "./component/pages/Header"
import Home from "./component/pages/Home"
import Course from "./component/pages/Course"
import AboutUs from "./component/pages/AboutUs"
import Footer from "./component/pages/Footer"



function App() {
 return (
   <>
     <Header/>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    
    <Route path="/course" element={<Course/>}/>
    <Route path="/about" element={<AboutUs/>}/>

   </Routes>
    <Footer/>
   </>
  )
}

export default App
