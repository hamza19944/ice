import "./home.css";
import Services from "./Services";
import image from "../../assets/about-1.jpg"
import freeShip from "../../assets/features/free-delivery.png"
import certificate from "../../assets/features/contract.png"
import credit from "../../assets/features/credit-card.png"
import support from "../../assets/features/customer-service.png"
// import Types from "./Types";
import DataProvider from "../context/Context";
import ScrollSection from "./ScrollSection";
import Products from "../Products/Products";
import WhyUs from "../Why-us/Why-us";
import { memo } from "react";


const Home = memo(({ setChosenData, setIsRemoved, isRemoved, changeData, isCartChanged, setIsCartChanged }) => {
    const handleData = (data) => {
        setChosenData(data)
    }
    return (
    <>
        <section className="land">
            <div className="container">
                <h2><span>Our</span> Sweets Are Here</h2>
                <a href="#products">Explore</a>
            </div>
        </section>
        {/* start features */}
        <section className="features">
            <div className="our-features">
                <span>Features</span>
                <h1>Our Best Features</h1>
            </div>
            <div className="container">
                <div className="card">
                    <span><img src={freeShip} alt="" /></span>
                    <h2>Free Shipping</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae a numquam natus, mollitia vel consectetur totam provident voluptatum, fugit assumenda omnis atque error iure earum quis, nulla aliquid nemo.</p>
                </div>
                <div className="card">
                    <span><img src={certificate} alt="" /></span>
                    <h2>Different Variants</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae a numquam natus, mollitia vel consectetur totam provident voluptatum, fugit assumenda omnis atque error iure earum quis, nulla aliquid nemo.</p>
                </div>                
                <div className="card">
                    <span><img src={credit} alt="" /></span>
                    <h2>Secure Payment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae a numquam natus, mollitia vel consectetur totam provident voluptatum, fugit assumenda omnis atque error iure earum quis, nulla aliquid nemo.</p>
                </div>                
                <div className="card">
                    <span><img src={support} alt="" /></span>
                    <h2>Friendly Support</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae a numquam natus, mollitia vel consectetur totam provident voluptatum, fugit assumenda omnis atque error iure earum quis, nulla aliquid nemo.</p>
                </div>
            </div>
        </section>
        {/* end features */}
        {/* <!-- start section filter --> */}
        <Services />
        {/* <Types /> */}
        <ScrollSection />
        <WhyUs />
        <DataProvider>
            <Products handleData = {handleData} setIsRemoved = {setIsRemoved} isRemoved = {isRemoved} changeData = {changeData} isCartChanged = {isCartChanged} setIsCartChanged = {setIsCartChanged} />
        </DataProvider>
    </>
    );
})
 
export default Home;