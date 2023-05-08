import React, { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomeComponent from "../components/HomeComponet";
import ProductView from "../components/ProductView";
import ProductViewPage from "./ProductViewPage";
import Cart from "../components/CartOverView";
import BtnPM from "../components/BtnPM";
import { Button, Modal } from "react-bootstrap";
import Login from "./Login";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Register from "./Register";


let Home = () => {


    let { getUser, getTheUser, user } = useContext<any>(productsContext);

console.log(user);




    return (
        <>

            <Header />
            {user && user.id !== "" ?     <Login />:<HomeComponent />} 
            <div style={{ minHeight: "5em" }}>

            </div>
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <HomeComponent /> */}
        </>)
}

export default Home