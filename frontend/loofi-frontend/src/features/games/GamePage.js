import {useSearchParams} from "react-router-dom";
import Navigation from "../../components/Navigation";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import placeholder from "../../assets/placeholder.png"

function GamePage() {

    const [searchParams] = useSearchParams();
    const isChecked = searchParams.get("isChecked") === "true";

    return(
        <>
            <Navigation isChecked={isChecked}></Navigation>
            <Container fluid className="mx-5">

                <Row className="mt-5 gap-5 flex">
                    <Col lg={7} >
                        <h3>Title of Selected Game</h3>
                        <hr/>
                        {/*  Component that renders the game, canvas element that can be made fullscreen?  */}
                        <div className="px-lg-3">
                            <div className="d-flex w-100" style={{ aspectRatio: '16 / 9', height: '50vh', overflow: 'hidden' }}>
                                <Image src={placeholder} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="Game preview"/>
                            </div>
                            <div className="d-flex flex-column gap-3 px-lg-5 my-lg-5">
                                <h4>About Selected Game</h4>
                                <p>This is a description for the selected game. The description will be several sentences long. This is a description for the selected game. The description will be several sentences long. This is a description for the selected game. The description will be several sentences long.</p>
                                <div className="d-flex gap-2">
                                    <Button variant="light">#Hashtag</Button>
                                    <Button variant="light">#Hashtag</Button>
                                    <Button variant="light">#Hashtag</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} className="d-flex flex-column row-gap-5">
                        <Row className="d-flex flex-row row-gap-2">
                            <h3>Recommended Games</h3>
                            <hr/>
                            <Row >
                                <Col lg={4} >
                                    <Image thumbnail fluid src={placeholder}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Title</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4} >
                                    <Image thumbnail fluid src={placeholder}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Title</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4} >
                                    <Image thumbnail fluid src={placeholder}></Image>
                                </Col>
                                <Col className="align-content-center">
                                    <h5>Game Title</h5>
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
                                    <Image fluid src={placeholder} roundedCircle ></Image>
                                </Col>
                                <Col >
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
                                    <Image fluid src={placeholder} roundedCircle ></Image>
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
                                    <Image fluid src={placeholder} roundedCircle ></Image>
                                </Col>
                                <Col >
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