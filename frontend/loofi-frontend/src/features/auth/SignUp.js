import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import * as authAPI from "../../services/authAPI";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {validateEmail, validateName, validatePassword} from "../validation/authValidation";
import {UserContext} from "./Store";
import logo from "../../assets/Loofi Dark Purple & Cyan.svg";
import pattern from "../../assets/Loofi Pattern.svg";

function SignUp() {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [isAcctCreated, setIsAcctCreated] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        if (isAcctCreated && userInfo) {
            console.log("Token acquired");
            navigate('/home'); // send to loofi platform if token returned
        }
    }, [isAcctCreated, userInfo]);

    useEffect(() => {
        console.log("valid fields updated");
    }, [displayName, email, password, passwordConfirmation])

    const onSubmit = async () => {
        if (validateName(displayName) && validateEmail(email) && validatePassword(password) && validatePassword(passwordConfirmation) && password === passwordConfirmation) {
            try {
                const res = await authAPI.signUp(displayName, email, password)
                setUserInfo({email: email, token: res.data.token});
                setIsAcctCreated(true);
                alert("Account successfully created!");
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    console.log("Unable to create user", error);
                    alert("Unable to create account. Try again.")
                } else {
                    console.log("Something went wrong. Try again.")
                }
            }
        } else {
            console.log("Account could not be created")
            console.log(displayName, email, password, passwordConfirmation)
        }
    }

    const handleName = (field) => {
        if (validateName(field.target.value)) {
            console.log("valid name given")
            setDisplayName(field.target.value);
        } else {
            setDisplayName('')
            console.log("invalid name");
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
        if (field.target.id === 'password') {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPassword(field.target.value);
            } else {
                setPassword('')
                console.log("invalid password");
            }
        } else {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPasswordConfirmation(field.target.value);
            } else {
                setPasswordConfirmation('')
                console.log("invalid password");
            }
        }
    }

    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                {/* Left Image Column - Hidden on small screens */}
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

                {/* Right Form Column */}
                <Col xs={12} md={7} className="d-flex align-items-center justify-content-center px-4 px-md-5">
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <h1>Sign Up</h1>
                        <p>
                            Already have an account? <a href="/sign-in">Sign in</a>
                        </p>
                        <Form>
                            <FormGroup className="mt-4" controlId="displayName">
                                <FormLabel>Display Name *</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder="John"
                                    onChange={e => handleName(e)}
                                    className="py-3 px-4"
                                />
                            </FormGroup>

                            <FormGroup className="mt-3" controlId="email">
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl
                                    type="email"
                                    placeholder="john.appleseed@email.com"
                                    onChange={e => handleEmail(e)}
                                    className="py-3 px-4"
                                />
                            </FormGroup>

                            <FormGroup className="mt-4" controlId="password">
                                <FormLabel>Password *</FormLabel>
                                <FormControl
                                    type="password"
                                    onChange={e => handlePassword(e)}
                                    className="py-3 px-4"
                                />
                            </FormGroup>

                            <FormGroup className="mt-3 mb-4" controlId="passwordConfirm">
                                <FormLabel>Confirm Password *</FormLabel>
                                <FormControl
                                    type="password"
                                    onChange={e => handlePassword(e)}
                                    className="py-3 px-4"
                                />
                            </FormGroup>

                            <Button
                                type="button"
                                onClick={onSubmit}
                                className="w-100 py-3"
                            >
                                Register Account
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;