export interface IProducts {
    id:number,name: string,
    price: number,qty: number ,
    grand_total: number,
    img_url:string

}

export interface IUserInfo {
    id:string, first_name:string ,
    surname:string, email:string,
    city:string, province:string,
    zipCode:string,street:string

}


export interface IProductsObj {
    id:number,name: string,
    price: number,qty: number ,
    grand_total: number,
    img_url:string

}