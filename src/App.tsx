import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineStore from "./pages/OnlineStore";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import  productsContext  from "./context/productsContext";
import Shop from "./pages/Shop";
import './App.css'
import axios from "axios";

function App() {
  let [products, setProducts] = useState<any>([]);
useEffect(()=>{
  axios.get("https://v203.github.io/cosmetics-api/products.json").then(el=> setProducts(el.data )).catch(err=> console.log(err))
},[] )
  
let [order,setOrder] = useState(0);





  return (
    <div className="App">

      <productsContext.Provider value={{ products, setProducts,order,setOrder}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/OnlineStore" element={<OnlineStore />} />
          </Routes>
        </Router>
      </productsContext.Provider>

    </div >

  )
}

export default App