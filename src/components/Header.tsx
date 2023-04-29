import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import supabase from "../Supabase/Supabase";
import { Flex, HStack, Text, Box, Button, Heading, Spacer, useDisclosure, position } from "@chakra-ui/react";
import CartOverView from "./CartOverView";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { FaAd } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { BiCartAdd, BsCartPlusFill } from "react-icons/all"
import { Col, Container, Row } from "react-bootstrap";

let Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState<string>('right')

    let { products, setProducts, order, setOrder, grand_total, getTheUser, cartOverViewBool, setCartOverViewBool, user, setUser } = useContext<any>(productsContext);
    // console.log(products);

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

    // setOrder(services.grand_total());
    let total = (param: number) => {
        return (<h1>Total R{param}</h1>)
    }


    return (
        <>
            <Container fluid style={{position:"fixed",zIndex:300,minWidth:"100%"}}>
                <Row className="show-grid" style={{backgroundColor:themeStyles.subsurfaceColor,color:"antiquewhite"}}>
                    <Col md={4}>

                                <div  style={{fontFamily:"cursive",fontStyle:"bold",fontSize:32}}   onClick={() => navigate("/")} >804 COSMETICS</div>

                    </Col>
                    <Col md={5}></Col>
                    <Col md={3}>
                        <div >
                            


                            
                            {/* <Spacer /> */}

                            <div >


                                <Button size={"sm"} outlineColor={"white"} bgColor={themeStyles.subsurfaceColor}>
                                    <BiCartAdd />
                                    <CartOverView />
                                </Button>

                                <Button outlineColor={"white"} bgColor={themeStyles.color}>
                                    <CgLogIn onClick={() => navigate("/Login")} />

                                </Button>

                                <Button outlineColor={"white"} bgColor={themeStyles.color}>
                                    <GoSignOut onClick={signOut} />
                                </Button>
                            </div>
                        </div>
                    </Col>
                    
                    

                </Row>

            </Container>






            {/* <img onClick={()=>isOpen} style={{ float: "right" }} width={60} height={60} src={"cart.svg"} /> */}

            {/* <Flex gap={2} alignItems="center" >


                </Flex> */}

            {/* {user !== undefined ? <Text>{"Welcome " + user.name}</Text>  :<Text>{"Sign in!"}</Text>  } */}




            {/* {user && user.id !== "" ? <Text>{"Welcome " + user.first_name}</Text> : <Text>Sign in</Text>} */}






            {/* <NavBar /> */}


        </>

    )
}

export default Header


// {<Text>Total  R {order}</Text>} 
                    // <Button value={"Register"} type={"button"} onClick={() => navigate("/Register")} outlineColor={themeStyles.color} colorScheme={themeStyles.color}>
                    //     Register
                    // </Button>