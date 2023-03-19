import Header from "../components/Header";
import { useState } from "react";


let Register = () => {

    let [formData, setFormData] = useState<any>({
        firstName:"",
        surname:"",
        mobile:"",
        email:"",
        street:"",
        city:"",
        zipCode:"",
        province:""
    })

    let handleSubmit = () => {


    }
    let handleChange = (evt:any) => {
        console.log(evt.target.value);
        let value = evt.target.value;
        setFormData({...formData,
        [evt.target.id]:value
        })
        


    }

    console.log(formData);
    

    return (
        <>

            <Header />
            <div className="regLog">
                <div className="RegisterLoginCard" >
                    <div className="RegLogBanner" style={{ width: "100%" }}>

                        <p>Identification</p>
                    </div>
                    <span  className="inputSpan">Your Name:<i className="fa fa-user icon"></i> <input  onChange={handleChange} className="sendToRight" placeholder="John" id="firstName" type={"text"} /> </span>
                    <span  className="inputSpan">Your Surname: <input  onChange={handleChange} className="sendToRight" placeholder="Doe" id="surname" type={"text"} /> </span>
                    <span  className="inputSpan">Mobile: <input  onChange={handleChange} className="sendToRight" placeholder="067 123 4067" id="mobile" type={"text"} /> </span>
                    <span  className="inputSpan">Your email: <input  onChange={handleChange} className="sendToRight" placeholder="JohnDoe@gmail.com" id="email" type={"text"} /> </span>
                    
                </div>

                <div className="RegisterLoginCard" >
                    <div className="RegLogBanner" style={{ width: "100%" }}>

                        <p>Address</p>
                    </div>
                    <span  className="inputSpan">Street addreess <input  onChange={handleChange} className="sendToRight" placeholder="804 cosmetics street" id="street" type={"text"} /> </span>
                    <span  className="inputSpan">Province: <input  onChange={handleChange} className="sendToRight" placeholder="Western Cape" id="province" type={"text"} /> </span>
                    <span  className="inputSpan">City<input  onChange={handleChange} className="sendToRight" placeholder="Khayelitsha" id="city" type={"text"} /> </span>
                    <span  className="inputSpan">Zip code: <input  onChange={handleChange} className="sendToRight" placeholder="7433" id="zipCode" type={"text"} /> </span>
                    <span     > <input  onClick={() => handleSubmit()} className="sendToRight btn-primary" type={"submit"} /> </span>
                </div>
                

            </div>

        </>)


};

export default Register;