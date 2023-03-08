import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import supabase from "../Supabase/Supabase";


let Cart = () => {
    let { cart } = useContext<any>(productsContext);












    return (
        <>
            <div className="overlay" style={{display:"none"}}>


                <div className="cartDiv">

                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Sub Total</th>

                            </tr>
                        </thead>

                        <tbody>

                        {/* {cart.length !== 0 ? cart.map((el: any) => { return <tr><td>{el.name}</td><td>{el.price}</td><td>{el.qty}</td><td>{el.grand_total}</td></tr>}) : "Loading"} */}

                        </tbody>
                    </table>





                </div>


            </div>
        </>

    )






















};

export default Cart;