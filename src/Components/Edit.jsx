import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Contexts/Context";
import { toast } from "react-toastify";

const Edit = () => {
    const [product, setproduct] = useContext(ProductContext)
    const navigate = useNavigate();
    const {id} = useParams();
    const [products, setproducts] = useState({
        title: "",
        image : "",
        print : "",
        description : "",
        category: "",
    })

    const changeHandler = (e) => {
        setproducts({...products,[e.target.name] : e.target.value})
    }

    useEffect(()=>{
        setproducts(product.filter((p)=> p.id === id)[0])
    },[id])


    const EditproductHandler=(e)=> {
        e.preventDefault()

        if(products.title.trim().length < 5 || products.image.trim().length <5 || products.category.trim().length < 5 || products.description.trim().length < 5){
            alert("Every input must have atleast 4 char")
            return;
        }

        const pi = product.findIndex((p)=> p.id == id)

        const copydata = [...product]
        copydata[pi] = {...product.id , ...products}
        
        // const newProduct = {id:nanoid(),title, image, category, price, description}
        setproduct(copydata)
        localStorage.setItem("product",JSON.stringify(copydata))
        toast.success("product edited successfully")
        navigate(-1)        
    }
    
    
    
    return  (
        <form onSubmit={EditproductHandler} className="flex flex-col items-center w-screen h-screen py-10">
            <h1 className="text-4xl font-semibold capitalize">edit product</h1>
            
            <input type="text"
                placeholder="Title" 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                name="title"
                onChange={changeHandler}
                value={products && products.title}
            />

            <input type="url"
                placeholder="Image url" 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                name="image"
                onChange={changeHandler}
                value={products && products.image}
            />
            
            <div className="flex w-1/2 gap-5">        
                <input type="text"
                    placeholder="category" 
                    className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                    name="category"
                    onChange={changeHandler}
                    value={products && products.category}
                />

                <input type="number"
                    placeholder="price" 
                    className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                    name="price"
                    onChange={changeHandler}
                    value={products && products.price}
                />
            </div>

            <textarea rows={10}
                placeholder="Enter product description here..." 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                name="description"
                onChange={changeHandler}
                value={products && products.description}
            />
            <div className="w-1/2 mt-5">
                <button className="px-4 py-2 font-semibold text-blue-400 capitalize border border-blue-400" href="/create">edit  product</button>
            </div>
            
        </form>
    ) 
}

export default Edit