import Header from "../components/Header";
import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase/Supabase";
import { Button, Col, Container } from "react-bootstrap";
import { Row, Form } from "react-bootstrap";
import { themeStyles } from "../themeStyles/ThemeStyles";



let Register = () => {
    let navigate = useNavigate();

    let { } = useContext<any>(productsContext)
    let [formData, setFormData] = useState<any>({
        firstName: "",
        surname: "",
        mobile: "",
        email: "",
        street: "",
        city: "",
        zipCode: "",
        province: "",
        password: ""
    })



    let handleSubmit = () => {

        let signUp = async () => {

            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    phone: formData.mobile,
                    options: {
                        data: {
                            first_name: formData.firstName,
                            surname: formData.surname,
                            street: formData.street,
                            city: formData.city,
                            zipCode: formData.zipCode,
                            province: formData.province,

                        }
                    }
                }
            )


            console.log(error);
        }


        signUp()


    }

    let handleChange = (evt: any) => {

        console.log(evt.target.value);
        let value = evt.target.value;

        setFormData({
            ...formData,
            [evt.target.id]: value
        })



    }




    return (
        <>
            <Row>
                <Col md="4">
                </Col>
                <Col md="4">
                    <Form style={{ padding: "1em", boxShadow: themeStyles.boxShadow }}>
                        <Form.Group controlId="name"  >
                            <Form.Label>
                                Your name:
                            </Form.Label>
                        </Form.Group>
                        <Form.Control onChange={handleChange} placeholder="Noluthando" type="text" />

                        <Form.Group controlId="surname">
                            <Form.Label>
                                Surname:
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="Smith" type="text" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>
                                Phone:
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="062 123 4564" type="text" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>
                                Email:
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="noli@email.com" type="email" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="$%#1234" type="password" />
                        </Form.Group>


                        <Form.Group controlId="street">
                            <Form.Label>
                                Street Address
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="804 cosmetics street" type="text" />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>
                                City
                            </Form.Label>
                            <Form.Control onChange={handleChange} placeholder="Khayelitsha" type="text" />
                        </Form.Group>
                        <Form.Group style={{marginTop:"0.5em"}}>
                            <Button onClick={() => handleSubmit} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md="4">

                </Col>
            </Row>


        </>)


};


// <div className="regLog">


//     <div className="RegisterLoginCard" >
//         <div className="RegLogBanner" style={{ width: "100%" }}>

//             <p>
//                 Identification
//             </p>

//         </div>

//         <span className="inputSpan">Your Name:<i className="fa fa-user icon"></i> <input required onChange={handleChange} className="sendToRight" placeholder="John" id="name" type={"text"} /> </span>
//         <span className="inputSpan">Your Surname: <input required onChange={handleChange} className="sendToRight" placeholder="Doe" id="surname" type={"text"} /> </span>
//         <span className="inputSpan">Mobile: <input required onChange={handleChange} className="sendToRight" placeholder="067 123 4067" id="phone" type={"text"} /> </span>
//         <span className="inputSpan">Your email: <input required onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"text"} /> </span>
//         <span className="inputSpan">Your Password: <input required onChange={handleChange} className="sendToRight" placeholder="#$%#2390" id="password" type={"password"} /> </span>


//     </div>

//     <div className="RegisterLoginCard" >
//         <div className="RegLogBanner" style={{ width: "100%" }}>

//             <p>Address</p>
//         </div>
//         <span className="inputSpan">Street addreess <input required onChange={handleChange} className="sendToRight" placeholder="804 cosmetics street" id="street" type={"text"} /> </span>
//         <span className="inputSpan">Province: <input required onChange={handleChange} className="sendToRight" placeholder="Western Cape" id="province" type={"text"} /> </span>
//         <span className="inputSpan">City<input required onChange={handleChange} className="sendToRight" placeholder="Khayelitsha" id="city" type={"text"} /> </span>
//         <span className="inputSpan">Zip code: <input required onChange={handleChange} className="sendToRight" placeholder="7433" id="zipCode" type={"text"} /> </span>

//         <span>
//             <Container >
//                 <Button onClick={() => handleSubmit()} >
//                     <p>
//                         Submit
//                     </p>
//                 </Button>

//                 <Button onClick={() => navigate("/")}  >
//                     <p>
//                         Cancel
//                     </p>
//                 </Button>

//             </Container>
//             {/* <input className="sendToRight btn-primary" type={"submit"} /> */}
//             {/* <inputvalue={"Cancel"} className="sendToRight btn-primary" type={"button"} /> */}
//         </span>
//     </div>

// </div>
export default Register;