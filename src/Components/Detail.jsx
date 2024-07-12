import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading";

const Detail = () => {
    const [SingleProduct, setSingleProduct] = useState(null)
    const {id} = useParams();
    const getOneProduct = async()=>{
        try {
            const {data} = await axios(`/products/${id}`)
            setSingleProduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getOneProduct();
    },[])
    return SingleProduct ? (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <div className="w-[70%] h-[80%] bg-white shadow rounded flex gap-5">
                <div className="left w-[45%] flex items-center justify-center">
                    <img className="w-[80%] h-[80%] object-contain" src={SingleProduct.image} alt="" />
                </div>
                <div className="details w-[55%] flex flex-col items-center bg-slate-50 text-center py-20 px-5">
                    <h1 className="title text-[2vw] font-semibold">{SingleProduct.title}</h1>
                    <h3 className="category text-[1.5vw] font-medium text-slate-600 my-3">{SingleProduct.category}</h3>
                    <h2 className="price text-[1.4vw] font-medium text-red-500">${SingleProduct.price}</h2>
                    <p className="description text-[1.5vw] font-normal my-3 max-h-[20vh] overflow-auto text-slate-500">{SingleProduct.description}</p>
                    <div className="w-[36%] flex gap-5 mt-4">
                        <Link to="/edit" className="py-2 px-6 text-[1.2vw] rounded capitalize text-blue-600 border border-blue-600">Edit</Link>
                        <Link to="/delete" className="py-2 px-6 text-[1.2vw] rounded capitalize text-red-600 border border-red-600">Delete</Link>
                    </div>
                </div>  
            </div>
        </div>
    ) : (<Loading />)
}

export default Detail