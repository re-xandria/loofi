import React, {use, useEffect, useState} from "react";
import BaseDashboard from "../dashboard/BaseDashboard";
import {Button, Col, Container, Form, Image, Nav, Row} from "react-bootstrap";
import Avatar7 from "../../assets/Avatar 7.svg";
import EditProfile from "../../features/account/EditProfile";
import AccountSettings from "../../features/account/AccountSettings";

const AdminDashboard = () => {

    const [selectedPage, setSelectedPage] = useState('')

    const changePage = () => {
        switch(selectedPage) {
            case "achievements":
                return
            case "settings":
                return <AccountSettings></AccountSettings>
            case "friends":
                return
            case "reporting":
                return
            default:
                return <EditProfile></EditProfile>
        }
    }


    return (
        <BaseDashboard title="admin">
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
                                <Nav.Link eventKey="friends"onClick={() => setSelectedPage('friends')}>Manage Friend Network</Nav.Link>
                                {/*  admins get function to change user to admin  */}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="reporting" onClick={() => setSelectedPage('reporting')}>Analytics Reporting</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </BaseDashboard>
    );
};

export default AdminDashboard;