import { BrowserRouter, Routes, Route } from "react-router-dom"
import Links from "./pages/Links"
import Qrcode from "./pages/Qrcode"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Login />} />
          <Route element={<PrivateRoute />} >
            <Route path='/link' element={<Links />} />
            <Route path='/qrcode' element={<Qrcode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
