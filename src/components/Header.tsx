import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import supabase from "../Supabase/Supabase";
import { Flex, HStack, Text, Box, Button, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import CartOverView from "./CartOverView";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { FaAd } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { GoSignOut } from "react-icons/go"

let Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState<string>('right')

    let { products, setProducts, order, setOrder, grand_total, getTheUser, cartOverViewBool, setCartOverViewBool, user, setUser } = useContext<any>(productsContext);
console.log(products);

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

    // setOrder(services.grand_total())
    let total = (param: number) => {
        return (<h1>Total R{param}</h1>)
    }


    return (
        <>
            <Flex alignItems="center" gap='2' p={2} zIndex={300} className="header">


                <Box>
                    <Heading as={"h2"} onClick={() => navigate("/")} > 804 COSMETICS&copy; </Heading>

                </Box>

             

                <Spacer />

                {/* <img onClick={()=>isOpen} style={{ float: "right" }} width={60} height={60} src={"cart.svg"} /> */}

                <Flex gap={2} alignItems="center" >
                    <CartOverView />

                    <Button alignContent={"center"} justifyContent={"center"} gap="2" type={"button"} onClick={() => navigate("/Login")}  colorScheme={"pink"} >
                        <CgLogIn  /> Sign in</Button>

                    <Button colorScheme={"pink"} onClick={signOut}> <GoSignOut size={"xs"} />
                        Sign out
                    </Button>

                </Flex>

                {/* {user !== undefined ? <Text>{"Welcome " + user.name}</Text>  :<Text>{"Sign in!"}</Text>  } */}




                {/* {user && user.id !== "" ? <Text>{"Welcome " + user.first_name}</Text> : <Text>Sign in</Text>} */}





            </Flex>

            {/* <NavBar /> */}


        </>

    )
}

export default Header


// {<Text>Total  R {order}</Text>} 
                    // <Button value={"Register"} type={"button"} onClick={() => navigate("/Register")} outlineColor={themeStyles.color} colorScheme={themeStyles.btnColor}>
                    //     Register
                    // </Button>