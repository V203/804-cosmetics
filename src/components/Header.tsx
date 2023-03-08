import React, { useContext, useEffect } from "react";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar";
import Cart from "./Cart";

let Header = () => {

    let { products, setProducts, order, setOrder, grand_total } = useContext<any>(productsContext);


    // setOrder(services.grand_total())
    let total = (param: number) => {
        return (<h1>Total R{param}</h1>)
    }


    return (
        <>
            <div className="header">
                <h1 className="header-font">
                    804 Cosmetics
                </h1>&copy;
                <div className="total">
                {<p>Total  R {order}</p>}
            </div>
                
            </div>
            
                {/* <NavBar /> */}
                

        </>

    )
}

export default Header