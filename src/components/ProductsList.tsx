import { useContext } from "react"
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap"
import productsContext from "../context/productsContext"
import { themeStyles } from "../themeStyles/ThemeStyles"


let ProductsList = (props:any)=> {
    let {handleClickAdd} =useContext(productsContext)

    return (
        <Container >
            <Row>
                
                {props.products.map((el: any) =>  <Col  xxs={12} xs={12} sm={4} md={3} lg={3} key={el.id}> <Card style={{boxShadow:themeStyles.boxShadow}} >


                                <Card.Title style={{backgroundColor:themeStyles.subsurfaceColor,color:"antiquewhite",height:"3em"}} autoCapitalize="true">
                                    <h4>{el.name}</h4>
                                </Card.Title>
                                <Card.Img  src={`${el.img_url}.jpeg`} style={{maxWidth:"fitContent",height:"10em",margin:"0em",padding:"0em"}} />


                            
                                <Card.Body>
                                    
                                    <Card.Text>
                                        Price : R{el.price}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer >
                                <p color={"black"}  > Qty : <Button onClick={(e) => handleClickAdd(el.name, e)} ><Badge color="green" >{el.qty}</Badge> Add to cart</Button></p>
                                            <hr style={{ color: "black", boxShadow: themeStyles.boxShadow }} />
                                            <p color={"green"}>
                                                Sub-Total :  R<b>{el.grand_total().toFixed(2)}</b>
                                            </p>
                                            <hr style={{ color: "black", boxShadow: themeStyles.boxShadow }} />

                                </Card.Footer>


                            </Card>
                                
                    </Col>
                                )}
                
                
            </Row>
        </Container>


    )
}


export default ProductsList