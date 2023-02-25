import React, { useContext } from "react";
import productsContext from "../context/productsContext"

let HomeComponent = () => {

    let { products, setProducts, order, setOrder } = useContext<any>(productsContext);
    let handleClick = (param: number, e: MouseEventHandler<HTMLInputElement>) => {
        // e.preventDefault();
        setOrder((prev:number)=> prev  += param)
        console.log(order);

    }

    return (
        <>

            <div className="homeComponentContainer" >

                {products.map((el: any, index: number) => <div className="itemCard" key={el.name}>{el.name} <img className="productImages" src="./" /> R{el.price} <br /> <input onClick={() => handleClick(el.price)} type="button" value="Order" /></div>)}
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