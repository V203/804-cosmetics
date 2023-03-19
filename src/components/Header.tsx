import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import Cart from "./CartOverView";

let Header = () => {

    let { products, setProducts, order, setOrder, grand_total, cartOverViewBool, setCartOverViewBool } = useContext<any>(productsContext);
    let navigate = useNavigate();


    // setOrder(services.grand_total())
    let total = (param: number) => {
        return (<h1>Total R{param}</h1>)
    }


    return (
        <>
            <div className="header">
                <h1 className="header-font">
                    804 COSMETICS &copy;
                </h1>
                <div className="total">

                </div>
                {<p>Total  R {order}</p>} <img onClick={() => setCartOverViewBool(!cartOverViewBool)} style={{ float: "right" }} width={60} height={60} src={"/cart.svg"} />
                < input value={"Login"} type={"button"} onClick={() => navigate("/Login")} />
                <input value={"Register"} type={"button"} onClick={() => navigate("/Register")} />


            </div>

            {/* <NavBar /> */}


        </>

    )
}

export default Header