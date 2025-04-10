import '../App.css';
import {Col, Container, Row, Image} from "react-bootstrap";
import placeholder from './placeholder.png';


function SignIn() {
    return(
        <Container className="App" fluid>
            <Row >
                <Col sm={3} style={{marginRight:10 + "em"}} >
                        <Image style={{height:100 + 'vh', width:40 + "vw"}} src={placeholder} alt="placeholder" />
                </Col>
                {/* pattern and logo on left*/}
                <Col style={{padding: "auto", margin: "auto", textAlign:"left"}}  id="sign-in" sm={4} >
                    <h1>Sign In</h1>
                    <p>New to Loofi? <a href="#">Create an account</a></p>
                    <form>
                        <div style={{marginTop:2.5 + "rem"}}>
                            <label>Username or Email Address *</label>
                            <input type="text" id="usernameEmail"/>
                        </div>
                        <div>
                            <label>Password *</label>
                            <input type="text" id="usernameEmail"/>
                            <a href="">Forgot Password?</a>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;