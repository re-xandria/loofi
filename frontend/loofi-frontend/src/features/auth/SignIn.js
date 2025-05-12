import '../../styles/App.css';
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import pattern from '../../assets/Loofi Pattern.svg';
import logo from '../../assets/Loofi Dark Purple & Cyan.svg';
import * as authAPI from "../../services/authAPI";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {validateEmail, validatePassword} from "../validation/authValidation";
import {UserContext} from "./Store";
import * as settingsAPI from "../../services/settingsAPI";

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn && userInfo) {
            console.log(userInfo.email);
            console.log("Token acquired");
            navigate('/home'); // send to loofi platform if token returned
        }
    }, [isLoggedIn, userInfo]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const emailValue = document.getElementById("email").value;
            const passwordValue = document.getElementById("password").value;

            if (emailValue) setEmail(emailValue);
            if (passwordValue) setPassword(passwordValue);
        }, 100); // 100ms delay

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("email and or password set");
    }, [email, password])

    const onSubmit = async () => {
        try {
            const res = await authAPI.signIn(email, password);
            // console.log(res)
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("email", email);
            await settingsAPI.isAdmin(email) ? localStorage.setItem("role", "admin") : localStorage.setItem("role", "user")
            setIsLoggedIn(true);
            setUserInfo({email: email, token: res.data.token, role: localStorage.getItem("role")});
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
        } else {
            setEmail('')
            console.log("invalid email");
        }
    }

    const handlePassword = (field) => {
        if (validatePassword(field.target.value)) {
            console.log("valid password given")
            setPassword(field.target.value);
        } else {
            setPassword('')
            console.log("invalid password");
        }
    }

    return (
        <Container fluid className="vh-100">
            <Row className="h-100">

                <Col md={5} className="p-0 d-none d-md-block position-relative">
                    <Image
                        src={pattern}
                        alt="pattern"
                        fluid
                        className="w-100 h-100 position-absolute"
                        style={{ objectFit: "cover", zIndex: 1 }}
                    />
                    <Image
                        src={logo}
                        alt="Loofi logo"
                        fluid
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{ width: "40%", zIndex: 2 }}
                    />
                </Col>

                {/* Form Section */}
                <Col xs={12} md={7} className="d-flex align-items-center justify-content-center px-4 px-md-5">
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <h1>Sign In</h1>
                        <p>
                            New to Loofi? <a href="/sign-up">Create an account</a>
                        </p>
                        <Form>
                            <FormGroup className="mt-4" controlId="email">
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl
                                    type="email"
                                    placeholder="john.appleseed@email.com"
                                    onChange={e => handleEmail(e)}
                                    className="py-3 px-4 mb-4"
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormLabel>Password *</FormLabel>
                                <FormControl
                                    type="password"
                                    onChange={e => handlePassword(e)}
                                    className="py-3 px-4"
                                />
                                <a className="d-block mt-2 mb-4" href="">
                                    Forgot Password?
                                </a>
                            </FormGroup>
                            <Button type="button" onClick={onSubmit} className="w-100 py-3">
                                Sign In
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;