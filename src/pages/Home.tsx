import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomeComponent from "../components/HomeComponet";
import ProductView from "../components/ProductView";
import ProductViewPage from "./ProductViewPage";
import Cart from "../components/Cart";
import BtnPM from "../components/BtnPM";



let Home = () => {

    return (
        <>
        {/* <Cart /> */}
        <Header />
       
        <HomeComponent /> 
         {/* <ProductView /> */}
        {/* <ProductViewPage /> */}
        
        </>)
}


export default Home