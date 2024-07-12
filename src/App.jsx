import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Detail from "./Components/Detail"

const App = () => {
  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App