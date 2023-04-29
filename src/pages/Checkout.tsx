import Header from "../components/Header";
import CheckoutComp from "../components/CheckoutComp";
import { Container } from "@chakra-ui/react";

let Checkout = () => {



    return (

        <>

        <Header />
        <div style={{height:80}}></div>
        <Container>
        <CheckoutComp />

        </Container>
        </>)
}


export default Checkout;