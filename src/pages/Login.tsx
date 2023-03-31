import Header from "../components/Header";
import { useState } from "react";
import supabase from "../Supabase/Supabase";
import { useNavigate } from "react-router-dom"


let Login = () => {
    let navigate = useNavigate();
    let [formData, setFormData] = useState<string | any>({ email: "", password: "" });

    let handleChange = (evt: any) => {
        
        let value = evt.target.value;
        setFormData({
            ...formData,
            [evt.target.id]: value
        })
        console.log(formData);
        



    }

    
    let SignIn = async () => {
        // formData.email
        // formData.password
        const { data, error } = await supabase.auth.signInWithPassword({
            email: "vuyisamr203@gmail.com",
            password:"123456"
      
        })
        console.log(formData);
        console.log(data);
        
        console.log(error);
        

    }
    
    
    let handleSubmit = async ()=> {
        await SignIn();

    }

    let getUserSession = async () =>{
        let {data,error} = await supabase.auth.getSession();
        console.log(error);
        console.log(data);
        
        
        
        // console.log(data.session?.user.id);
        

    }

    getUserSession();



    

    return (
        <>
            <Header />
            <div className="regLog">

                <div className="RegisterLoginCard">
                    <div className="RegLogBanner" style={{ width: "100%" }}>

                        <p>
                            Login
                        </p>

                    </div>
                    <span className="inputSpan">Email: <input required onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"email"} /> </span>
                    <span className="inputSpan">Password: <input required onChange={handleChange} className="sendToRight" placeholder="#$%#2390" id="password" type={"password"} /> </span>
                    <span>
                        <input onClick={() => handleSubmit()} className="sendToRight btn-primary" type={"submit"} />
                        <input onClick={() => navigate("/")} value={"Cancel"} className="sendToRight btn-primary" type={"button"} />
                    </span>

                </div>
            </div>
        </>
    )



};

export default Login;