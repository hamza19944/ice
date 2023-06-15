import iceberry from "../../assets/partner/iceberry.jpg"
import nevaholad from "../../assets/partner/e5fd8e91a99b9724b1f0478b08.jpg"
const ScrollSection = () => {
    return (
        <div className="scroll-section">
            <h1>Our Partners</h1>
            <div className="container">
                <div className="partner">
                    <div className="img">
                        <span><img src={iceberry} alt="" /></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="img">
                        <span><img src={nevaholad} alt="" /></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ScrollSection;