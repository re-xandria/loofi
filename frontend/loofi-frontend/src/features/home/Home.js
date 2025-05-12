import {UserContext} from "../auth/Store";
import React, {useContext, useEffect} from "react";
import Navigation from "../../components/Navigation";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import Thumbnail from "../../assets/Game Thumbnail.svg";
import * as settingsAPI from "../../services/settingsAPI";

function Home() {

    const [searchParams] = useSearchParams();
    const isChecked = searchParams.get("isChecked") === "true";
    const navigate = useNavigate();

    const goToGamePage = () => {
        navigate(`/game?isChecked=${isChecked}`)
    }

    return (
        <>
            <Navigation isChecked={isChecked}></Navigation>
            <Container>
                <Row className="mt-5 gap-5">
                    <Col lg={6}>
                        <h3>Featured Games</h3>
                        <hr/>

                        <Container className="px-3">

                            <Row className="gap-2 my-4" onClick={goToGamePage}>
                                <Col lg={5}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col lg={6}
                                     className="d-flex flex-column gap-2 justify-content-center align-content-center">
                                    <h4>Roshambo</h4>
                                    <p>A classic hand-game where 2 players randomly throw rock, paper, or scissors to
                                        try and beat the other!</p>
                                </Col>
                            </Row>

                        </Container>

                    </Col>

                    <Col lg={5}>
                        <h3>Top Players This Week</h3>
                        <hr/>
                        <Container className="px-3">
                            <p>Coming Soon</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;