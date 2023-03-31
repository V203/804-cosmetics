import { useContext } from "react";
import productsContext from "../context/productsContext";

let CheckoutComp = () => {
    let { cart,handleClickAdd, handleClickSub } = useContext<any>(productsContext);
    console.log(cart);

{/* <input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} /> */}
    return (

        <>

            <div className="center">

                <table >
                    <tr style={{ backgroundColor: "#00987a", color: "whiteSmoke" }}>
                        <th>Product</th> <th>Price</th>    <th>QTY</th>
                    </tr>

                    {cart?.map((el: any) => <tr>
                        <td style={{ display: "flex", flexFlow: "column-reverse" }}>
                            <img style={{ margin: "auto" }} width={70} height={70} src={`${el.img_url}.jpeg`} alt="" /> {el.img_url}
                        </td>
                        <td>
                            R{el.price.toFixed(2)}
                        </td>

                        <td>
                            <div className="qtyOutline">
                                <div className="qtyBtnCheckout"  onClick={(e)=> handleClickSub(el.name,e)}>-</div>
                               <div className="valueOutQty">
                               {el.qty}
                                </div> 
                                <div className="qtyBtnCheckout"  onClick={(e)=> handleClickAdd(el.name,e)}>+</div>

                            </div>
                        </td>
                    </tr>


                    )
                    }





                </table>

                .
            </div>

        </>)
}

export default CheckoutComp;