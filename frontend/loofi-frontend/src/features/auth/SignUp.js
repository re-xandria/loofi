import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import placeholder from "../../assets/placeholder.png";
import * as authAPI from "../../services/authAPI";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {validateEmail, validateName, validatePassword} from "../validation/authValidation";
import {UserContext} from "./Store";

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [token, setToken] = useContext(UserContext);
    const [isAcctCreated, setIsAcctCreated] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        if (isAcctCreated && token) {
            console.log("Token acquired");
            navigate('/home'); // send to loofi platform if token returned
        }
    }, [isAcctCreated, token]);

    useEffect(() => {
        console.log("valid fields updated");
        console.log(password)
        console.log(passwordConfirmation)
    }, [firstName, email, password, passwordConfirmation])

    const onSubmit = async () => {
        if (validateName(firstName) && validateEmail(email) && validatePassword(password) && validatePassword(passwordConfirmation) && password === passwordConfirmation){
            try {
                const res = await authAPI.signUp(firstName, email, password)
                setToken({value: res.data.token});
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
        } else  {
            console.log("Account could not be created")
            console.log(firstName, email, password, passwordConfirmation)
        }
    }

    const handleName = (field) => {
        if (validateName(field.target.value)) {
            console.log("valid name given")
            setFirstName(field.target.value);
        }
        else {
            setFirstName('')
            console.log("invalid name");
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
        if (field.target.id === 'password') {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPassword(field.target.value);
            }
            else {
                setPassword('')
                console.log("invalid password");
            }
        }
        else {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPasswordConfirmation(field.target.value);
            }
            else {
                setPasswordConfirmation('')
                console.log("invalid password");
            }
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
                    <h1>Sign Up</h1>
                    <p>Already have an account? <a href="/sign-in">Sign in</a></p>
                    <Form mx-md-2="true" style={{marginRight:10 + "rem"}}>
                        <FormGroup style={{marginTop:2.5 + "rem"}} controlId="firstName">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>First Name *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem"}} type="text"  placeholder="John" onChange={e => handleName(e)}/>
                        </FormGroup>
                        <FormGroup style={{marginTop:1 + "rem"}} controlId="email">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Email Address *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem", marginBottom:3 + "rem"}} type="email"  placeholder="john.appleseed@email.com" onChange={e => handleEmail(e)}/>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Password *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="password" onChange={e => handlePassword(e)} />
                        </FormGroup>
                        <FormGroup style={{marginTop:1 + "rem"}} controlId="passwordConfirm">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Confirm Password *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="password" onChange={e => handlePassword(e)}/>
                        </FormGroup>
                        <Button style={{paddingInlineStart:1 + "rem", paddingInlineEnd:1 + "rem", paddingBlockStart: .75+ "rem", paddingBlockEnd: .75+ "rem", width: 20 + "rem" }} type="button" onClick={onSubmit}>Register Account</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;