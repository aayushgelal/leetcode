import { BrowserRouter , Routes , Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage"
import AllProblems from "./Components/AllProblems/AllProblems";

import Navbar from "./Constants/Navbar/Navbar"
import ProblemsPage from "./Components/ProblemsPage/ProblemsPage";
import Signup from "./Components/Signup/Signup"
import Login from "./Components/Login/Login"
import "./App.css"
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
    const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem('token'))


  

    return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}} >
    <div className="custom-transition">
        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<AllProblems />} />
                <Route path="/blogs" element={<HomePage />} />

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/problemset/all/" element={<AllProblems/>} />
                <Route path="/problems/:pid" element={<ProblemsPage/>} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
         </div>
         </AuthContext.Provider>
  )
}

export default App
