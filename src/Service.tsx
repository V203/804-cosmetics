import { IProductsObj } from "./Interfaces/IProducts";
import { productsObj } from "./product";

let Services = () => {

  let add = (paramName: string) => {

    productsObj.find((el: IProductsObj) => el.name === paramName && el.qty++);

  };

  let sub = (paramName: string) => {

    productsObj.find((el: IProductsObj) => el.name === paramName && el.qty !== 0 && el.qty--)

  };

  let getProducts = (): Array<IProductsObj> => {

    return productsObj;

  };

  let getSelectedProduct = (paramName: string) => productsObj.find((el: IProductsObj) => el.name = paramName);

  let getCart = () => {

    let cart = productsObj.filter((el: IProductsObj) => el.qty > 0);
    return cart;
  }

  let getGrandTotal = ()=> {
    
   let data:number = productsObj.filter((el: IProductsObj) => el.qty > 0).reduce((a: any , b:IProductsObj | any)=>  a + b.grand_total(),0 );
    return data.toFixed(2);
    
  }

  return {
    add, sub, getProducts,
    getSelectedProduct, getCart,
    getGrandTotal
  }

}



export default Services;