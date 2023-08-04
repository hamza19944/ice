import "./lazy.css"
import logo from "../../assets/logo.png"

const ForLazyLoading = () => {
    return (
        <section className="lazy">
            <span>
                <span>
                    <span>
                        <img src={logo} alt="" />
                    </span>
                </span>
            </span>
        </section>
    );
}
 
export default ForLazyLoading;