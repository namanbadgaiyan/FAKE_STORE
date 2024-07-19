import { nanoid } from "nanoid"
import { useContext, useState } from "react"
import { ProductContext } from "../Contexts/Context"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Create = () => {
    const navigate = useNavigate();
    const [product, setproduct] = useContext(ProductContext)
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    


    const AddproductHandler=(e)=> {
        e.preventDefault()

        if(title.trim().length < 5 || image.trim().length <5 || category.trim().length < 5 || description.trim().length < 5){
            alert("Every input must have atleast 4 char")
            return;
        }
        
        const newProduct = {id:nanoid(),title, image, category, price, description}
        setproduct([...product, newProduct])
        localStorage.setItem("product",JSON.stringify([...product, newProduct]))
        toast.success("product created successfully")
        navigate("/")        
    }
    
    
    
    return (
        <form onSubmit={AddproductHandler} className="flex flex-col items-center w-screen h-screen py-10">
            <h1 className="text-4xl font-semibold capitalize">add new product</h1>
            
            <input type="text"
                placeholder="Title" 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                onChange={(e)=>{settitle(e.target.value)}}
                value={title}
            />

            <input type="url"
                placeholder="Image url" 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                onChange={(e)=>{setimage(e.target.value)}}
                value={image}
            />
            
            <div className="flex w-1/2 gap-5">        
                <input type="text"
                    placeholder="category" 
                    className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                    onChange={(e)=>{setcategory(e.target.value)}}
                    value={category}
                />

                <input type="number"
                    placeholder="price" 
                    className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                    onChange={(e)=>{setprice(e.target.value)}}
                    value={price}
                />
            </div>

            <textarea rows={10}
                placeholder="Enter product description here..." 
                className="w-1/2 px-3 py-2 my-2 text-xl rounded bg-slate-200" 
                onChange={(e)=>{setdescription(e.target.value)}}
                value={description}
            />
            <div className="w-1/2 mt-5">
                <button className="px-4 py-2 font-semibold text-blue-400 capitalize border border-blue-400">Add new product</button>
            </div>
            
        </form>
    )
}

export default Create