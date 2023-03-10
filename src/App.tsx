import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineStore from "./pages/OnlineStore";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import productsContext from "./context/productsContext";
import Shop from "./pages/Shop";
import get_all_products, { grand_total } from "./Service";
import './App.css'
import axios from "axios";
import { IProducts } from "./Interfaces/IProducts";
import supabase from "./Supabase/Supabase";



function App() {
  let [products, setProducts] = useState<any>([]);


  let [order, setOrder] = useState(0.00);

  let [cart, setCart] = useState([]);
  useEffect(() => {


    let get_all_products = async () => {
      let { data, error } = await supabase.rpc("get_products");
       

      setProducts(data)
      return data
    }

    let grand_total = async () => {

      let { data, error } = await supabase.rpc("grand_total");
      setOrder(data)
    };

    let getCart = async () => {
      let { data, error } = await supabase.rpc("get_cart");
      
      
        setCart(data)

    }

    getCart()

    grand_total()
    get_all_products()

  }, [])



  let handleClickAdd = async (param: string, e:  React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    let { data, error } = await supabase.rpc("add_product", { product_name: param })

console.log("add clicked");

    setOrder(await grand_total());
    setProducts(await get_all_products());


  }

  let handleClickSub = async (param: string, e:  React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault()
    let { data, error } = await supabase.rpc("sub_product", { product_name: param });
    console.log("minus clicked");
    setOrder(await grand_total());
    setProducts(await get_all_products());
  }






  return (
    <div className="App">

      <productsContext.Provider value={{ cart,setCart,products, handleClickAdd, handleClickSub, setProducts, order, setOrder, get_all_products, grand_total }}>
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

function get_total(): import("react").SetStateAction<number> | PromiseLike<import("react").SetStateAction<number>> {
  throw new Error("Function not implemented.");
}
