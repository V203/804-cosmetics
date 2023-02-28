import { Link } from "react-router-dom";
import Home from "../pages/Home"
import AboutComponent from "./AboutComponent";
import OnlineStoreComponent from "./OnlineStoreComponent";
import ShopComponent from "./ShopComponent";

let NavBar = () => {

    return (
        <>
            <div className="navBar">
                <div className="navBarItem">
                    <Link to={"/"}  >
                    {/* element={<Home />} */}
                        <p>
                            HOME
                        </p>
                    </Link>
                </div>

                <div className="navBarItem">
                    <Link to={"/about"} >
                    {/* element={<AboutComponent />} */}

                        <p>
                            ABOUT US
                        </p>

                    </Link>

                </div>
                <div className="navBarItem">
                    <Link to={"/shop"}>
                    {/* element={<ShopComponent/>} */}
                        <p>
                            SHOP
                        </p>

                    </Link>
                </div>
                <div className="navBarItem">
                    <Link to={"/onlineStore"} >
                    {/* element={<OnlineStoreComponent />} */}
                    
                    <p>
                        ONLINE STORE
                    </p>
                    </Link>
                </div>

            </div>

        </>
    )
}


export default NavBar