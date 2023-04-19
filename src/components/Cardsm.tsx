import { Card, Stack, CardBody, Heading, CardFooter, Button, Image, Text, Divider, Flex } from "@chakra-ui/react";
import { IProducts } from "../Interfaces/IProducts";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { useContext } from "react";
import productsContext from "../context/productsContext";


let CardSm = (props: IProducts) => {

    let {handleClickAdd, handleClickSub} = useContext(productsContext)

    return(<Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        boxShadow={themeStyles.boxShadow}
        m={2}
    >
        <Image
            // objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            // maxH={{base:"0.5",sm: "100px"}}
            src={props.img_url + ".jpeg"}
            alt='Caffe Latte'
        />
    
        <Stack>
            <CardBody>
                <Heading size='md'>{props.name}</Heading>
    
                <Text py='2'>
                    Price: {props.price + " + " + props.qty}
                    <Divider />
                    SubTotal: {props.grand_total}
    
                </Text>
            </CardBody>
    
            <CardFooter >
                <Flex alignItems='center' gap='2'>
    
                    <Button onClick={(e)=>handleClickSub(props.name,e)}  colorScheme={themeStyles.btnColor} outlineColor={themeStyles.btnColor} color={themeStyles.btnColor}>
                        <Text fontSize={"1.5em"}>-</Text>
                    </Button>
                    <Button onClick={(e)=> handleClickAdd(props.name,e)} outlineColor={themeStyles.btnColor} colorScheme={themeStyles.btnColor} color={themeStyles.btnColor}>
                        <Text fontSize={"1.5em"}>+</Text>
                    </Button>
    
                </Flex>
            </CardFooter>
        </Stack>
    </Card>)
    

    
}




export default CardSm