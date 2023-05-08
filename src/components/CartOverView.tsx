
import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import productsContext from "../context/productsContext";
import supabase from "../Supabase/Supabase";
import { IProducts } from '../Interfaces/IProducts';
import CardSm from './Cardsm';
import { themeStyles } from '../themeStyles/ThemeStyles';
import {BsCartPlusFill} from "react-icons/bs"







let CartOverView = () => {
    // let { cart, handleClickAdd, handleClickSub, cartOverViewBool, setCartOverViewBool, products } = useContext<any>(productsContext);
    // let navigate = useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const [placement, setPlacement] = useState<string>('right')




// let  handleClick = (props:any) => navigate("/Checkout")
    // cart.map((el:any)=>  console.log(el));

    return (
        <>
        {}
            {/* <Button colorScheme='green' onClick={onOpen}  gap={2} alignContent={"center"} justifyContent={"center"}> */}
                {/* <BsCartPlusFill  onClick={onOpen} /> */}
                
            {/* </Button> */}

            {/* <Drawer  placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader color={themeStyles.color} bgColor={themeStyles.baseColor} justifyContent={"space-between"}  borderBottomWidth='1px'>
                         <Flex justify={"space-evenly"}><Text>Cart Summary</Text> <Button onClick={handleClick} variant={'ghost'} color={themeStyles.color} bgColor={"green"} >  To Checkout</Button>
                         </Flex> 
                         </DrawerHeader>
                    <DrawerBody>

                        {cart && cart.map((el: IProducts | any) => <CardSm  name={el.name} price={el.price} qty={el.qty} grand_total={el.grand_total()} id={el.id} img_url={el.img_url}/>

                        
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer> */}
        </>



        // <>
        //     <div className="cartOverview" style={{ display: cartOverViewBool ? "flex" : "none" }}>
        //         <div className="xcloseBtn" onClick={() => setCartOverViewBool(!cartOverViewBool)} >
        //             X
        //         </div>
        //         <h2>Order Summary</h2>

        //         <input className="btn-primary" style={{color:"white"}} onClick={()=> navigate("/Checkout")} type="button" value="proceed to checkout" />


        //         <div className="cartOverViewScroll">

        //             {cart.map((el: any) => {
        //                 return <div className="flex-row" key={el.id}>
        //                     <div>

        //                         <img width={85} height={100} src={`${el.img_url}.jpeg`} />
        //                     </div>

        //                     <div className="flex-col">
        //                         <span key={el.name} >
        //                             {el.name}
        //                         </span>

        //                         <span key={el.price}>{`Price :R${el.price}`}</span>
        //                         <span className="flex-row">
        //                             {`QTY :`}+<input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} />
        //                             <hr />
        //                         </span>

        //                         <span>
        //                             {`Sub-total : R${el.grand_total}`}
        //                             <hr />
        //                         </span>


        //                     </div>
        //                     <hr />
        //                 </div>
        //             })}
        //         </div>






        //     </div>
        // </>

    )






















};

export default CartOverView;