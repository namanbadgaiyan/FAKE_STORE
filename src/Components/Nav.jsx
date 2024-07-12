import { useContext } from "react"
import { ProductContext } from "../Contexts/Context"
import { Link } from "react-router-dom";

const Nav = () => {
    const [products] = useContext(ProductContext)
    let AllCategory = products && products.reduce((acc,cv)=>[...acc, cv.category],[]);
    AllCategory = [...new Set(AllCategory)]

    const color = ()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.8)`
    }
    return (
        <div className="w-[15%] h-full bg-slate-300 flex flex-col items-center py-7">
            <a className="capitalize py-2 px-4 border border-blue-400 text-blue-400 font-semibold" href="/create">Add new product</a>
            <hr className="w-[80%] my-3" />
            <h1 className="w-[80%] text-xl mb-3">Category</h1>
            <div className="w-[80%]">
                {AllCategory.map((c,i)=>
                    <Link key={i} to={`/?category=${c}`} className="mb-2 flex items-center">
                        <span style={{backgroundColor: color()}} className="inline-block w-[12px] h-[12px] rounded-full mr-2"></span>
                        <h1 className="underlineAnimation">{c}</h1>
                    </Link>
                )}
                
            </div>
        </div>
    )
}

export default Nav