import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OnlineStore from "./pages/OnlineStore";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import productsContext from "./context/productsContext";
import Shop from "./pages/Shop";
import Services from "./Service";
import './App.css';
import supabase from "./Supabase/Supabase";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { IProducts, IUserInfo } from "./Interfaces/IProducts";
import { User } from "@supabase/supabase-js";
import { productsObj } from "./product";



function App() {

  let services = Services();

  // console.log(services.getProducts());

  let [products, setProducts] = useState<Array<IProducts> | any>([]);
  let [order, setOrder] = useState<number | any>(0.00);
  let [viewBool, setViewBool] = useState<boolean | any>(false);
  let [cart, setCart] = useState<any>([]);
  let [cartOverViewBool, setCartOverViewBool] = useState<boolean>(false);
  let [name, setName] = useState<string | any>("");
  let [user, setUser] = useState<IUserInfo>({ id: "", first_name: "", province: "", city: "", email: "", street: "", surname: "", zipCode: "" });

  useEffect(() => {



    let getTheUser = async () => {
      let { data, error } = await supabase.auth.getUser();
      if (error?.status !== 401 && data.user !== null) {
        let { id, user_metadata: { first_name, surname, email, city, zipCode, street, province } } = data.user;
        setUser({ ...user, id: id, email: email, first_name: first_name, city: city, zipCode: zipCode, street: street, province: province, surname: surname });

      } else {
        console.log(error);
      }
    }

    getTheUser()
  }, [])

  useEffect(() => {
    setProducts(services.getProducts())
    setOrder(services.getGrandTotal())
    setCart(services.getCart())
    
  }, [])
  


  let [singleItem, setSingleItem] = useState<any>([])

  let handleClickAdd = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let { data, error } = await supabase.rpc("add_product", { product_name: param });
    services.add(param);
    setOrder(services.getGrandTotal());
    setCart(services.getCart());
  }

  let handleClickSub = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    services.sub(param);
    setCart(services.getCart());
    setOrder(services.getGrandTotal());
  }


  let handleClickView = async (param: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setViewBool(!viewBool);
    let { data, error } = await supabase.rpc("select_single", { param: param });
    setSingleItem(data);

    return data;
  }



  // console.log(products);




  return (
    <div className="App">
      <ChakraProvider>


        <productsContext.Provider value={{
          singleItem, setSingleItem, viewBool, setViewBool, handleClickView, cart,
          setCart, products, handleClickAdd, handleClickSub, setProducts, order,
          setOrder, cartOverViewBool, setCartOverViewBool, name, user, setUser, services
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

      </ChakraProvider>
    </div >

  )
}

export default App

