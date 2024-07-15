import { Link, Route, Routes, useLocation } from "react-router-dom"
import Body from "./Components/Body"
import Detail from "./Components/Detail"
import Create from "./Components/Create"
import Edit from "./Components/Edit"

const App = () => {
  const {search , pathname} = useLocation()
  return (
    <div className="flex w-full h-screen">
      {(pathname != '/' || search.length > 0) && <Link to='/' className="absolute text-2xl text-blue-600 top-2 right-7">Back To Home</Link>}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App