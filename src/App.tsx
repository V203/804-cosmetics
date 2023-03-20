import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineStore from "./pages/OnlineStore";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import productsContext from "./context/productsContext";
import Shop from "./pages/Shop";
import get_all_products, { grand_total } from "./Service";
import './App.css';
import supabase from "./Supabase/Supabase";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {


  let [products, setProducts] = useState<any>([]);
  let [order, setOrder] = useState<number | any>(0.00);
  let [viewBool, setViewBool] = useState<boolean | any>(false);
  let [cart, setCart] = useState<any>([]);
  let [cartOverViewBool, setCartOverViewBool] = useState<boolean>(false);


  let getCart = async () => {
    let { data, error } = await supabase.rpc("get_cart");

    setCart(data)
    return data
  }

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


    getCart()

    grand_total()
    get_all_products()

  }, [])

  let [singleItem, setSingleItem] = useState<any>([])

  let handleClickAdd = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    let { data, error } = await supabase.rpc("add_product", { product_name: param })


    await getCart()
    setOrder(await grand_total());
    setProducts(await get_all_products());
    setCart(await getCart())


    // setCart(cart)


  }

  let handleClickSub = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault()
    let { data, error } = await supabase.rpc("sub_product", { product_name: param });
    console.log("minus clicked");
    setOrder(await grand_total());
    setProducts(await get_all_products());
    setCart(await getCart())

  }


  let handleClickView = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    setViewBool(!viewBool)
    let { data, error } = await supabase.rpc("select_single", { param: param });


    setSingleItem(data);

    return data
  }

  
  
  


  return (
    <div className="App">

      <productsContext.Provider value={{
        singleItem, setSingleItem, viewBool, setViewBool, handleClickView, cart,
        setCart, products, handleClickAdd, handleClickSub, setProducts, order, 
        setOrder, get_all_products, grand_total,cartOverViewBool,setCartOverViewBool
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/OnlineStore" element={<OnlineStore />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
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
