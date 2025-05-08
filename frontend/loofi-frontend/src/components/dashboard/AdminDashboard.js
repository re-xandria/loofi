import React, {useState} from "react";
import BaseDashboard from "../dashboard/BaseDashboard";
import {Col, Container, Nav, Row} from "react-bootstrap";
import EditProfile from "../../features/account/EditProfile";
import AccountSettings from "../../features/account/AccountSettings";
import Analytics from "../../features/account/Analytics";
import FriendNetwork from "../../features/account/FriendNetwork";

const AdminDashboard = ({isChecked}) => {

    const [selectedPage, setSelectedPage] = useState('')

    const changePage = () => {
        switch (selectedPage) {
            case "achievements":
                return
            case "settings":
                return <AccountSettings></AccountSettings>
            case "friends":
                return <FriendNetwork></FriendNetwork>
            case "reporting":
                return <Analytics></Analytics>
            default:
                return <EditProfile></EditProfile>
        }
    }


    return (
        <BaseDashboard title="admin" isChecked={isChecked}>
            <Container>
                <Row className="mt-5 gap-5 flex">
                    <Col lg={6}>
                        {changePage()}
                    </Col>

                    <Col lg={4}>

                        <h3>Account Dashboard</h3>
                        <hr/>

                        <Nav variant="pills" defaultActiveKey="dashboard" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="dashboard" onClick={() => setSelectedPage('')}>Edit
                                    Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link disabled eventKey="achievements"
                                          onClick={() => setSelectedPage('achievements')}>Achievements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="settings" onClick={() => setSelectedPage('settings')}>Account
                                    Settings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="friends" onClick={() => setSelectedPage('friends')}>Manage Friend
                                    Network</Nav.Link>
                                {/*  admins get function to change user to admin  */}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="reporting" onClick={() => setSelectedPage('reporting')}>Analytics
                                    Reporting</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </BaseDashboard>
    );
};

export default AdminDashboard;