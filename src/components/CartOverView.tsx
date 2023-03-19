import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import productsContext from "../context/productsContext";
import supabase from "../Supabase/Supabase";


let CartOverView = () => {
    let { cart, handleClickAdd, handleClickSub, cartOverViewBool, setCartOverViewBool } = useContext<any>(productsContext);
    let navigate = useNavigate();


    // cart.map((el:any)=>  console.log(el));

    return (

        <>
            <div className="cartOverview" style={{ display: cartOverViewBool ? "flex" : "none" }}>
                <div className="xcloseBtn" onClick={() => setCartOverViewBool(!cartOverViewBool)} >
                    X
                </div>
                <h2>Order Summary</h2>

                <input className="btn-primary" style={{color:"white"}} onClick={()=> navigate("/Checkout")} type="button" value="proceed to checkout" />


                <div className="cartOverViewScroll">
                    {/* {cart.length !== 0 ? cart.map((el: any) => {
                        return <div className="flex-row">
                            <div>

                                <img width={85} height={100} src={`${el.img_url}.jpeg`} />
                            </div>

                            <div className="flex-col">
                                <span >
                                    {el.name}
                                </span>

                                <span key={el.name}>{`Price :R${el.price}`}</span>
                                <span className="flex-row">
                                    {`QTY :`}+<input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} />
                                    <hr />
                                </span>

                                <span>
                                    {`Sub-total : R${el.grand_total}`}
                                    <hr />
                                </span>


                            </div>
                            <hr />
                        </div>
                    }) : "Loading"} */}
                    {cart.map((el: any) => {
                        return <div className="flex-row">
                            <div>

                                <img width={85} height={100} src={`${el.img_url}.jpeg`} />
                            </div>

                            <div className="flex-col">
                                <span key={el.name} >
                                    {el.name}
                                </span>

                                <span key={el.price}>{`Price :R${el.price}`}</span>
                                <span className="flex-row">
                                    {`QTY :`}+<input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} />
                                    <hr />
                                </span>

                                <span>
                                    {`Sub-total : R${el.grand_total}`}
                                    <hr />
                                </span>


                            </div>
                            <hr />
                        </div>
                    })}
                </div>






            </div>
        </>

    )






















};

export default CartOverView;