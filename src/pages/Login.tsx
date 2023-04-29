import { themeStyles } from "../themeStyles/ThemeStyles";
import Header from "../components/Header";
import { useContext, useState } from "react";
import supabase from "../Supabase/Supabase";
import { useNavigate } from "react-router-dom"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spacer, Text } from "@chakra-ui/react";
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
            <Flex justifyContent={"center"} alignItems={"center"} mt={20}>



                <Box maxHeight={"fit-content"}>
                    <Heading bgColor={themeStyles.subsurfaceColor} textAlign="center" color={"white"} style={{ maxWidth: "100%" }}>

                        <Text>
                            Login
                        </Text>

                    </Heading>

                    <FormControl isRequired justifyContent="space-around" gap={2}>
                        <FormLabel>Email: </FormLabel>
                        <Input placeholder='JohnD@gmail.com' id="email" onChange={handleChange} />
                        <FormLabel>Password: </FormLabel>
                        <Input placeholder='00921#@$' id="password" onChange={handleChange} type={"password"}/>

                        <Button  m={4}
                            
                            
                            type='submit' onClick={() => handleSubmit()} bgColor={themeStyles.subsurfaceColor} color={themeStyles.color}>
                            <Text>Submit</Text>
                        </Button>
                       
                        <Button onClick={() => navigate("/")} bgColor={themeStyles.subsurfaceColor} color={themeStyles.color}>
                            <Text>Cancel</Text>
                        </Button>

                    </FormControl>


                </Box>

            </Flex>
        </>
    )



};

export default Login;


                    // <span className="inputSpan">Email: <Input required onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"email"} /> </span>
                    // <span className="inputSpan">Password: <Input required onChange={handleChange} className="sendToRight" placeholder="#$%#2390" id="password" type={"password"} /> </span>
                    // <span>
                    //     <Flex align={"center"} justifyContent="space-around" justify={"center"}>

                    //         <Button onClick={() => handleSubmit()} bgColor={themeStyles.btnColor} color={themeStyles.color}>

                    //             <Text>Submit</Text>
                    //         </Button>
                    //         <Spacer />




                    //     </Flex>
                    // </span>