import "./products.css"
import image from "../../assets/bkbk.png"
const Products = () => {
    return (
        <div className="products">
            <span>our shop</span>
            <h1>Our all delicious products</h1>
            <div className="container">
                <div className="product">
                    <div className="img">
                        <img src={image} alt="" />
                        <button className="add">+</button>
                    </div>
                    <div className="name-price">
                        <span>delicious ice-cream</span>
                        <span>150</span>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <img src={image} alt="" />
                        <button className="add">+</button>
                    </div>
                    <div className="name-price">
                        <span>delicious ice-cream</span>
                        <span>150</span>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <img src={image} alt="" />
                        <button className="add">+</button>
                    </div>
                    <div className="name-price">
                        <span>delicious ice-cream</span>
                        <span>150</span>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <img src={image} alt="" />
                        <button className="add">+</button>
                    </div>
                    <div className="name-price">
                        <span>delicious ice-cream</span>
                        <span>150</span>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <img src={image} alt="" />
                        <button className="add">+</button>
                    </div>
                    <div className="name-price">
                        <span>delicious ice-cream</span>
                        <span>150</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;