import "./products.css"
import image from "../../assets/bkbk.png"
import { useEffect, useState } from "react";
const Products = ({ handleData, setIsRemoved, isRemoved, changeData, isCartChanged, setIsCartChanged }) => {
    // declaring states
    const [chosen, setChosen] = useState([])

    const data = [
        {id: 1, name: "delicious ice-cream 1", price: 150, img: image, count: 0},
        {id: 2, name: "delicious ice-cream 2", price: 200, img: image, count: 0},
        {id: 3, name: "delicious ice-cream 3", price: 110, img: image, count: 0},
        {id: 4, name: "delicious ice-cream 4", price: 90, img: image, count: 0},
        {id: 5, name: "delicious ice-cream 5", price: 150, img: image, count: 0},
        {id: 6, name: "delicious ice-cream 6", price: 150, img: image, count: 0},
    ]
    // function for the data
    const sentData =(cdt, dt, allRemoved, oneRemoved) => {
        let filtered = []
        if(allRemoved){
            setIsCartChanged(false)
            setIsRemoved(false)
            setChosen([])
            return []
        }else if(oneRemoved){
            setChosen(cdt)
            return cdt
        }else{
            arr = []
            dt.map(prod => {
                let x = 0
                dt.forEach(p => {
                    if(prod.id === p.id){
                        return x += 1;
                    }
                })
                prod.count = x
                arr.push(prod)
            })
            return filtered = arr.filter((prod, i, a) => a.findIndex(prod2 => (prod2.id === prod.id)) === i)
        }
    }
    // clear on Click
    const toAddProduct = () => {
        setIsRemoved(false)
    }
    // for sending the chosen data
    let arr = []
    useEffect(() => {
        handleData(sentData(changeData, chosen, isRemoved, isCartChanged))
    }, [changeData, chosen, isRemoved, isCartChanged])

    return (
        <section className="products" id="products">
            <span>our shop</span>
            <h1>Our all delicious products</h1>
            <div className="container">
                {
                    data.map(choice => {
                        return (
                            <div className="product" key={choice.id}>
                                <div className="img">
                                    <img src={choice.img} alt="" />
                                    <button className="add" onClick={() => { toAddProduct(); setChosen([choice, ...chosen]); setIsCartChanged(false)}}>+</button>
                                </div>
                                <div className="name-price">
                                    <span>{choice.name}</span>
                                    <span>{choice.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
 
export default Products;