import React, {useState} from "react";
import BaseDashboard from "../dashboard/BaseDashboard";
import {Button, Col, Container, Form, Image, Nav, Row} from "react-bootstrap";
import Avatar7 from "../../assets/Avatar 7.svg";
import AccountSettings from "../../features/account/AccountSettings";
import Analytics from "../../features/account/Analytics";
import EditProfile from "../../features/account/EditProfile";

const UserDashboard = () => {

    const [selectedPage, setSelectedPage] = useState('')

    const changePage = () => {
        switch(selectedPage) {
            case "achievements":
                return
            case "settings":
                return <AccountSettings></AccountSettings>
            case "friends":
                return
            default:
                return <EditProfile></EditProfile>
        }
    }

    return (
        <BaseDashboard title="user">
            <Container>
                <Row className="mt-5 gap-5 flex">
                    <Col lg={6} >
                        {changePage()}
                    </Col>

                    <Col lg={4} >

                        <h3>Account Dashboard</h3>
                        <hr/>

                        <Nav variant="pills" defaultActiveKey="dashboard" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="dashboard" onClick={() => setSelectedPage('')}>Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="achievements" onClick={() => setSelectedPage('achievements')}>Achievements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="settings" onClick={() => setSelectedPage('settings')}>Account Settings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="friends" onClick={() => setSelectedPage('friends')}>Manage Friend Network</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </BaseDashboard>
    );
};

export default UserDashboard;