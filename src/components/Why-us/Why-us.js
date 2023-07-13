import "./why-us.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import delivery from "../../assets/why/fast-delivery.png"
import fresh from "../../assets/why/ice-cream (1).png"
import healthy from "../../assets/why/ice-cream (2).png"
import rightPic from "../../assets/view-decoration-with-cones-flowers.jpg"
const WhyUs = () => {
    return (
        <section className="why-us">
            <div className="container">
                <div className="left">
                <div className="head">
                    <span>Why Choose US</span>
                    <h2>We are a company of talented ice cream maker</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum ut nesciunt alias nihil, voluptatem nostrum molestiae aspernatur modi.</p>
                </div>
                <div className="body">
                    <div className="reason">
                        <div className="img">
                            <img src={delivery} alt="" />
                        </div>
                        <div className="talk">
                            <h3>Always fast delivery</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti beatae libero eveniet. Aliquid, corporis minima nesciunt temporibus</p>
                        </div>
                    </div>
                    <div className="reason">
                        <div className="img">
                            <img src={fresh} alt="" />
                        </div>
                        <div className="talk">
                            <h3>Always fast delivery</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti beatae libero eveniet. Aliquid, corporis minima nesciunt temporibus</p>
                        </div>
                    </div>
                    <div className="reason">
                        <div className="img">
                            <img src={healthy} alt="" />
                        </div>
                        <div className="talk">
                            <h3>Always fast delivery</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti beatae libero eveniet. Aliquid, corporis minima nesciunt temporibus</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="pic">
                    <img src={rightPic} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default WhyUs;