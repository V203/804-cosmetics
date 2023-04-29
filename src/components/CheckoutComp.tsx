import { Flex, Box,  Divider, Input, Text, TableContainer, Table, Tr, Td, Th, Thead, Tbody, Tfoot, Card, CardHeader, CardBody, CardFooter, CloseButton, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { IProducts } from "../Interfaces/IProducts";

import { FaCashRegister } from "react-icons/fa"
import CardSm from "./Cardsm";
import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md"
import ViewItem from "./ViewItem";
import { ViewIcon } from "@chakra-ui/icons"
import  Button  from "react-bootstrap/Button";

let CheckoutComp = () => {
    let { cart, handleClickAdd, handleClickSub, order, viewBool, setViewBool, products, services } = useContext<any>(productsContext);

    let [selectedItem, setSelectedItem] = useState<IProducts | any>({ id: 0, img_url: "", grand_total: 0, qty: 0, name: "", price: 0 })

    let viewItemHandle = (product:string) => {
        
        console.log(product);
        
        setSelectedItem(services.getSelectedProduct(product));


        
        setViewBool(!viewBool)
        // return <CardSm id={product.id} img_url={product.img_url} qty={product.qty} name={product.name} price={product.price} grand_total={product.grand_total} key={product.id} />
    }



    let sum: number = 0;
    cart && cart.map((a: any) => {
        sum += a.qty
        return sum
    })

    // console.log(cart);



    {/* <input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} /> */ }
    return (
        <Flex>

<Button variant="primary" size="lg">hello button</Button> {' '}
            {/* <Box className="overlay" style={{ display: viewBool ? "grid" : "none" }} >
                <Card boxShadow={themeStyles.boxShadow} maxWidth={380}>
                    <Flex flexDir={"column"} maxW={"100%"}>

                    <CardHeader bgColor={themeStyles.btnColor} color={themeStyles.color}>
                        <Text>
                            {selectedItem.name}
                        </Text>
                    <CloseButton onClick={()=>setViewBool(!viewBool)}/>
                    </CardHeader>
                    </Flex>
                    <CardBody>
                        <img src={selectedItem.img_url+".jpeg"} />

                    </CardBody>                
                </Card>

            </Box> */}

            <Box  justifyContent={"center"} alignItems={"center"}>
                <TableContainer>
                    <Table variant='simple' colorScheme={"pink"} minW={"70em"} >
                        <Thead>
                            <Tr>
                                <Th>
                                    <Text>
                                        Product
                                    </Text>
                                </Th>
                                <Th>
                                    <Text>
                                        View product
                                    </Text>

                                </Th>
                                <Th>
                                    <Text>
                                        Actions
                                    </Text>

                                </Th>
                                <Th>
                                    <Text>
                                        Price
                                    </Text>
                                </Th>
                                <Th>
                                    <Text>
                                        QTY
                                    </Text>
                                </Th>
                                <Th>
                                    <Text>
                                        Sub Total
                                    </Text>
                                </Th>
                            </Tr>

                        </Thead>
                        <Tbody>
                            {cart && cart.map((el: IProducts | any) => (<Tr> <Td>{el.name}</Td> <Td><Button onClick={e => viewItemHandle(el.name)} ><ViewIcon m={1} /> View Product</Button></Td><Td><Button > <Icon as={MdSettings} />Edit</Button></Td> <Td>R {el.price}</Td> <Td>{el.qty}</Td> <Td>R{el.grand_total()}</Td> </Tr>))


                            }


                        </Tbody>
                        <Tfoot bgColor={"pink"} >
                            <Tr >
                                <Td colSpan={3} >

                                </Td>
                                <Td>
                                    <b>Grand Total *</b>
                                </Td>
                                <Td> <b>Total items: {sum}</b></Td>
                                <Td color={"green"}>
                                    <Button  color="green" >

                                        <b style={{ color: "black" }}><b>Place Order: </b>R</b>  <strong><b>{order}</b></strong>

                                    </Button>
                                </Td>

                            </Tr>

                        </Tfoot>
                    </Table>
                </TableContainer>
                {/* <table >
                    <tr style={{ backgroundColor: "#00987a", color: "whiteSmoke" }}>
                        <th>Product</th> <th>Price</th><th>QTY</th> <th>Sub Total</th>
                    </tr>

                    {cart?.map((el: any) => <tr key={el.name}>
                        <td style={{ display: "flex", flexFlow: "column-reverse" }}>
                            <img style={{ margin: "auto" }} width={50} height={50} src={`${el.img_url}.jpeg`} alt="" /> {el.img_url}
                        </td>
                        <td>
                            R{el.price.toFixed(2)}
                        </td>
                        <td>
                            <Box className="qtyOutline">
                                <Box className="qtyBtnCheckout" onClick={(e) => handleClickSub(el.name, e)}>-</Box>
                                <Box className="valueOutQty">
                                    {el.qty}
                                </Box>
                                <Box className="qtyBtnCheckout" onClick={(e) => handleClickAdd(el.name, e)}>+</Box>

                            </Box>
                        </td>
                        <td>
                            {el.grand_total.toFixed(2)}
                        </td>
                    </tr>
                    )
                    }





                </table> */}

            </Box>


        </Flex>)
}

export default CheckoutComp;