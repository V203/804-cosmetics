import React, { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HomeComponent from "../components/HomeComponet";
import ProductView from "../components/ProductView";
import ProductViewPage from "./ProductViewPage";
import Cart from "../components/CartOverView";
import BtnPM from "../components/BtnPM";

import Login from "./Login";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

let Home = () => {
    let [] = useState()
    let { getUser,getTheUser,user } = useContext<any>(productsContext);
    
    return (
        <>
            <Header />
        {/* <div style={{height:"2.5em"}}>

        </div> */}
        <Row>
            <Col md={12}>
                " "
            </Col>
        </Row>
            {user && user.id !== "" ?     <HomeComponent />:<HomeComponent />}
            
        </>)
}

export default Home