import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import supabase from "../Supabase/Supabase";
// import { Flex, HStack, Text, Box, Button, Heading, Spacer, useDisclosure, position, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, DrawerCloseButton, DrawerFooter } from "@chakra-ui/react";
import CartOverView from "./CartOverView";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { FaAd } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { BiCartAdd, BsCartPlusFill } from "react-icons/all"
import { Button, Col, Container, Row } from "react-bootstrap";
import { IProducts } from "../Interfaces/IProducts";
import CardSm from "./Cardsm";
// import OverlayDrawer from "./OverlayDrawer";
import Stack from 'react-bootstrap/Stack';


let Header = () => {


  let { products, setProducts, order, services,setOrder, grand_total, getTheUser, cartOverViewBool, setCartOverViewBool, user, setUser } = useContext<any>(productsContext);

  let navigate = useNavigate();
  let signOut = async () => {
    await supabase.auth.signOut();
    setUser({ ...user, id: "", email: "", first_name: "", city: "", zipCode: "", street: "", province: "", surname: "" })
    navigate("/Login");
  }




  let { cart } = useContext<any>(productsContext);

  let sum: number = 0;

  cart && cart.map((a: any) => {
    sum += a.qty
    return sum
  })

  let total = (param: number) => {
    return (<h1>Total R{param}</h1>)
  }

  console.log(cartOverViewBool);

  let handleClick = () => navigate("/Checkout")

  return (
    <>


      <Container fluid style={{ position: "fixed", zIndex: 300, minWidth: "100%" }}>


        <Row style={{ backgroundColor: themeStyles.subsurfaceColor, color: "antiquewhite" }}>


          <Col sm={10}>
            <img onClick={() => navigate("/")} src="/logoTemp.svg" width={"300px"} height={"50px"} />
          </Col>



          <Col sm={2} >
            <Stack style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
              
                <Button onClick={() => navigate("/Login")}>

                  <CgLogIn color="antiquewhite" size={"1em"}  /> Sign In
                </Button>

              
                <Button>

                  <GoSignOut color="antiquewhite" size={"1em"} onClick={signOut} />
                  Sign out
                </Button>

              



            </Stack>
          </Col>



        </Row>

        <Row>
          <Col sm={12} fluid>
            <div onClick={()=> navigate("/checkout")} style={{backgroundColor:themeStyles.baseColor ,minWidth:"7em",minHeight:"3em",float:"right",boxShadow:themeStyles.boxShadow, color:themeStyles.color,justifyContent:"center",alignItems:"center",display:"flex" }}>

              <p style={{fontWeight:"bold"}}>Total:{services.getGrandTotal()} </p> 

            </div>


          </Col>
        </Row>


<Row>
  <Col md={12}>
    <div style={{minHeight:"20px"}}>

    </div>
  </Col>
</Row>
      



      </Container>
      <div style={{minHeight:"20px" ,backgroundColor:"black"}}>

    </div>


    </>

  )
}

export default Header
