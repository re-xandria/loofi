import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import * as friendsAPI from "../../services/friendsAPI";
import {UserContext} from "../auth/Store";
import Remove from "../../assets/Remove.svg";
import View from "../../assets/Eyes.svg";
import Block from "../../assets/Block.png";
import ChangeRole from "../../assets/Change Role.svg";
import * as settingsAPI from "../../services/settingsAPI";
import * as adminAPI from "../../services/adminAPI";

function FriendNetwork() {

    const [friendsList, setFriendsList] = useState([]);
    const [userInfo, setUserInfo] = useContext((UserContext));

    const fetchData = async () => {
        try {
            const res = await friendsAPI.findFriends(userInfo.email);
            setFriendsList(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    const removeUserRequest = async (requestorEmail, userEmail) => {
        try {
            const res = await friendsAPI.removeUser(requestorEmail, userEmail)
            console.log(res.data)
            switch (res.data) {
                case "User deleted as friend":
                    alert("User was successfully removed as a friend!");
                    fetchData();
                    break;
                case "User could not be found":
                    alert("User could not be found in friend network.");
                    break;
                default:
                    alert("Unable to remove user as friend. Please try again.");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const toggleRole = async (adminEmail, userEmail) => {
        if (adminEmail !== userEmail) {
            try {
                let res = await settingsAPI.isAdmin(userEmail);
                if (res.data) {
                    let res = await adminAPI.updateRole(adminEmail, userEmail, "ROLE_USER")
                    res.data ? alert("Successfully changed role from admin to user.") : alert("Could not change role from admin to user. Please try again.")
                } else {
                    let res = await adminAPI.updateRole(adminEmail, userEmail, "ROLE_ADMIN")
                    res.data ? alert("Successfully changed role from user to admin.") : alert("Could not change role from user to admin. Please try again.")
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Cannot change own role.")
        }
    }

    return (
        <>
            <h3>Friend Network</h3>
            <hr/>
            <Container className={"mt-3 d-flex flex-column gap-2"}>
                {friendsList[0] ? (
                    friendsList.map((item, idx) =>
                        <Row className={"py-2 align-items-center"} key={idx}>
                            <Col ><h4>{item.displayName}</h4></Col>
                            <Col ><p className={"m-0"}>{item.email}</p></Col>
                            <Col className={"d-flex gap-3"}>
                                <Button variant={"outline-light"} style={{
                                    borderRadius: "100%",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px, solid, #e5e5e5",
                                    objectFit:"cover"
                                    }}
                                    onClick={() => removeUserRequest(userInfo.email, item.email)}
                                >
                                    <Image
                                        fluid
                                        src={Remove}
                                        style={{
                                            scale: "100%"
                                        }}
                                    >
                                    </Image>
                                </Button>
                                <Button disabled variant={"light"} style={{
                                    borderRadius: "100%",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px, solid, #e5e5e5"}}
                                >
                                    <Image
                                        fluid
                                        src={View}
                                        style={{
                                            scale: "150%"
                                        }}
                                    >
                                    </Image>
                                </Button>
                                <Button disabled variant={"light"} style={{
                                    borderRadius: "100%",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px, solid, #e5e5e5"}}
                                >
                                    <Image
                                        fluid
                                        src={Block}
                                        style={{
                                            scale: "130%"
                                        }}
                                    >
                                    </Image>
                                </Button>
                                { userInfo.role === 'admin' &&
                                    <Button variant={"outline-light"} style={{
                                        borderRadius: "100%",
                                        width: "40px",
                                        height: "40px",
                                        border: "1px, solid, #e5e5e5"}}
                                            onClick={() => toggleRole(userInfo.email, item.email)}
                                    >
                                        <Image
                                            fluid
                                            src={ChangeRole}
                                            style={{
                                                scale: "140%"
                                            }}
                                        >
                                        </Image>
                                    </Button>
                                }
                            </Col>
                        </Row>
                    )
                ) : (
                    <Row>No friends found. Start searching to add new friends!</Row>
                )}
            </Container>
        </>
    )
}

export default FriendNetwork;