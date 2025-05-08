import {useLocation} from "react-router-dom";
import Navigation from "../../components/Navigation";
import React, {useContext, useState} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Add from "../../assets/Checkmark.svg";
import Block from "../../assets/Block.png";
import View from "../../assets/Eyes.svg";
import * as friendsAPI from "../../services/friendsAPI";
import {UserContext} from "../auth/Store";

function UserSearch() {

    const location = useLocation();
    const results = location.state?.results;
    const [isChecked, setIsChecked] = useState(true);
    const [userInfo, setUserInfo] = useContext((UserContext));

    console.log("ComponentName:", {isChecked, setIsChecked});

    const addUserRequest = async (requestorEmail, userEmail) => {
        try {
            const res = await friendsAPI.addUser(requestorEmail, userEmail)
            console.log(res.data)
            switch (res.data) {
                case "User added as friend":
                    alert("User was successfully added as a friend!");
                    break;
                case "User already added as friend":
                    alert("User is already added as a friend.");
                    break;
                default:
                    alert("Unable to add user as a friend. Please try again.");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navigation isChecked={isChecked} setIsChecked={setIsChecked}></Navigation>
            <Container>
                <Row className="mt-5 gap-5">
                    <Col lg={7}>
                        <h3>User Profiles</h3>
                        <hr/>
                        <Container className={"mt-3 d-flex flex-column gap-2"}>
                            {results[0] ? (
                                results.map((item, idx) =>
                                    <Row className={"py-2 align-items-center"} key={idx}>
                                        <Col sm={4}><h4>{item.displayName}</h4></Col>
                                        <Col sm={4}><p className={"m-0"}>{item.email}</p></Col>
                                        <Col className={"d-flex gap-3"}>
                                            <Button variant={"outline-light"} style={{
                                                borderRadius: "100%",
                                                width: "40px",
                                                height: "40px",
                                                border: "1px, solid, #e5e5e5",
                                                objectFit:"cover"
                                                }}
                                                onClick={() => addUserRequest(userInfo.email, item.email)}
                                            >
                                                <Image
                                                    fluid
                                                    src={Add}
                                                    style={{
                                                        scale: "130%"
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
                                        </Col>
                                    </Row>
                                )
                            ) : (
                                <Row>No results found.</Row>
                            )}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserSearch;