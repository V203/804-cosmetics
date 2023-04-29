import Header from "../components/Header";
import AboutComponent from "../components/AboutComponent";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";
import { Container } from "react-bootstrap";

let About = () => {

    // let Abouti = () => {
    //   return ( <>

    //     </>)
    // }

    return (
        <>
            {/* <Header /> */}
            {/* <AboutComponent /> */}
<Container>

            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button  as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
            
</Container>
        </>
    )
}

export default About;