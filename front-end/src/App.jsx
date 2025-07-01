import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import {UserContextProvider} from "./context/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Account from "./pages/Account"
import Header from "./component/Header"
import Place from "./pages/Place"

axios.defaults.baseURL = 
 import.meta.env.MODE === "development" 
      ? "http://localhost:4000/api"
      : "https://projeto-airbnb.onrender.com/api"
                                                  
axios.defaults.withCredentials = true;

function App() {
  

  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} /> 
          <Route path="/register" element={ <Register />} /> 
          <Route path="/account/:subpage/:action?/:id?" element={ <Account />} /> 
          <Route path="/place/:id" element={ <Place />} /> 
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
