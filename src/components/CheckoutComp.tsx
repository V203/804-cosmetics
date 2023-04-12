import { Flex, Box, Button, Divider, Input, Text, TableContainer, Table, Tr, Td, Th, Thead, Tbody, Tfoot } from "@chakra-ui/react";
import { useContext } from "react";
import productsContext from "../context/productsContext";
import { IProducts } from "../Interfaces/IProducts";
import { themeStyles } from "../themeStyles/ThemeStyles";


let CheckoutComp = () => {
    let { cart, handleClickAdd, handleClickSub, order } = useContext<any>(productsContext);

    let sum: number = 0;
    cart && cart.map((a: any) => {


        sum += a.qty


        return sum


    })

    {/* <input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} /> */ }
    return (

        <Flex>
            <Box className="slipOverview">
                <Box className="RegLogBanner">

                    Your Order Pricing

                </Box>


                <Box className="slipGrid">

                    <Text className="slipGridItem" style={{ color: "black", display: "flex", flexFlow: "row" }}>
                        Items in cart:
                    </Text>
                    <Text className="slipGridItem" style={{ color: "black", fontStyle: "oblique", fontWeight: "bold" }}>
                        <span style={{ color: "black" }}></span> {sum}</Text>



                    <Text className="slipGridItem" style={{ color: "black", display: "flex", flexFlow: "row" }}>Total:
                    </Text>
                    <Text className="slipGridItem" style={{ color: "green", fontStyle: "oblique", fontWeight: "bold" }}> <span style={{ color: "black" }}>R</span> {order}</Text>
                </Box>
                <Divider />


                <Button className="btn-primary" style={{ color: "white" }} width={"20px"} type="submit" colorScheme={themeStyles.btnColor} >Pay </Button>



            </Box>
            <Box className="center" style={{ width: "100em" }}>
                <TableContainer>
                    <Table variant='striped' colorScheme={"pink"}>
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
                            {cart && cart.map((el: IProducts) => (<Tr> <Td>{el.name}</Td> <Td><Button colorScheme={"blue"}>View Product</Button></Td><Td><Button colorScheme={"pink"}>Edit</Button></Td>  <Td>{el.price}</Td> <Td>{el.qty}</Td> <Td>{el.grand_total}</Td> </Tr>))


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
                                    <b style={{ color: "black" }}>R</b>  <strong><b>{order}</b> </strong>
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