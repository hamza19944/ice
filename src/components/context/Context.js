import { createContext, useState } from "react";
import image from "../../assets/bkbk.png"

export const DataCtx = createContext()

const DataProvider = (props) => {
    const [dataCtx, setDataCtx] = useState([
        {id: 1, name: "delicious ice-cream 1", price: 150, img: image, count: 0},
        {id: 2, name: "delicious ice-cream 2", price: 200, img: image, count: 0},
        {id: 3, name: "delicious ice-cream 3", price: 110, img: image, count: 0},
        {id: 4, name: "delicious ice-cream 4", price: 90, img: image, count: 0},
        {id: 5, name: "delicious ice-cream 5", price: 150, img: image, count: 0},
        {id: 6, name: "delicious ice-cream 6", price: 150, img: image, count: 0},
    ])
    const [chosenDataCtx, setChosenDataCtx] = useState([])

    if(chosenDataCtx.length > 0) localStorage.setItem("Products", JSON.stringify(chosenDataCtx))
    return (
        <DataCtx.Provider value={{dataCtx, chosenDataCtx, setChosenDataCtx}}>
            {props.children}
        </DataCtx.Provider>
    );
}
 
export default DataProvider;