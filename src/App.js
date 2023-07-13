import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/NavBar/Nav";
import Products from "./components/Products/Products";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about/About";

function App() {
  const [chosenData, setChosenData] = useState([])
  const [changeData, setChangeData] = useState([])
  const [isRemoved, setIsRemoved] = useState(false)
  const [isCartChanged, setIsCartChanged] = useState(false)

  return (
    <Router>
      <Nav chosenData = {chosenData} setIsRemoved = {setIsRemoved} setChangeData = {setChangeData} setIsCartChanged = {setIsCartChanged} />
      <Routes className="App" style={{backgroundColor:"var(--second-color)"}}>
        <Route path="/" element={<Home setChosenData = {setChosenData} setIsRemoved = {setIsRemoved} isRemoved = {isRemoved} changeData = {changeData} isCartChanged = {isCartChanged} setIsCartChanged = {setIsCartChanged}/>} exact/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
library.add(fab, far, fas);