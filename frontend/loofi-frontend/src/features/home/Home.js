import { UserContext } from "../auth/Store";
import React, { useEffect, useState, useContext } from "react";
import Navigation from "../../components/Navigation";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button, Col, Container, Form, Image, Nav, Row} from "react-bootstrap";
import placeholder from "../../assets/placeholder.png"
import Thumbnail from "../../assets/Game Thumbnail.svg"

function Home() {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [searchParams] = useSearchParams();
    const isChecked = searchParams.get("isChecked") === "true";
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            const email = localStorage.getItem("email");
            const token = localStorage.getItem("authToken");
            if (email && token) setUserInfo({email:email, token:token});
            // console.log(userInfo)
        }, 100)
        return () => clearTimeout(timer);
    }, [])

    const goToGamePage = () => {
        navigate(`/game?isChecked=${isChecked}`)
    }

    return (
        <>
            <Navigation isChecked={isChecked}></Navigation>
            <Container>
                <Row className="mt-5 gap-5" >
                    <Col lg={6} >
                        <h3>Featured Games</h3>
                        <hr/>

                        <Container className="px-3">
                            <Row className="gap-2 my-4" onClick={goToGamePage}>
                                <Col lg={5}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col lg={6} className="align-content-center">
                                    <h4>Game Title</h4>
                                    <p>This is sample text representing the description for a game.</p>
                                </Col>
                            </Row>

                            <Row className="gap-2 my-4" onClick={goToGamePage}>
                                <Col lg={5}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col lg={6} className="align-content-center">
                                    <h4>Game Title</h4>
                                    <p>This is sample text representing the description for a game.</p>
                                </Col>
                            </Row>

                            <Row className="gap-2 my-4" onClick={goToGamePage}>
                                <Col lg={5}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col lg={6} className="align-content-center">
                                    <h4>Game Title</h4>
                                    <p>This is sample text representing the description for a game.</p>
                                </Col>
                            </Row>

                        </Container>

                    </Col>

                    <Col lg={5}>
                        <h3>Top Players This Week</h3>
                        <hr/>
                        <p>Coming Soon</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;