import '../App.css';
import {Col, Container, Row, Image} from "react-bootstrap";
import placeholder from './placeholder.png';


function SignIn() {
    return(

        <Container fluid style={{height:100+"vh"}}>
            <Row style={{ height: "100%" }}>
                <Col style={{ padding: 0, height: "100%" }}>
                    <Image fluid
                           style={{ width: "100%", height: "100%", objectFit: "cover" }} src={placeholder} alt="placeholder" />
                </Col>
                {/* pattern and logo on left*/}
                <Col fluid style={{ margin: "auto", textAlign:"left", paddingInlineStart:20 + "em", paddingInlineEnd:20 + "em"}}  id="sign-in" xxl={7} >
                    <h1>Sign In</h1>
                    <p>New to Loofi? <a href="#">Create an account</a></p>
                    <form style={{marginRight:10 + "rem"}}>
                        <div style={{marginTop:2.5 + "rem"}}>
                            <label style={{display:"block", marginBottom:.5 + "rem"}}>Email Address *</label>
                            <input style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem", marginBottom:3 + "rem"}} type="text" id="usernameEmail"/>
                        </div>
                        <div>
                            <label style={{display:"block", marginBottom:.5 + "rem"}}>Password *</label>
                            <input style={{display:"block", paddingTop:.75 + "rem", paddingBottom:.75 + "rem", paddingLeft:1 + "rem", paddingRight:1 + "rem", width: 20 + "rem" }} type="text" id="usernameEmail"/>
                            <a style={{display:"block",  marginTop:.5 + "rem", marginBottom:3 + "rem", width: 20 + "rem"}} href="">Forgot Password?</a>
                        </div>
                        <button style={{paddingInlineStart:1 + "rem", paddingInlineEnd:1 + "rem", paddingBlockStart: .75+ "rem", paddingBlockEnd: .75+ "rem", width: 20 + "rem" }} type="submit">Sign In</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;