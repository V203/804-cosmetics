
import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { IProducts } from "../Interfaces/IProducts";



import CardSm from "./Cardsm";


import ViewItem from "./ViewItem";

import Button from "react-bootstrap/Button";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { MdSettings } from "react-icons/md";

let CheckoutComp = () => {
    let { cart, handleClickAdd, handleClickSub, order, viewBool, setViewBool, products, services } = useContext<any>(productsContext);

    let [selectedItem, setSelectedItem] = useState<IProducts | any>({ id: 0, img_url: "", grand_total: 0, qty: 0, name: "", price: 0 })

    let viewItemHandle = (product: string) => {

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






    return (
        <Container fluid>
            <Row>
                <Col>

                    <Table striped bordered hover variant="dark">
                        <thead>

                            <tr>
                                <th>Product</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Actions</th>
                                <th>Sub-Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map((el: IProducts | any) => <tr>
                                <td style={{ textAlign: "left" }}>
                                    {el.name}
                                </td>
                                <td>
                                    <Badge style={{backgroundColor:"green"}}>

                                        {el.qty}
                                    </Badge>
                                </td>
                                <td>
                                    R{el.price}
                                </td>
                                <td style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <Button onClick={(e:any)=> handleClickSub(el.name,e)}>
                                        -
                                    </Button>

                                    <Button onClick={(e:any)=> handleClickAdd(el.name,e)}>
                                        +
                                        
                                    </Button>
                                </td>
                                <td>
                                    R{el.grand_total().toFixed(2)}
                                </td>

                            </tr>
                            


                            )}


                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>

                                </td>
                                <td colSpan={2}>
                                    <Button  size="sm"  onClick={()=> null}  style={{float:"right",backgroundColor:"pink",fontSize:"18px"}}>
                                        Place order : <strong style={{color:"green",fontWeight:"bolder",fontSize:"24px"}}>R{services.getGrandTotal()}</strong>
                                    </Button>
                                </td>
                            </tr>
                        </tfoot>


                    </Table>


                </Col>
            </Row>


        </Container>)
}

export default CheckoutComp;