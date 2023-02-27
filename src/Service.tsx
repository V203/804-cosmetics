import supabase from "./Supabase/Supabase";



  export  let add = async (name:string)=>{
        let {data,error} = await supabase.rpc("add_product",{product_name:name});
        
        
        data ? data: console.log(error);
    }

  export  let sub = async (name:string)=>{
        let {data,error} = await supabase.rpc("sub_product",{product_name:name});
        console.log(data);
        
        data ? data: console.log(error);
    }

     let get_all_products = async ()=>{
        let {data,error} = await supabase.from("cosmetics").select()
        if(data){
            return data
        }else{
            console.log(error);            
        }

    }

    export let grand_total = async ()=> {
        
        let {data,error } = await supabase.rpc("grand_total");
        // console.log(data);
        
        // if(data){
        //     return data;
        // }
        
        return data ? data : 0.00
        
    };
        

    export default get_all_products
 





