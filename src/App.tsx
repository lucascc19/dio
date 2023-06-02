import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";

export const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
};