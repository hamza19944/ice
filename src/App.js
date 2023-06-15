import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [cartItem, setCartItem] = useState([])
  const [isCartEmpty, setIsCartEmpty] = useState(true)

  const handleCartChange = (addedItem) => {
    if(isCartEmpty){
      console.log(isCartEmpty);
      setCartItem(addedItem)
    }else{
      setCartItem([])
    }
  }
  const handleItem = (item) => {
    return item
  }
  
  return (
    <div className="App" style={{backgroundColor:"var(--second-color)"}}>
      <NavBar cartItem = {cartItem} handleEmpty = {(value) => setIsCartEmpty(value)}/>
      <Home />
      {/* <Products handleCartChange = {handleCartChange} handleItem = {handleItem}/> */}
    </div>
  );
}

export default App;
library.add(fab, far, fas);