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
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { IProducts, IUserInfo } from "./Interfaces/IProducts";
import { User } from "@supabase/supabase-js";



function App() {


  let [products, setProducts] = useState<Array<IProducts> | any>([]);
  let [order, setOrder] = useState<number | any>(0.00);
  let [viewBool, setViewBool] = useState<boolean | any>(false);
  let [cart, setCart] = useState<any>([]);
  let [cartOverViewBool, setCartOverViewBool] = useState<boolean>(false);
  let [name, setName] = useState<string | any>("");
  

  let [user, setUser] = useState<IUserInfo>({id: "", first_name: "",province: "", city: "", email: "", street: "", surname: "", zipCode: ""})




  let getCart = async () => {
    let { data, error } = await supabase.rpc("get_cart");

    setCart(data)
    return data
  }

  useEffect(() => {



    let getTheUser = async () => {
      let { data, error } = await supabase.auth.getUser();



      


      if (error?.status !== 401 && data.user !== null ) {

        let { id,user_metadata:{first_name, surname, email, city, zipCode, street, province} } = data.user;
        console.log(email);
        
        setUser({...user, id:id,email:email,first_name:first_name,city:city,zipCode:zipCode,street:street,province:province,surname:surname});
        console.log(user);
        
      } else {
        console.log(error);

      }

    }


    getTheUser()
  }, [])















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



console.log(user);



  return (
    <div className="App">
      <ChakraProvider>


        <productsContext.Provider value={{
          singleItem, setSingleItem, viewBool, setViewBool, handleClickView, cart,
          setCart, products, handleClickAdd, handleClickSub, setProducts, order,
          setOrder, get_all_products, grand_total, cartOverViewBool, setCartOverViewBool, name, user, setUser
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

