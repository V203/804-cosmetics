import { themeStyles } from "../themeStyles/ThemeStyles";
import Header from "../components/Header";
import { useContext, useState } from "react";
import supabase from "../Supabase/Supabase";
import { useNavigate } from "react-router-dom"
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import productsContext from "../context/productsContext";


let Login = () => {
    let navigate = useNavigate();
    let { user, setUser } = useContext(productsContext);
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


        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password

        })


        navigate("/")
    }


    let handleSubmit = async () => {
        await SignIn();
        user && user.id !== "" ? setUser(user) : console.log(user);
        console.log(user);

        window.location.reload();

    }

    let getUserSession = async () => {
        let { data, error } = await supabase.auth.getSession();
        // console.log(data);
    }

    getUserSession();





    return (
        <>
            <Header />
            <div className="regLog">

                <div className="RegisterLoginCard">
                    <div className="RegLogBanner" style={{ maxWidth: "100%" }}>

                        <p>
                            Login
                        </p>

                    </div>
                    <span className="inputSpan">Email: <input required onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"email"} /> </span>
                    <span className="inputSpan">Password: <input required onChange={handleChange} className="sendToRight" placeholder="#$%#2390" id="password" type={"password"} /> </span>
                    <span>
                        <Flex align={"center"} justifyContent="space-around" justify={"center"}>

                            <Button onClick={() => handleSubmit()} bgColor={themeStyles.btnColor} color={themeStyles.color}>

                                <Text>Submit</Text>
                            </Button>
                            {/* <Spacer /> */}

                            <Button onClick={() => navigate("/")} bgColor={themeStyles.btnColor} color={themeStyles.color}>

                                <Text>Cancel</Text>
                            </Button>


                        </Flex>
                    </span>

                </div>
            </div>
        </>
    )



};

export default Login;