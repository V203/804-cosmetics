import { useContext } from "react";
import productsContext from "../context/productsContext";

let CheckoutComp = () => {
    let { cart } = useContext<any>(productsContext);
    console.log(cart);
    

    return (

        <>
            <div>
                {cart.length !== 0 ? cart.map((el: any) =>  <div key={el.id} ><span> <h1>{el.name}</h1> </span> <span>{el.price}</span> <span>{el.qty}</span> <span>{el.grand_total}</span></div>):"Calculating..."}

            </div>

        </>)
}

export default CheckoutComp;