import React, {useEffect, useState} from "react";
import {Col, Dropdown, Row, SplitButton, Table} from "react-bootstrap";
import * as searchAPI from "../../services/searchAPI";

function Analytics() {

    const [users, setUsers] = useState([]);

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

    return (
        <>
            <Row className="d-flex">
                <Col>
                    <h3>Analytics Reporting</h3>
                </Col>
                <Col>
                    <SplitButton
                        key="down"
                        id="dropdown-button-drop-down"
                        drop="down"
                        variant="primary"
                        title="Select Report"
                    >
                        <Dropdown.Item eventKey="1" active>User Accounts</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item eventKey="2" disabled={true}>User Statistics</Dropdown.Item>
                    </SplitButton>
                </Col>
            </Row>
            <hr/>

            <Row>
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
            </Row>

        </>
    )
}

export default Analytics;