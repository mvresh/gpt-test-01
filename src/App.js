import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Fintechhaikus from "./Fintechhaikus"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="fintechhaikus" element={ <Fintechhaikus/> } />
      </Routes>
    </div>
  )
}

export default App