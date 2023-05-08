import { themeStyles } from "../themeStyles/ThemeStyles";
import Header from "../components/Header";
import { useContext, useState } from "react";
import supabase from "../Supabase/Supabase";
import { useNavigate } from "react-router-dom"

import productsContext from "../context/productsContext";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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


                <Row>
                    <Col md={12}>
                        <Header />
                    </Col>
                </Row>

            <Container style={{marginTop:"5em"}}>
                <Row>

                    <Col md={4} >

                    </Col>

                    <Col md={4} style={{boxShadow:themeStyles.boxShadow,padding:"1em"}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                        
                           
                            <Button onClick={()=>handleSubmit} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>


                    <Col md={4}>

                    </Col>

                </Row>
            </Container>
        </>
    )



};

export default Login;


{/* <FormControl isRequired justifyContent="space-around" gap={2}>
                                    <FormLabel>Email: </FormLabel>
                                    <Input placeholder='JohnD@gmail.com' id="email" onChange={handleChange} />
                                    <FormLabel>Password: </FormLabel>
                                    <Input placeholder='00921#@$' id="password" onChange={handleChange} type={"password"} />

                                    <Button m={4}


                                        type='submit' onClick={() => handleSubmit()} bgColor={themeStyles.subsurfaceColor} color={themeStyles.color}>
                                        <p>Submit</p>
                                    </Button>

                                    <Button onClick={() => navigate("/")} bgColor={themeStyles.subsurfaceColor} color={themeStyles.color}>
                                        <p>Cancel</p>
                                    </Button>

                                </FormControl> */}




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