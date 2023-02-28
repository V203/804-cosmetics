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
import { IProducts } from "./Interfaces/IProducts";
import supabase from "./Supabase/Supabase";


function App() {
  let [products, setProducts] = useState<any>([]);


  let [order, setOrder] = useState(0.00);

  useEffect(() => {


    let get_all_products = async () => {
      let { data, error } = await supabase.from("cosmetics").select();
      setProducts(data)
      return data
    }

    let grand_total = async () => {

      let { data, error } = await supabase.rpc("grand_total");
      setOrder(data)
    };
    grand_total()
    get_all_products()

  }, [])



  // console.log( get_all_products());


  console.log(products);


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