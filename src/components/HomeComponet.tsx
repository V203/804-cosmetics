import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import ViewItem from "./ViewItem";
import CartImg from "../CartImg";
import CartOverView from "./CartOverView";
let HomeComponent = () => {
    let { add, order, sub, setOrder,cart, products, setProducts, grand_total, get_all_products, viewBool, setViewBool,handleClickView, handleClickAdd, handleClickSub } = useContext<any>(productsContext);


    return (
        <>


            
                <ViewItem />
                <CartOverView />
            <div className="homeComponentContainer" >

                {products.map((el: any) =>
                    <div className="itemCard" key={el.id}>
                        <div id="subHeaderDiv" style={{ paddingTop: 0 }}>
                            <h5 style={{ textAlign: "center", fontSize: 12, color: "white", fontFamily: "laila", top: "0px" }}>{el.name.toUpperCase()}</h5>
                        </div>
                        <img className="productImages" src={`/${el.img_url}.jpeg`} />

                        Price: R{el.price} <br />
                        <div className="flex-row">
                            In cart :<input className="btn" width={25} height={25} value={"-"} type={"button"} onClick={(e: any) => handleClickSub(el.name, e)} />  {el.qty} <input className="btn" width={25} height={25} value={"+"} onClick={(e: any) => handleClickAdd(el.name, e)} type={"button"} />
                        </div>
                        <input style={{color:"white"}} className="btn-primary" width={"100%"} height={35} value={"View Cart"} type={"button"} onClick={(e: any) => handleClickView(el.name, e)} />
                    </div>)}
            </div>
            

            {/* <div className="homeComponentContainer">

                <div className="homeComponentContent">
                    <h1>
                        Give us a shoutout
                    </h1>
                    <p>
                        804 Village 1
                    </p>
                    <p>
                        804cosmetics@gmail.com
                    </p>
                    <p>
                        0747501290
                    </p>
                </div> */}
            {/* <div className="homeComponentContent">
                    <label htmlFor="">Name</label> <input type={"text"} name={"firstName"} /> <br />
                    <label htmlFor="">Address</label><input type={"text"} /><br />
                    <label htmlFor="">Email</label><input type={"text"} /><br />
                    <label htmlFor="">Phone</label><input type={"text"} />
                    <label htmlFor="">Subject</label><input type={"text"} /><br />

                    <label htmlFor="">Message</label> <textarea ></textarea> <br />
                    <input type="submit" className="homeBTN" value="Submit"/>


                </div>
            </div> */}
        </>)

}

export default HomeComponent;