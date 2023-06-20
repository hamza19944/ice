import "./home.css";
import Services from "./Services";
import image from "../../assets/about-1.jpg"
import freeShip from "../../assets/features/free-delivery.png"
import certificate from "../../assets/features/contract.png"
import credit from "../../assets/features/credit-card.png"
import support from "../../assets/features/customer-service.png"
// import Types from "./Types";
import ScrollSection from "./ScrollSection";
import Products from "../Products/Products";
import WhyUs from "../Why-us/Why-us";

const Home = () => {
    return (
    <>
        <div className="land">
            <div className="container">
                <h2><span>Our</span> Sweets Are Here</h2>
                <a href="#our-store">Explore</a>
            </div>
        </div>
        {/* start features */}
        <div className="features">
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
        </div>
        {/* end features */}
        {/* <!-- start about us --> */}
        <div className="about">
            <div className="dark"></div>
            <div className="container">
                <div className="about-us">
                    <h2>About <span>Us</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae a numquam natus, mollitia vel consectetur totam provident voluptatum, fugit assumenda omnis atque error iure earum quis, nulla aliquid nemo.</p>
                    <input type="button" value="More" className="btn" />
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        {/* <!-- start section filter --> */}
        <Services />
        {/* <Types /> */}
        <ScrollSection />
        <WhyUs />
        <Products />
    </>
    );
}
 
export default Home;