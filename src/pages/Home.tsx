import React, { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomeComponent from "../components/HomeComponet";
import ProductView from "../components/ProductView";
import ProductViewPage from "./ProductViewPage";
import Cart from "../components/CartOverView";
import BtnPM from "../components/BtnPM";
import { Box, Flex, Text } from "@chakra-ui/react";
import Login from "./Login";

let Home = () => {
    let [] = useState()
    let { getUser,getTheUser,user } = useContext<any>(productsContext);
    
    return (
        <>
            <Header />
            {user && user.id !== "" ?     <HomeComponent />:<HomeComponent />}
        </>)
}

export default Home