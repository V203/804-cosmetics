import Header from "../components/Header";
import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase/Supabase";
import { Button, Flex,Text } from "@chakra-ui/react";



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

            <Header />
            <form >
                <div className="regLog">


                    <div className="RegisterLoginCard" >
                        <div className="RegLogBanner" style={{ width: "100%" }}>

                            <p>
                                Identification
                            </p>

                        </div>

                        <span className="inputSpan">Your Name:<i className="fa fa-user icon"></i> <input required onChange={handleChange} className="sendToRight" placeholder="John" id="name" type={"text"} /> </span>
                        <span className="inputSpan">Your Surname: <input required onChange={handleChange} className="sendToRight" placeholder="Doe" id="surname" type={"text"} /> </span>
                        <span className="inputSpan">Mobile: <input required onChange={handleChange} className="sendToRight" placeholder="067 123 4067" id="phone" type={"text"} /> </span>
                        <span className="inputSpan">Your email: <input required onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"text"} /> </span>
                        <span className="inputSpan">Your Password: <input required onChange={handleChange} className="sendToRight" placeholder="#$%#2390" id="password" type={"password"} /> </span>


                    </div>

                    <div className="RegisterLoginCard" >
                        <div className="RegLogBanner" style={{ width: "100%" }}>

                            <p>Address</p>
                        </div>
                        <span className="inputSpan">Street addreess <input required onChange={handleChange} className="sendToRight" placeholder="804 cosmetics street" id="street" type={"text"} /> </span>
                        <span className="inputSpan">Province: <input required onChange={handleChange} className="sendToRight" placeholder="Western Cape" id="province" type={"text"} /> </span>
                        <span className="inputSpan">City<input required onChange={handleChange} className="sendToRight" placeholder="Khayelitsha" id="city" type={"text"} /> </span>
                        <span className="inputSpan">Zip code: <input required onChange={handleChange} className="sendToRight" placeholder="7433" id="zipCode" type={"text"} /> </span>

                        <span>
                            <Flex mt={4} flexWrap={"wrap"} justifyContent="space-around">
                                <Button bgColor={"#009879"} color={"white"}   onClick={() => handleSubmit()} >
                                    <Text>
                                        Submit
                                    </Text>
                                </Button>

                                <Button bgColor={"#009879"} color={"white"} onClick={() => navigate("/")}  >
                                <Text>
                                        Cancel
                                    </Text>
                                </Button>

                            </Flex>
                            {/* <input className="sendToRight btn-primary" type={"submit"} /> */}
                            {/* <inputvalue={"Cancel"} className="sendToRight btn-primary" type={"button"} /> */}
                        </span>
                    </div>

                </div>
            </form>

        </>)


};

export default Register;