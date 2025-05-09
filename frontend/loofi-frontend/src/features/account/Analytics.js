import React, {useEffect, useState} from "react";
import {Col, Dropdown, Row, SplitButton, Table} from "react-bootstrap";
import * as searchAPI from "../../services/searchAPI";
import * as friendsAPI from "../../services/friendsAPI";

function Analytics() {

    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        getUsers().then(() => {
            console.log("User Data Retrieved")
        })
    }, []);

    const getUsers = async () => {
        try {
            const res = await searchAPI.findUsers("@");
            console.log(res.data);
            setUsers(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        users.map(async (item) => {
            try {
                const res = await friendsAPI.findFriends(item.email);
                console.log(res.data)
                let list = friends
                list.push(res.data)
                setFriends(list)
            } catch (error) {
                console.log(error)
                return "0"
            }
        })
    }, [users]);

    const handleSelect = (eventKey) => {
        setActiveKey(prevKey => (prevKey === eventKey ? null : eventKey))
    }

    return (
        <>
            <Row className="d-flex">
                <Col>
                    <h3>Analytics Reporting</h3>
                </Col>
                <Col>
                    <SplitButton
                        key=""
                        id="dropdown-button-drop-down"
                        drop="down"
                        variant="light"
                        title="Select Report"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="1" active={activeKey === '1'}>User Accounts</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item eventKey="2" active={activeKey === '2'}>User Statistics</Dropdown.Item>
                    </SplitButton>
                </Col>
            </Row>
            <hr/>

            {activeKey === '1' && <Row>
                <Col>
                    <Table responsive striped>
                        <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Member Since</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((item) => (
                            <tr>
                                <td>{item.displayName}</td>
                                <td>{item.email}</td>
                                <td>{item.role.substring(5)}</td>
                                <td>{new Date(item.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>}

            {activeKey === '2' && <Row>
                <Col>
                    <Table responsive striped>
                        <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>Friends</th>
                            <th>Games Played</th>
                            <th>Achievements</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((item) => (
                            <tr>
                                <td>{item.displayName}</td>
                                <td>{friends[item.id - 1].length}</td>
                                <td>{item.gamesPlayed}</td>
                                <td>{item.achievementsEarned}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>}

        </>
    )
}

export default Analytics;