// reusable dashboard component, changes if admin or regular user

import {Button, Col, Container, Form, FormGroup, Image, Nav, Row} from "react-bootstrap";
import Avatar7 from "../assets/Avatar 7.svg"

function BaseDashboard({ title, children }) {
    return(
        <>
            <Container>
                <Row className="mt-5 gap-5 flex">
                    <Col lg={7}>
                        <Container className="d-flex align-center gap-3">
                            <h3>Account Dashboard </h3>
                            <p>{title}</p>
                        </Container>
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
                                    <Form.Label>Here's all about me!</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>
                                <Form.Group>
                                    <Button type="button">Save Changes</Button>
                                </Form.Group>
                            </Form>
                        </Row>

                    </Col>

                    <Col lg={4} >

                        <h3>Account Dashboard</h3>
                        <hr/>

                        <Nav variant="pills" defaultActiveKey="/dashboard" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="/dashboard">Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="achievements" href="">Achievements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="settings" href="/settings" >Account Settings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="friends" href="" >Manage Friend Network</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BaseDashboard;