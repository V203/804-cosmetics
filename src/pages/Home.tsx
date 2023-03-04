import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomeComponent from "../components/HomeComponet";
import ProductView from "../components/ProductView";
import ProductViewPage from "./ProductViewPage";



let Home = () => {

    return (
        <>
        <Header />
        <HomeComponent /> 
         <ProductView />
        <ProductViewPage />
        
        </>)
}


export default Home