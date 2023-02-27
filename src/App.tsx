import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineStore from "./pages/OnlineStore";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import productsContext from "./context/productsContext";
import Shop from "./pages/Shop";
import get_all_products, { add, grand_total, sub } from "./Service";
import './App.css'
import axios from "axios";

function App() {
  let [products, setProducts] = useState<any>([]);


  let [order, setOrder] = useState<number>(0.00);

  useEffect(() => {
    let get_order = async () => {
      products.length === 0 ? setProducts(await get_all_products()): null;
      order >= 0.00 ? setOrder(await grand_total()) : null;
    }
    get_order()
  
  }, [])



  return (
    <div className="App">

      <productsContext.Provider value={{ products, setProducts, order, setOrder, add, get_all_products, grand_total, sub }}>
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