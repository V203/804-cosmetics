import { IProductsObj } from "./Interfaces/IProducts"
export let productsObj:Array<IProductsObj | any> =  [
    {
        id: 171,
        name: 'Face Mask',
        price: 69.98,
        qty: 0,
        grand_total: function(){return this.price * this.qty},
        img_url: 'face-mask'
    },
    {
        id: 165,
        name: "Champagne Soap",
        price: 70,
        qty: 0,
        grand_total: function(){return this.price * this.qty},
        img_url: "champagne-soap"
    },
    {
        id: 174,
        name: "Rooibos & Rosemary",
        price: 39.98,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "rooibos-rosemary-soap"
    },
    {
        id: 229,
        name: "head,neck and shoulder massage",
        price: 350,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "head_neck_shoulder"
    },
    {
        id: 226,
        name: "lavender body wash",
        price: 50,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "tree-lavender-body-wash"
    },
    {
        id: 227,
        name: "menthol and mphepho rubbing salf",
        price: 100,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "heabal-mphepho-face-wash"
    },
    {
        id: 169,
        name: "Aloe and Rosemary lotion 300ml",
        price: 59.98,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "aloe-rosemary-lotion"
    },
    {
        id: 173,
        name: "Aloe Soap 175g",
        price: 59.98,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "aloe-soap"
    },
    {
        id: 225,
        name: "charcoal face wash 350ml",
        price: 40,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "charcoal-face-wash"
    },
    {
        id: 230,
        name: "804 wound cream",
        price: 150,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "804-wound-cream"
    },
    {
        id: 168,
        name: "Mint and honey soap",
        price: 69.98,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "honey-soap"
    },
    {
        id: 172,
        name: "Miracle Herb",
        price: 39.89,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "miracle-herb"
    },
    {
        id: 228,
        name: "foot massage",
        price: 500,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "foot-massager"
    },
    {
        id: 231,
        name: "charcoal clay",
        price: 70,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "charcoal-clay"
    },
    {
        id: 166,
        name: "Lavender Soap",
        price: 39.89,
        qty: 0,
        grand_total:function(){return this.price * this.qty} ,
        img_url: "lavender-soap"
    }
]