import { Card, Stack, CardBody, Heading, CardFooter, Button, Image, Text, Divider, Flex, CardHeader, HStack, VStack } from "@chakra-ui/react";
import { IProducts } from "../Interfaces/IProducts";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { useContext } from "react";
import productsContext from "../context/productsContext";


let CardSm = (props: IProducts) => {

    let { handleClickAdd, handleClickSub } = useContext(productsContext)

    return (<Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        boxShadow={themeStyles.boxShadow}
        

    // maxW={"80%"}
    >

        <VStack width={"100%"}>
            <CardHeader top={0} w={"100%"} color={themeStyles.color} bgColor={themeStyles.btnColor} >{props.name}</CardHeader>

                <Image
                marginTop={0}
                    // objectFit='cover'
                    // maxW={{ base: '100%', sm: '200px' }}
                    // maxH={{base:"100%",sm: "200px"}}
                    height={"50%"}
                    src={props.img_url + ".jpeg"}
                    alt='Caffe Latte'
                />

            <HStack pt={"0"} mt={0}>

                <CardBody >

                    <Text >
                        Price: R{props.price + " X " + props.qty}
                        <Divider />
                        SubTotal:R {props.grand_total}

                    </Text>
                </CardBody>

            </HStack>

            <CardFooter >
                <Flex alignItems='center' gap='2'>

                    <Button onClick={(e) => handleClickSub(props.name, e)} colorScheme={themeStyles.btnColor} outlineColor={themeStyles.btnColor} color={themeStyles.btnColor}>
                        <Text fontSize={"1.5em"}>-</Text>
                    </Button>
                    <Button onClick={(e) => handleClickAdd(props.name, e)} outlineColor={themeStyles.btnColor} colorScheme={themeStyles.btnColor} color={themeStyles.btnColor}>
                        <Text fontSize={"1.5em"}>+</Text>
                    </Button>

                </Flex>
            </CardFooter>
        </VStack>
    </Card>)



}




export default CardSm