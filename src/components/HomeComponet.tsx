import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import ViewItem from "./ViewItem";
import CartImg from "../CartImg";
import CartOverView from "./CartOverView";
import { InfoIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Container, Divider, Heading, HStack, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { themeStyles } from "../themeStyles/ThemeStyles";
let HomeComponent = () => {
    let { services,add, order, sub, setOrder, cart, products, setProducts, grand_total, get_all_products, viewBool, setViewBool, handleClickView, handleClickAdd, handleClickSub } = useContext<any>(productsContext);


    return (
        <>



            <ViewItem />
            {/* <CartOverView /> */}
            <Divider />
            <div style={{ height: 13 }}></div>
            <Box>



                <SimpleGrid zIndex={0} minChildWidth="270px" spacing="10" p="5" spacingX='30px' spacingY='20px' >

                    {services.getProducts()  && services.getProducts().map((el: any) =>
                        <Card key={el.id} boxShadow={themeStyles.boxShadow}  >
                            <CardHeader minH={49.45} p={2} bgColor={themeStyles.btnColor} color={themeStyles.color} >
                                <Heading maxH={73} size='xs' textTransform='uppercase'>{el.name}</Heading>
                            </CardHeader>
                                        <Divider color={themeStyles.btnColor} />
                            <CardBody p="0" m={0}>
                                <Stack m='0'>

                                    <Image src={`${el.img_url}.jpeg`} alt='Green double couch with wooden legs' m={0} p={0} width="100%" maxH="180" />
                                    <HStack>


                                    <Text color='blue.600' fontSize='xl' m={1} >
                                        R{el.price}  
                                    </Text>
                                    <Text color={"black"}> X {el.qty}</Text>
                                    <Text color={"green"}>
                                        = R{el.grand_total()}
                                    </Text>
                                    </HStack>
                                </Stack>

                            </CardBody>
                            <Divider color={themeStyles.btnColor} />
                            <CardFooter m="0">
                                <ButtonGroup w={"100%"} spacing='2'>
                                    <Button fontWeight={"extrabold"} width={"50%"} fontSize={"2xl"} onClick={(e) => handleClickSub(el.name, e)} color={themeStyles.color} bgColor={themeStyles.btnColor}>
                                        -
                                    </Button>
                                    
                                    <Button fontWeight={"extrabold"} width={"50%"} fontSize={"2xl"} onClick={(e) => handleClickAdd(el.name, e)} color={themeStyles.color} bgColor={themeStyles.btnColor}>
                                        +
                                    </Button>
                                </ButtonGroup>
                                
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
            </Box>

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