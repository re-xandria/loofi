import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Avatar7 from "../../assets/Avatar 7.svg";
import React from "react";

function EditProfile() {

    return  (
        <>
            <h3>Edit Profile</h3>
            <hr/>

            <Row className="mt-4 flex-wrap">
                <Col lg={4}>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} className="p-1" width="150px"/>
                </Col>
                <Col  className="d-flex flex-wrap gap-2">
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} className="p-1" width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                    <Image src={Avatar7} roundedCircle style={{background:"grey"}} width="75px"/>
                </Col>
            </Row>

            <Row className="my-4">
                <Form>
                    <Form.Group className="mb-4" controlId="displayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="text" placeholder="The Loofi King" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Here's all about me!" />
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