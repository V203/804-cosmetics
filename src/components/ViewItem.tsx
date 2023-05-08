import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { IProducts } from "../Interfaces/IProducts";
import CardSm from "./Cardsm";

let ViewItem = (props:any) => {
    

    let { viewBool, setViewBool, singleItem,handleClickAdd,handleClickSub,products } = useContext< any>(productsContext);
    // console.log(products.find((el:IProducts)=> el.name === el.name));

    
    
    return (

        <>
            <div className="overlay" style={{ display: viewBool ? "grid" : "none" }}>
            


                <div className="xcloseBtn" onClick={() => setViewBool(false)}>
                    <h3>
                        X
                    </h3>
                </div>
                <div className="cartDiv">
                    
                    {products.length !== 0 ? products.map((el: IProducts) => {

                      return   <CardSm id={el.id} img_url={el.img_url} qty={el.qty} name={el.name} price={el.price}  grand_total={el.grand_total} key={el.id}/>
                    }) : "Loading..."}



                </div>


            </div>

        </>)
}

export default ViewItem;