import '../../styles/App.css';
import {Col, Container, Row, Image, Form, Button, FormGroup, FormLabel, FormControl} from "react-bootstrap";
import placeholder from '../../assets/placeholder.png';
import * as authAPI from "../../services/authAPI";
import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {validateEmail, validatePassword} from "../validation/authValidation";
import { UserContext } from "./Store";

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn && userInfo) {
            console.log("Token acquired");
            navigate('/home'); // send to loofi platform if token returned
        }
    }, [isLoggedIn, userInfo]);

    useEffect(() => {
        console.log("email and or password set");
    }, [email, password])

    const onSubmit = async () => {
        try {
            const res = await authAPI.signIn(email, password)
            setUserInfo({email: email, token: res.data.token});
            setIsLoggedIn(true);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.log("Unable to Authenticate", error);
                alert("Unable to find account. Try again.");
            } else {
                console.log("Something went wrong. Try again.")
            }
        }
    }

    const handleEmail = (field) => {
        if (validateEmail(field.target.value)) {
            console.log("valid email given")
            setEmail(field.target.value);
        }
        else {
            setEmail('')
            console.log("invalid email");
        }
    }

    const handlePassword = (field) => {
        if (validatePassword(field.target.value)) {
            console.log("valid password given")
            setPassword(field.target.value);
        }
        else {
            setPassword('')
            console.log("invalid password");
        }
    }

    return(
        <Container fluid style={{height:100+"vh"}}>
            <Row style={{ height: "100%" }}>
                <Col style={{ padding: 0, height: "100%" }}>
                    <Image fluid
                           style={{ width: "100%", height: "100%", objectFit: "cover" }} src={placeholder} alt="placeholder" />
                </Col>
                {/* pattern and logo on left*/}
                <Col fluid="true" style={{ margin: "auto", textAlign:"left", paddingInlineStart:20 + "em", paddingInlineEnd:20 + "em"}}  id="sign-in" lg={7} >
                    <h1>Sign In</h1>
                    <p>New to Loofi? <a href="/sign-up">Create an account</a></p>
                    <Form mx-md-2="true" style={{marginRight:10 + "rem"}}>
                        <FormGroup style={{marginTop:2.5 + "rem"}} controlId="email">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Email Address *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem", marginBottom:3 + "rem"}} type="email"  placeholder="john.appleseed@email.com" onChange={e => handleEmail(e)}/>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Password *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="password" onChange={e => handlePassword(e)} />
                            <a style={{display:"block",  marginTop:.5 + "rem", marginBottom:3 + "rem", width: 20 + "rem"}} href="">Forgot Password?</a>
                        </FormGroup>
                        <Button style={{paddingInlineStart:1 + "rem", paddingInlineEnd:1 + "rem", paddingBlockStart: .75+ "rem", paddingBlockEnd: .75+ "rem", width: 20 + "rem" }} type="button" onClick={onSubmit}>Sign In</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignIn;