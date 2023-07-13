import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ chosenData, setIsRemoved, setChangeData, setIsCartChanged }) => {
    // declaring states
    const [open, setOpen] = useState(false)
    const [num, setNum] = useState(0)
    const [price, setPrice] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    // handling the states
    const handleOpen = () => setOpen(!open)

    // handling the data
    useEffect(() => {
        let x = 0;
        let y = 0
        chosenData.map(prod => {
            y += (prod.count * prod.price)
            x += prod.count
        });
        setPrice(y);
        setNum(x)
    }, [chosenData]);

    // Clear Data
    const handleClear = () => {
        setIsRemoved(true)
        setTimeout(() => {
            setOpen(false)
        }, 700)
    }
    const handleChangeData = (idDelete) => {
        let newArr = chosenData.filter(dt => dt.id !== idDelete)
        setIsCartChanged(true)
        setChangeData(newArr);
    }
    // rendering elements
    return (
        <header>
            <section className="container">
                <div className="contact-all">
                    <ul className="contact">
                        <li>
                            <NavLink to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/store">Store</NavLink>
                        </li>
                    </ul>
                    <ul className={isClicked ? "bar clicked" : "bar"} onClick={() => setIsClicked(!isClicked)}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="bar">
                    <div>
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className="cart-shopping">
                    <p  onClick={handleOpen}>
                        <span className="num-items"></span>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping"/>
                        <span className="price">{num}</span>
                    </p>
                </div>
                <div className={open ? "side-bar open" : "side-bar"}>
                    <h1>Cart</h1>
                    <div className="products">
                       {chosenData.length > 0 ? chosenData.map(prod => {
                        return (<div className="product" key={prod.id}>
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <div className="name-price-amount">
                                <div className="prod-name">
                                    <h3>{prod.name}</h3>
                                    <span onClick={() => handleChangeData(prod.id)}>X</span>
                                </div>
                                <div className="price-amount">
                                    <span>{prod.count}</span>
                                    <span>{prod.price * prod.count}</span>
                                </div>
                            </div>
                        </div>)
                       }) : (<h1 id="empty-cart">Cart is Empty, choose your favourite taste</h1>)}
                    </div>
                    <div className="sum">
                        total $ <span>{price}</span>
                    </div>
                    <div className="card-btns">
                        <button onClick={handleClear}>Clear cart</button>
                        <button>Check out</button>
                    </div>
                </div>
                <div className={open ? "back open" : "back"} onClick={() => setOpen(false)}></div>
            </section>
        </header>
    );
}
 
export default Nav;