import cone from "../../assets/services/cone.png"
import box from "../../assets/services/box.png"
import shop from "../../assets/services/shop.png"
import two from "../../assets/services/two.png"

const Services = () => {
    return (
        <section className="services">
            <div className="head">
                <span>Services</span>
                <h1>Quality Services For You</h1>
            </div>
            <div className="container">
                <div className="card">
                    <span><img src={cone} alt="" /></span>
                    <h2>the Service</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis.</p>
                    <a href="#">Read More + icon</a>
                </div>
                <div className="card">
                    <span><img src={box} alt="" /></span>
                    <h2>the Service</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis.</p>
                    <a href="#">Read More + icon</a>
                </div>
                <div className="card">
                    <span><img src={shop} alt="" /></span>
                    <h2>the Service</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis.</p>
                    <a href="#">Read More + icon</a>
                </div>
                <div className="card">
                    <span><img src={two} alt="" /></span>
                    <h2>the Service</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis.</p>
                    <a href="#">Read More + icon</a>
                </div>
            </div>
        </section>
    );
}
 
export default Services;