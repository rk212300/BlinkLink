import { BrowserRouter, Routes, Route } from "react-router-dom"
import Links from "./pages/Links"
import Qrcode from "./pages/Qrcode"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Landing from "./pages/Landing"
import Home from "./pages/Home"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Login />} />
          <Route element={<PrivateRoute />} >
            <Route path='/home' element={<Home />} />
            <Route path='/link' element={<Links />} />
            <Route path='/qrcode' element={<Qrcode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
