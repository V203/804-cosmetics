import { useContext } from "react";
import PlusBtn from "./PlusBtn";
import productsContext from "../context/productsContext";
import supabase from "../Supabase/Supabase";




let ProductView = (props:any) => {
    let { add, order, sub, setOrder, products, handleClickAdd, handleClickSub, setProducts, grand_total, get_all_products } = useContext<any>(productsContext);
    if (products.length !== 0) {
        console.log(products[0].name);

    }

    return (
        <div className="productView" style={{ display: "none" }}>
            <div className="productViewItem">
                <img width={100} height={100} src={"/plus-sign.svg"} />
            </div>
            <div className="productViewItem-flex">
                <h3>
                    {products.length !== 0 ? products[0].name : "Loading..."}
                </h3>
                <p>
                    Price : {products.length !== 0 ? "R" + products[0].price : "Loading..."}
                </p>
                <p>
                    QTY : <input onClick={(e) => handleClickSub(products[0].name, e)} style={{ borderRadius: "50%" }} type="submit" value="-" />  <input value={products.length !== 0 ? products[0].qty : "Loading..."} type="text" style={{ width: "fitContent" }} />  <input onClick={(e) => handleClickAdd(products[0].name, e)} style={{ borderRadius: "50%" }} type="submit" value="+" />
                </p>
                <input value={"Add to cart"} type="submit" />
            </div>








        </div>


    )


}


export default ProductView