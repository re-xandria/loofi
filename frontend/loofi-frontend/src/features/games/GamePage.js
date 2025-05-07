import {useSearchParams} from "react-router-dom";
import Navigation from "../../components/Navigation";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import placeholder from "../../assets/placeholder.png"
import fullscreen from "../../assets/Fullscreen.svg"
import Thumbnail from "../../assets/Game Thumbnail.svg";
import Roshambo from "./Roshambo";

function GamePage() {

    const [searchParams] = useSearchParams();
    const isChecked = searchParams.get("isChecked") === "true";

    const toggleFullscreen = () => {
        const isFullscreen = document.fullscreenElement;
        if (isFullscreen) {
            document.exitFullscreen()
        } else {
            document.getElementById("game-container").requestFullscreen()
        }
    }

    return (
        <>
            <Navigation isChecked={isChecked}></Navigation>
            <Container fluid className="mx-5">

                <Row className="mt-5 gap-5 flex">
                    <Col lg={7}>
                        <h3>Roshambo!</h3>
                        <hr/>
                        {/*  Component that renders the game, canvas element that can be made fullscreen?  */}
                        <div className="px-lg-3">
                            <div id={"game-container"} className="d-flex w-100 position-relative" style={{
                                aspectRatio: '16 / 9',
                                height: '50vh',
                                overflow: 'hidden',
                                backgroundImage: 'linear-gradient(to bottom right, #8A2AE0, #FF1493)',
                                borderRadius: "15px"
                            }}>
                                <Button variant={""} onClick={toggleFullscreen} className="position-absolute end-0"
                                        style={{scale: '50%'}}><Image src={fullscreen}/></Button>
                                <Roshambo></Roshambo>
                            </div>
                            <div className="d-flex flex-column gap-3 px-lg-5 my-lg-5">
                                <h4><i>About Roshambo!</i></h4>
                                <p>A simple digital version of the classic game. Choose rock, paper, or scissors and see
                                    if you can beat the computer. No fancy extras, just quick, easy fun.</p>
                                <div className="d-flex gap-2">
                                    <Button variant="light">#Classic</Button>
                                    <Button variant="light">#PvC</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} className="d-flex flex-column row-gap-5">
                        <Row className="d-flex flex-row row-gap-2">
                            <h3>Recommended Games</h3>
                            <hr/>
                            <Row>
                                <Col lg={3}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Coming Soon</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={3}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Coming Soon</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={3}>
                                    <Image thumbnail fluid src={Thumbnail}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Coming Soon
                                    </h5>
                                </Col>
                            </Row>
                        </Row>

                        <Row className="d-flex flex-row row-gap-3 justify-content-between">
                            <h3>Top Players</h3>
                            <hr/>
                            <Row className="align-items-center">
                                <Col sm={1}>
                                    <h5>1</h5>
                                </Col>
                                <Col sm={2}>
                                    <Image fluid src={placeholder} roundedCircle></Image>
                                </Col>
                                <Col>
                                    <p>Display Name or Email</p>
                                </Col>
                                <Col sm={2}>
                                    <p>278 LP</p>
                                </Col>
                            </Row>

                            <Row className="align-items-center">
                                <Col sm={1}>
                                    <h5>2</h5>
                                </Col>
                                <Col sm={2}>
                                    <Image fluid src={placeholder} roundedCircle></Image>
                                </Col>
                                <Col>
                                    <p>Display Name or Email</p>
                                </Col>
                                <Col sm={2}>
                                    <p>278 LP</p>
                                </Col>
                            </Row>

                            <Row className="align-items-center">
                                <Col sm={1}>
                                    <h5>3</h5>
                                </Col>
                                <Col sm={2}>
                                    <Image fluid src={placeholder} roundedCircle></Image>
                                </Col>
                                <Col>
                                    <p>Display Name or Email</p>
                                </Col>
                                <Col sm={2}>
                                    <p>278 LP</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default GamePage;