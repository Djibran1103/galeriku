import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Art from "./pages/Art";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/images" element={<Images />} />
        <Route path="/art" element={<Art />} />
        <Route path="/detail/:id" element={<Detail/>}/>
         
      </Routes>
    </Router>
  );
}

export default App;
