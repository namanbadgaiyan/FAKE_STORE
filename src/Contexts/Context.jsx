import axios from "../utils/Axios";
import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();

const Context = (props) => {
    const [product, setproduct] = useState(null)

    const getProducts = async()=>{
        try {
            const {data} = await axios("products")
            setproduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <ProductContext.Provider value={[product, setproduct]}>{props.children}</ProductContext.Provider>
    )
}

export default Context