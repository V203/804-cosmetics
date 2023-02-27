import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import supabase from "../Supabase/Supabase";;
import Service from "../Service";

let HomeComponent = () => {
    let {add,order,sub,setOrder,products,setProducts,grand_total,get_all_products} = useContext<any>(productsContext);
    

    // let { products, setProducts, order, setOrder } = useContext<any>(productsContext);

    let handleClickAdd = async (param: string, e:  React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        // e.preventDefault();
        // setOrder((prev:number)=> prev  += param)
        // console.log(order);
        await add(param);
         setOrder( await grand_total());
         setProducts( await get_all_products());

        // get_all_products().map((el:any)=> console.log(el))
    }

    let handleClickSub = async (param: string, e:  React.MouseEvent<HTMLInputElement, MouseEvent>) => {

        await sub(param);
         setOrder( await grand_total());
         setProducts( await get_all_products());
    }


    


    // let insertToDatabase = async (name:string,price:number)=>{
    //     let {data,error} = await supabase.from("cosmetics").insert({name:name,price:price});
    // }

    return (
        <>

            <div className="homeComponentContainer" >
            
                {products.map((el: any, index: number) => <div className="itemCard" key={el.name}>{el.name} <img className="productImages" src="./" /> R{el.price} <br /> <input value="Subtract" onClick={(e)=> handleClickSub(el.name,e)} type="button" /> <input onClick={ (e)=> handleClickAdd(el.name,e)} type="button" value="Order" /></div>)}
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