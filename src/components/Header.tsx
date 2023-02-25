import React, { useContext } from "react";
import productsContext from "../context/productsContext";
import NavBar from "./NavBar"


let Header = () => {
    let { products, setProducts, order, setOrder } = useContext<any>(productsContext);
    return (
        <>
            <div className="header">
                <h1 className="header-font">
                    804 Cosmetics
                </h1>&copy;
            </div>
                <div className="total">
                    <h4>
                        Total R{order.toFixed(2)}

                    </h4>

                </div>

            <NavBar />
        </>

    )
}

export default Header