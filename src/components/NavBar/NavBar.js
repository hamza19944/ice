import { useState, useEffect } from "react";
import "./navbar.css"
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ cartItem, handleEmpty }) => {
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(0); 
    const [prodCart, setProdCart] = useState([]);
    const [total, setTotal] = useState([])
    const [navOpen, setNavOpen] = useState(false)
    const [top, setTop] = useState("")
    const [smallScreen, setSmallScreen] = useState(false)
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    
    // start add to cart
    const empty = <h1> Cart Is Empty </h1>
    let arr = []
    useEffect(() => {
        arr = []
        cartItem.map(prod => {
            let x = 0
            cartItem.forEach(p => {
                if(prod.id === p.id){
                    return x += 1;
                }
            })
            prod.amount = x
            arr.push(prod)
        })
        let uniqueArr = new Set(arr.reverse())
        arr = Array.from(uniqueArr)

        let amount = 0
        let price = 0
        setProdCart(() => {
            return arr.map((prod) => {
                return (
                    <div className="product" key={prod.id}>
                        <div className="img">
                            <img src={require("../../assets/" + prod.image)} alt="" />
                        </div>
                        <div className="price-card">
                            <span className="name">{ prod.name }</span>
                            <span className="amount">{ prod.amount }</span>
                            <span className="price">$ { prod.amount * prod.price }</span>
                        </div>
                    </div>
                )
            })
        })
        arr.map(item => {
            amount += item.amount
            price += item.price * item.amount
        })
        let totalOne = [amount, price]
        setTotal(totalOne)
    }, [cartItem])
    // end add to cart 

    // clear cart button function
    const handleClear = () => {
        setProdCart(() => <h1>Cart Is Empty</h1>)
        setTimeout(() => {setOpen(false)}, 1000)
        setIsCartEmpty(true)
        setTotal([])
        handleEmpty(isCartEmpty)
        console.log(isCartEmpty);
    }
    // start change header style on scroll 
    useEffect(() => {
      const handleScroll = e => {
        setScrolling(window.scrollY >= 100 ? 100 : 0)
        setOpen(false)
        if(scrolling > 0){
            return setTop("top")
        }else{
            return setTop("")
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [scrolling])
    // start change header style on scroll 
    
    // change toggle handle close or open shopping cart
    const handleClick = () => setOpen(!open)

    // handle nav open or close
    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }
    // handle small screen
    const handleSmall = () => {
        return( smallScreen ? 
            (<div className="cart-shopping cart-small">
                <div onClick={handleClick}>
                    {/* <FontAwesomeIcon icon={faShoppingBasket}/> */}
                    <span className="num-items">{total[0] ? total[0] : 0}</span>
                </div>
            </div>) : (<div className="cart-shopping">
                <p onClick={handleClick}><span className="num-items"></span> {total[0] ? total[0] : <FontAwesomeIcon icon="fa-solid fa-cart-shopping"/>}<span className="price">{total[1]}</span></p>
            </div>)
        )
    }
    useEffect(() => {
        window.innerWidth <= 450 ? setSmallScreen(true) : setSmallScreen(false) 
        handleSmall()
    })


    return (
        <header className={scrolling >= 10 ? "scroll" : ""}>
            <div className={navOpen && top ? "contact-all openNav top" : (navOpen ? "contact-all openNav" : "contact-all")}>
                <ul className="contact">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Store</a></li>
                </ul>
            </div>
            <div className="logo">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="bar">
                <div onClick={handleNavOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {handleSmall()}
            {/* start side bar */}
            <div className={open ? "back open": "back"} onClick={() => setOpen(false)}></div>
            <div className={open ? "side-bar open" : "side-bar"}>
                <h1>Cart</h1>
                <div className="products">
                    {prodCart.length > 0 ? prodCart : (<h1>Cart Is Empty, Choose Your Favorite Sweets</h1>)}
                </div>
                <div className="sum">
                    total $ <span>{total[1]}</span>
                </div>
                <div className="card-btns">
                    <button onClick={handleClear}>clear cart</button>
                    <button>check out</button>
                </div>
            </div>
        </header>
    );
}
 
export default NavBar;