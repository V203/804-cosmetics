import Header from "../components/Header";
import { useContext, useState } from "react";
import productsContext from "../context/productsContext";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase/Supabase";



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
        
        let signUp =  async() => {

            const { data, error } = await supabase.auth.signUp(
                {
                    email:formData.email,
                    password:formData.password,
                    phone: formData.mobile,                            
                    options: {
                        data: {
                            first_name: formData.firstName,
                            surname: formData.surname,
                            street: formData.street,
                            city: formData.city,
                            zipCode:formData.zipCode,
                            province:formData.province,
                            
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

                        <span className="inputSpan">Your Name:<i className="fa fa-user icon"></i> <input required onChange={handleChange} className="sendToRight" placeholder="John" id="firstName" type={"text"} /> </span>
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
                            <input onClick={() => handleSubmit()} className="sendToRight btn-primary" type={"submit"} />
                            <input onClick={() => navigate("/")} value={"Cancel"} className="sendToRight btn-primary" type={"button"} />
                        </span>
                    </div>

                </div>
            </form>

        </>)


};

export default Register;