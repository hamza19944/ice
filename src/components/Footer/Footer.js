import logo from "../../assets/logo-high.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="with-logo footer-item">
                <div className="img">
                    <img src={logo} alt="logo" />
                    {/* <h3>ПроМороженое</h3> */}
                </div>
            </div>
            <div className="quick-links footer-item">
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>FAQ's</li>
                    <li>Terms Of Service</li>
                    <li>Privacy Policy</li>
                    <li>Our Services</li>
                </ul>
            </div>
            <div className="follow-us footer-item">
                <h3>Follow Us:</h3>
                <ul className="follow-us-icons">
                    <li><FontAwesomeIcon icon="fa-brands fa-vk" className="brands-icons" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-whatsapp" className="brands-icons" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-telegram" className="brands-icons" /></li>
                </ul>
                <h3>Contacts</h3>
                <ul>
                    <li> <FontAwesomeIcon icon="phone-alt" className="icon"/> <span>phone</span></li>
                    <li> <FontAwesomeIcon icon="location-pin" className="icon"/> <span>location</span></li>
                    <li> <FontAwesomeIcon icon="envelope" className="icon"/> <span>email</span></li>
                </ul>
            </div>
            
        </div>
    );
}
 
export default Footer;