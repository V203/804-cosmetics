import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import ViewItem from "./ViewItem";
import CartImg from "../CartImg";
import CartOverView from "./CartOverView";

// import Button from "react-bootstrap/esm/Button"

import ProductsList from "./ProductsList";

import { themeStyles } from "../themeStyles/ThemeStyles";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
let HomeComponent = (props: any) => {
    let { services, add, order, sub, setOrder, cart, products, setProducts, grand_total, get_all_products, viewBool, setViewBool, handleClickView, handleClickAdd, handleClickSub } = useContext<any>(productsContext);


    return (<>
    <div style={{minHeight:"4em"}}>

    </div>
        <ProductsList products={services.getProducts()} />
    </>
    )

}



export default HomeComponent;