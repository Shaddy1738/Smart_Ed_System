import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
import Dashboard from "./components/Dashboard"
import Events from "./components/Events"
import Subjects from "./components/Subjects"
import Exams from "./components/Exams"
import Messages from "./components/Messages"
import NoticeBoard from "./components/NoticeBoard"
import Classes from "./components/Classes"
import Routine from "./components/Routine"
import LiveClass from "./components/LiveClass"
import Students from "./components/Students"



function App() {

  return (
    <Router>
    <Routes >
    <Route path ="/" element ={<LandingPage/>}/>
    <Route path = "/loginPage" element ={<LoginPage/>}/>
    <Route path = "/dashboard" element ={<Dashboard/>}/>
    <Route path = "/events" element ={<Events/>}/>
    <Route path = "/subjects" element ={<Subjects/>}/>
    <Route path = "/liveClass" element ={<LiveClass/>}/>
    <Route path = "/messages" element ={<Messages/>}/>
    <Route path = "/routine" element ={<Routine/>}/>
    <Route path = "/notice" element ={<NoticeBoard/>}/>
    <Route path = "/classes" element ={<Classes/>}/>
    <Route path = "/exams" element ={<Exams/>}/>
    <Route path = "/students" element ={<Students/>}/>
    </Routes>
    </Router>
  )
}

export default App
