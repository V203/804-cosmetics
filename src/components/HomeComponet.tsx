import React, { MouseEventHandler, useContext } from "react";
import productsContext from "../context/productsContext"
import supabase from "../Supabase/Supabase";;

import { ReactSVG } from "react-svg";

let HomeComponent = () => {
    let {add,order,sub,setOrder,products,setProducts,grand_total,get_all_products,handleClickAdd, handleClickSub} = useContext<any>(productsContext);
    

    // let { products, setProducts, order, setOrder } = useContext<any>(productsContext);

    


    


    // let insertToDatabase = async (name:string,price:number)=>{
    //     let {data,error} = await supabase.from("cosmetics").insert({name:name,price:price});
    // }

    return (
        <>
                

            <div className="homeComponentContainer" >
            
            
                {products.map((el: any) =>
                 <div className="itemCard" key={el.id}>
                     <p style={{textAlign:"center",fontSize:17}}>{el.name.toUpperCase()}</p>
                      <img  className="productImages" src={`/${el.img_url}.jpeg`} /> 

                      
                      
                      
                     Price:  R{el.price} <br /> <div className="flex-row">
                     In cart : <img width={60} height={60} src={"/sub.svg"}  onClick={(e)=> handleClickSub(el.name,e)} /> {el.qty} <img width={60} height={60}  src={"/add.svg"}onClick={ (e)=> handleClickAdd(el.name,e)}  />
                        </div> 
                        
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