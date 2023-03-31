import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import Cart from "./CartOverView";
import supabase from "../Supabase/Supabase";

let Header = () => {

    let { products, setProducts, order, setOrder, grand_total, getTheUser, cartOverViewBool, setCartOverViewBool, name } = useContext<any>(productsContext);
    let navigate = useNavigate();



    // setOrder(services.grand_total())
    let total = (param: number) => {
        return (<h1>Total R{param}</h1>)
    }


    return (
        <>
            <div className="header">
                <h1 className="header-font" onClick={() => navigate("/")} >
                    804 COSMETICS &copy;
                </h1>
                <div className="total">

                </div>
                {<p>Total  R {order}</p>} <img onClick={() => setCartOverViewBool(!cartOverViewBool)} style={{ float: "right" }} width={60} height={60} src={"cart.svg"} />
                <input value={"Login"} type={"button"} onClick={() => navigate("/Login")} />
                <input value={"Register"} type={"button"} onClick={() => navigate("/Register")} />
                <input value={"Sign out"} type={"button"} onClick={async () => await supabase.auth.signOut() && navigate("/")} />

                <><span> {"Welcome " + name}</span></>
            </div>

            {/* <NavBar /> */}


        </>

    )
}

export default Header