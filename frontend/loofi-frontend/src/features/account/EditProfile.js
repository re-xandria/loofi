import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Avatar1 from "../../assets/Avatar 1.svg";
import Avatar2 from "../../assets/Avatar 2.svg";
import Avatar3 from "../../assets/Avatar 3.svg";
import Avatar4 from "../../assets/Avatar 4.svg";
import Avatar5 from "../../assets/Avatar 5.svg";
import Avatar6 from "../../assets/Avatar 6.svg";
import Avatar7 from "../../assets/Avatar 7.svg";
import Avatar8 from "../../assets/Avatar 8.svg";
import React from "react";

function EditProfile() {

    return (
        <>
            <h3>Edit Profile</h3>
            <hr/>

            <Row className="mt-4 flex-wrap">
                <Col lg={4}>
                    <Image src={Avatar7} roundedCircle style={{background: "grey"}} className="p-2" width="150px"/>
                </Col>
                <Col className="d-flex flex-wrap gap-2">
                    <Image src={Avatar1} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar2} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar3} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar4} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar5} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar6} roundedCircle style={{background: "grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background: "grey"}} className="p-1" width="75px"/>
                    <Image src={Avatar8} roundedCircle style={{background: "grey"}} width="75px"/>
                </Col>
            </Row>

            <Row className="my-4">
                <Form>
                    <Form.Group className="mb-4" controlId="displayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder="The Loofi King"/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Here's all about me!"/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="button">Save Changes</Button>
                    </Form.Group>
                </Form>
            </Row>
        </>
    )
}

export default EditProfile;