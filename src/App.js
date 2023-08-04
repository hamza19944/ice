import { Suspense, useEffect, useState, lazy } from "react";
import Nav from "./components/NavBar/Nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about/About";
import ForLazyLoading from "./components/lazy/ForLazyLoading";
import Checkout from "./components/checkout/Checkout";
import DataProvider from "./components/context/Context";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
const LazyComponent = lazy(() => {
  return Promise.all([
    import("./components/Home/Home.js"),
    new Promise(resolve => setTimeout(resolve, 2500))
  ]).then(([moduleExports]) => moduleExports) 
});

function App() {
  const [chosenData, setChosenData] = useState([])
  const [changeData, setChangeData] = useState([])
  const [isRemoved, setIsRemoved] = useState(false)
  const [isCartChanged, setIsCartChanged] = useState(false)

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Lemonada', "cursive"
      ].join(','),
    }
  });

  window.addEventListener("load", () => {
    localStorage.removeItem("Products")
  })

  return (
    <Router>
      <Nav chosenData = {chosenData} setIsRemoved = {setIsRemoved} setChangeData = {setChangeData} setIsCartChanged = {setIsCartChanged} />
      <Routes className="App" style={{backgroundColor:"var(--second-color)"}}>
        <Route path="/" element={<Suspense fallback={<ForLazyLoading />}><LazyComponent setChosenData = {setChosenData} setIsRemoved = {setIsRemoved} isRemoved = {isRemoved} changeData = {changeData} isCartChanged = {isCartChanged} setIsCartChanged = {setIsCartChanged}/></Suspense>} exact/>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={
          <DataProvider>
            <ThemeProvider theme={theme}>
              <Checkout chosenData = {chosenData}/>
            </ThemeProvider>
          </DataProvider>
        } />
        <Route path="/load" element={<ForLazyLoading />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
library.add(fab, far, fas);