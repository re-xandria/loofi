import React, {useState} from "react";
import BaseDashboard from "../dashboard/BaseDashboard";
import {Col, Container, Nav, Row} from "react-bootstrap";
import AccountSettings from "../../features/account/AccountSettings";
import EditProfile from "../../features/account/EditProfile";
import FriendNetwork from "../../features/account/FriendNetwork";

const UserDashboard = ({isChecked}) => {

    const [selectedPage, setSelectedPage] = useState('')

    const changePage = () => {
        switch (selectedPage) {
            case "achievements":
                return
            case "settings":
                return <AccountSettings></AccountSettings>
            case "friends":
                return <FriendNetwork></FriendNetwork>
            default:
                return <EditProfile></EditProfile>
        }
    }

    return (
        <BaseDashboard title="user" isChecked={isChecked}>
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
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </BaseDashboard>
    );
};

export default UserDashboard;