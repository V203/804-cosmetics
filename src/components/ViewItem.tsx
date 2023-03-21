import { useContext, useState } from "react";
import productsContext from "../context/productsContext";

let ViewItem = (props: any) => {
    

    let { viewBool, setViewBool, singleItem,handleClickAdd,handleClickSub } = useContext<boolean | any>(productsContext);
    return (

        <>
            <div className="overlay" style={{ display: viewBool ? "grid" : "none" }}>


                <div className="xcloseBtn" onClick={() => setViewBool(false)}>
                    <h3>
                        X
                    </h3>
                </div>
                <div className="cartDiv">
                    
                    {singleItem.length !== 0 ? singleItem.map((el: any) => {


                        return <>
                            <div className="gridItem">
                                <h4>{el.name}</h4>

                                <img width={200} height={100} src={`${el.img_url}.jpeg`} />

                                <br />
                                <p>{"Price: R " + el.price}<hr /></p>
                                
                                <div className="flex-row">
                                In cart :<input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} />
                                </div>
                                <br />

                            </div>
                        </>





                    }) : "Loading..."}





                </div>


            </div>

        </>)
}

export default ViewItem;