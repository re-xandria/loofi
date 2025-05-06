import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";

function Roshambo() {

    // On component load show play now button ✔
    // Player clicks R, P, or S
    // Computer gets random number 1-3 which corresponds to R, P, and S
    // Display winner, keep track of score, and offer to play again

    const [isStarted, setIsStarted] = useState(false);
    const [playerChoice, setPlayerChoice] = useState(-1);
    const [computerChoice, setComputerChoice] = useState(-1);
    let [playerScore, setPlayerScore] = useState(0);
    let [computerScore, setComputerScore] = useState(0);
    const [roundNumber, setRoundNumber] = useState(0);
    const roundMessage = useRef(null);
    const [isRoundOver, setIsRoundOver] = useState(false);
    const choices = ["Rock", "Paper", "Scissors"];
    const [showSpinner, setShowSpinner] = useState(false);

    const startGame = () => {
        setIsStarted((isStarted) => !isStarted);
    }

    useEffect(() => {
        if (playerChoice === -1 || computerChoice === -1) return;
        if (isRoundOver) updateScore();
    }, [isRoundOver]);

    useEffect(() => {
        let timer;
        if (showSpinner) {
            timer = setTimeout(() => {
                setShowSpinner(false);
                setIsRoundOver(true)
            }, 2000)
        }
        return () => clearTimeout(timer);
    }, [showSpinner]);

    const getChoices = (playerChoiceNum) => {
        // 0 is rock, 1 is paper, 2 is scissor
        setPlayerChoice(playerChoiceNum)
        setComputerChoice(Math.floor(Math.random() * 3))
        roundMessage.current.innerText = "Computer is thinking...";
        setShowSpinner(true);
        setIsRoundOver(false)
    }

    const startNewRound = () => {
        setIsRoundOver(false)
        setRoundNumber(roundNumber + 1)
        roundMessage.current.innerText = "Your Turn"
    }

    const updateScore = () => {
        switch (playerChoice - computerChoice) {
            case 1:
                roundMessage.current.innerText = `You Won with ${choices[playerChoice]}!`
                setPlayerScore(playerScore + 1)
                break;
            case 2:
                roundMessage.current.innerText = `Computer Won with ${choices[computerChoice]}!`
                setComputerScore(computerScore + 1)
                break;
            case -1:
                roundMessage.current.innerText = `Computer Won with ${choices[computerChoice]}!`
                setComputerScore(computerScore + 1)
                break;
            case -2:
                roundMessage.current.innerText = `You Won with ${choices[playerChoice]}!`
                setPlayerScore(playerScore + 1)
                break;
            default:
                roundMessage.current.innerText = `It's a Tie with ${choices[playerChoice]}!`
                setPlayerScore(playerScore + 1)
                setComputerScore(computerScore + 1)
                break;
        }
    }

    return (
        <>
            <Container
                className={"d-flex flex-column align-content-center justify-content-center align-items-center h-100"}>

                {!isStarted &&
                    <Button variant={"outline-light"} className={"px-4 py-3"} onClick={startGame} id="start-button">Start
                        Game</Button>}
                {isStarted && <Container className={"d-flex flex-column h-100 w-100 text-center"}>
                    <Row className={"d-flex justify-content-start align-items-start w-100 py-5 text-white mt-3 mb-2"}>
                        <Col><h5>Player Score</h5><h5 id="player-score">{playerScore}</h5></Col>
                        <Col><h5>Round </h5><h5>{roundNumber}</h5></Col>
                        <Col><h5>Computer Score</h5><h5 id="computer-score">{computerScore}</h5></Col>
                    </Row>
                    <Row className={"d-flex flex-column gap-2 my-2 text-white align-items-center"}>
                        <h3 ref={roundMessage}>Your Turn</h3>
                        {showSpinner && <Spinner animation={"border"} as="span"></Spinner>}
                    </Row>
                    {!isRoundOver && <Row id="player-options" className={"d-flex justify-content-center mx-auto py-5"}>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {
                                getChoices(0)
                            }}>Rock</Button>
                        </Col>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {
                                getChoices(1)
                            }}>Paper</Button>
                        </Col>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {
                                getChoices(2)
                            }}>Scissor</Button>
                        </Col>
                    </Row>}
                    {isRoundOver && <Button variant={"light"} className={"d-inline-block px-4 py-3 mx-auto mt-4"}
                                            onClick={startNewRound}>Play Again</Button>}
                </Container>}

            </Container>
        </>
    )
}

export default Roshambo;