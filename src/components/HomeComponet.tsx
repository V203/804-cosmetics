import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import ViewItem from "./ViewItem";
import CartImg from "../CartImg";
import CartOverView from "./CartOverView";
import { InfoIcon } from '@chakra-ui/icons'
import Button from "react-bootstrap/esm/Button"
import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { Col, Container, Row } from "react-bootstrap";
let HomeComponent = () => {
    let { services, add, order, sub, setOrder, cart, products, setProducts, grand_total, get_all_products, viewBool, setViewBool, handleClickView, handleClickAdd, handleClickSub } = useContext<any>(productsContext);


    return (
        <>


            {/* <ViewItem />
            <CartOverView />
            <Divider /> */}


                <Container>
                    <Row></Row>
            <Box justifyContent={"center"} alignItems={"center"} m={"3%"}>
                    <Row>

                        <Col md={2}></Col>
                        <Col md={8}>

                            <SimpleGrid zIndex={0} minChildWidth="180px" spacingX='10px' spacingY='10px' >

                                {services.getProducts() && services.getProducts().map((el: any) =>
                                    <Card key={el.id} boxShadow={themeStyles.boxShadow}>
                                        <CardHeader minH={49.45} p={2} bgColor={themeStyles.subsurfaceColor} color={themeStyles.baseColor} outlineColor={"black"} >
                                            {/* <Heading minH={"2%"} size='xs' textTransform='uppercase'>{el.name}</Heading> */}
                                            {el.name}
                                        </CardHeader>

                                        <CardBody p="0" m={0}>
                                            <Stack m='0'>

                                                <Image src={`${el.img_url}.jpeg`} alt='Green double couch with wooden legs' m={0} p={0} width="100%" maxH="6.5em" />
                                                <HStack>


                                                    <Text color='blue.600' fontSize='' m={1} >
                                                        R{el.price}
                                                    </Text>
                                                    <Text color={"black"}> X {el.qty}</Text>
                                                    <Text color={"green"}>
                                                        = R{el.grand_total()}
                                                    </Text>
                                                </HStack>
                                            </Stack>

                                        </CardBody>
                                        <Divider />
                                        <CardFooter m="0">

                                            <Button variant="primary" onClick={(e) => handleClickSub(el.name, e)} >
                                                -
                                            </Button>

                                            <Button variant="primary" onClick={(e) => handleClickAdd(el.name, e)} >
                                                +
                                            </Button>


                                        </CardFooter>

                                        {/* <div id="subHeaderDiv">
        <h5 style={{ textAlign: "center", fontSize: 12, color: "white", fontFamily: "laila", top: "0px" }}>{el.name.toUpperCase()}</h5>
    </div>
    <div>

        <img className="productImages" src={`${el.img_url}.jpeg`} />
    </div>
    <div>


    </div>
    <table >
        <tr style={{ borderStyle: "none" }}>
            <th>
                <td>
                    Price
                </td>
            </th>
            <th>
                <td>
                    QTY
                </td>
            </th>
            <th>
                <td>
                    Sub-total
                </td>
            </th>
        </tr>
        <tr>
            <td>
                {el.price}
            </td>
            <td>
                <div className="qtyOutline">

                    <div className="qtyBtnChecko width={"50%"} fontSize={"2xl"}ut" onClick={(e) => handleClickSub(el.name, e)}>-</div>
                    <span className="valueOutQty">
                        {el.qty}
                    </span>
                    <div className="qtyBtnCheckout" onClick={(e) => handleClickAdd(el.name, e)}>+</div>

                </div>
            </td>
            <td>
                {el.grand_total}

            </td>
        </tr>


    </table> */}
                                        {/* 
    <div className="grid-template">
        <span className="flex-row"><p>Price : R<strong style={{ color: "darkgreen" }}> {el.price}</strong> </p></span>
    </div>

    <div className="flex-row">


    </div>
    <input style={{ color: "white" }} className="btn-primary" width={"100%"} height={25} value={"View Item"} type={"button"} onClick={(e: any) => handleClickView(el.name, e)} /> */}

                                    </Card>)}
                            </SimpleGrid>
                        </Col>

                        <Col md={2}></Col>
                    </Row>


            </Box>
                </Container>

            {/* <div className="homeComponentContainer">

                <div className="homeComponentContent">
                    <h1>
                        Give us a shoutout
                    </h1>
                    <p>
                        804 Village 1
                    </p>
                    <p>
                        804cosmetics@gmail.com
                    </p>
                    <p>
                        0747501290
                    </p>
                </div> */}
            {/* <div className="homeComponentContent">
                    <label htmlFor="">Name</label> <input type={"text"} name={"firstName"} /> <br />
                    <label htmlFor="">Address</label><input type={"text"} /><br />
                    <label htmlFor="">Email</label><input type={"text"} /><br />
                    <label htmlFor="">Phone</label><input type={"text"} />
                    <label htmlFor="">Subject</label><input type={"text"} /><br />

                    <label htmlFor="">Message</label> <textarea ></textarea> <br />
                    <input type="submit" className="homeBTN" value="Submit"/>


                </div>
            </div> */}
        </>)

}

export default HomeComponent;