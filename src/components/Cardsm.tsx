
import { IProducts } from "../Interfaces/IProducts";
import { themeStyles } from "../themeStyles/ThemeStyles";
import { useContext } from "react";
import productsContext from "../context/productsContext";


let CardSm = (props: IProducts | any) => {

    let { handleClickAdd, handleClickSub } = useContext(productsContext)

    return (
        <></>
    )
}




// (<Card objectFit='cover'
//          boxShadow={themeStyles.boxShadow}>
//           <CardHeader minH={49.45} p={2} bgColor={themeStyles.subsurfaceColor} color={themeStyles.baseColor} outlineColor={"black"} isTruncated >
//               <Text minH={".5em"} fontWeight={"extrabold"} size='xs' textTransform='uppercase'>{props.name}</Text>
//               {/* {el.name} */}
//           </CardHeader>

//           <Image src={`${props.img_url}.jpeg`} alt='Green double couch with wooden legs' m={0} p={0} minW="4em" h="10.5em" />
//           <CardBody m={0}>



//               <Box m={".5em"} textAlign={"start"} lineHeight={1}>

//                   <Text color='blue.600' as={"h3"}>
//                       Price : R{props.price}
//                   </Text>
//                   <Text color={"black"} as={"h3"} > Qty : <Button onClick={(e) => handleClickAdd(props.name, e)} ><Badge color="green" >{props.qty}</Badge> Add to cart</Button></Text>
//                   <hr style={{ color: "black", boxShadow: themeStyles.boxShadow }} />
//                   <Text color={"green"}>
//                       Sub-Total :  R<b>{props.grand_total}</b>
//                   </Text>
//                   <hr style={{ color: "black", boxShadow: themeStyles.boxShadow }} />
//               </Box>



//              <Box mb={2}>


//                  <Button variant="primary" onClick={(e) => handleClickSub(props.name, e)} >
//                  -
//              </Button>

//              <Button variant="primary" onClick={(e) => handleClickAdd(props.name, e)} >
//                  +
//              </Button>
                
                
       





//              </Box>



//          </CardBody>





//     </Card>)


// <Card
//     direction={{ base: 'column', sm: 'row' }}
//     overflow='hidden'
//     variant='outline'
//     boxShadow={themeStyles.boxShadow}


// maxW={"80%"}
// >

//     <VStack >
//         <CardHeader w={"100%"} color={themeStyles.color} bgColor={themeStyles.subsurfaceColor} >{props.name}</CardHeader>

//         {/* <Image
//         marginTop={0}
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '200px' }}
//             maxH={{base:"100%",sm: "200px"}}
//             height={"50%"}
//             src={props.img_url + ".jpeg"}
//             alt='Caffe Latte'
//         /> */}

//         <HStack pt={"0"} mt={0}>

//             <CardBody >

//                 <Text >
//                     Price: R{props.price + " X " + props.qty}
//                     <Divider />
//                     SubTotal:R {props.grand_total}

//                 </Text>
//             </CardBody>

//         </HStack>

//         <CardFooter >
//             <Flex alignItems='center' gap='2'>

//                 <Button onClick={(e) => handleClickSub(props.name, e)} colorScheme={themeStyles.baseColor} outlineColor={themeStyles.baseColor} color={themeStyles.baseColor}>
//                     <Text fontSize={"1.5em"}>-</Text>
//                 </Button>
//                 <Button onClick={(e) => handleClickAdd(props.name, e)} outlineColor={themeStyles.baseColor} colorScheme={themeStyles.baseColor} color={themeStyles.baseColor}>
//                     <Text fontSize={"1.5em"}>+</Text>
//                 </Button>

//             </Flex>
//         </CardFooter>
//     </VStack>
// </Card>
// )



// }




export default CardSm