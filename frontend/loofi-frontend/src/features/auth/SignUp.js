import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import placeholder from "../../assets/placeholder.png";
import * as authAPI from "../../services/authAPI";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [token, setToken] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (token) {
            console.log("Token acquired:  ", token);
            navigate('/'); // send to loofi platform if token returned
        }
    }, [token]);

    const onSubmit = async () => {
        authAPI.signUp(firstName, email, password)
            .then(res => {
                setToken(res.data.token);
            })
            .catch(error => {
                console.log("Unable to create user", error);
                alert("Unable to create account. Try again.")
            })
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
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem"}} type="text"  placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup style={{marginTop:1 + "rem"}} controlId="email">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Email Address *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem", marginBottom:3 + "rem"}} type="email"  placeholder="john.appleseed@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Password *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup style={{marginTop:1 + "rem"}} controlId="passwordConfirm">
                            <FormLabel style={{display:"block", marginBottom:.5 + "rem"}}>Confirm Password *</FormLabel>
                            <FormControl style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                        </FormGroup>
                        <Button style={{paddingInlineStart:1 + "rem", paddingInlineEnd:1 + "rem", paddingBlockStart: .75+ "rem", paddingBlockEnd: .75+ "rem", width: 20 + "rem" }} type="button" onClick={onSubmit}>Register Account</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;