import { Link, useLocation } from "react-router-dom"
import Nav from "./Nav"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Contexts/Context"
import Loading from "./Loading"
import axios from "../utils/Axios"

const Body = () => {
    const [products] = useContext(ProductContext)
    const {search} = useLocation();
    const category = decodeURIComponent(search.split('=')[1])
    const [catViseProduct, setcatViseProduct] = useState(null)

    const getProductCategory = async()=>{
        try {
            const {data} = await axios.get(`/products/category/${category}`)
            setcatViseProduct(data)
        } catch (error) {
            console.log(error);
        }
    }
;

    useEffect(() => {
        if(!catViseProduct || category=='undefined'){setcatViseProduct(products)}
        if(category != "undefined"){
            // getProductCategory()
            setcatViseProduct(products.filter((p)=> p.category == category))
        }
    }, [category , products])
    

    return products ?(
        <>
        <Nav />
        <div className="w-[85%] px-10 py-10 flex flex-col overflow-y-auto">
            <div className="flex flex-wrap ">
                {catViseProduct && catViseProduct.map((p,i)=>(
                    <Link key={i} to={`/details/${p.id}`} className="card w-[18vw] h-[45vh] shadow rounded border mr-2 mb-2 items-center py-3 hover:scale-105 flex flex-col">
                        <div className="image w-[80%] h-[65%] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${p.image})`}} ></div>
                        <div>
                            <h1 className="my-3 text-xl font-normal text-center hover:underline">{p.title}</h1>
                            <p className="text-lg font-light text-center">${p.price}</p>
                        </div>
                    </Link>
                ))} 
            </div>
        </div>
        </>
    )
    : (<Loading />)
}

export default Body