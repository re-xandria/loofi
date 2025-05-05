import {Button, Col, Container, Row} from "react-bootstrap";
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
    const [roundNumber, setRoundNumber] = useState(1);
    const roundMessage = useRef(null);

    const startGame = () => {
        setIsStarted((isStarted) => !isStarted);
    }

    useEffect(() => {
        // 0 is rock, 1 is paper, 2 is scissor

        // when option pressed store value in player choice get computer choice
        setComputerChoice(Math.floor(Math.random() * 3))
    }, [playerChoice]);

    useEffect(() => {
        //console.log("PC: " + playerChoice + " | CC: " + computerChoice)

        // (optional) display "computer's turn!" and wait 1-2 seconds
        // display message saying who won
        if (playerChoice === -1 || computerChoice === -1) return;
        updateScore();
        endRound();
    }, [playerChoice, computerChoice]);

    const updateScore = () => {
        // add 1 to winner's score

        switch (playerChoice - computerChoice) {
            case 1:
                roundMessage.current.innerText = "You won!"
                setPlayerScore(playerScore + 1)
                break;
            case 2:
                roundMessage.current.innerText = "Computer won!"
                setPlayerScore(computerScore + 1)
                break;
            case -1:
                roundMessage.current.innerText = "Computer won!"
                setPlayerScore(computerScore + 1)
                break;
            case -2:
                roundMessage.current.innerText = "You won!"
                setPlayerScore(playerScore + 1)
                break;
            default:
                roundMessage.current.innerText = "It's a tie!"
        }
    }



    const endRound = () => {
        // if "play again?" selected, start the game again and display new score

        setRoundNumber(roundNumber + 1)
    }

    return(
        <>
            <Container className={"d-flex flex-column align-content-center justify-content-center align-items-center h-100"}>

                {!isStarted && <Button variant={"outline-light"} className={"px-4 py-3"} onClick={startGame} id="start-button">Start Game</Button>}
                {isStarted && <Container className={"d-flex flex-column h-100 w-100 text-center"}>
                    <Row className={"d-flex justify-content-start align-items-start w-100 py-5 text-white"}>
                        <Col><h5>Player Score</h5><h5 id="player-score">{playerScore}</h5></Col>
                        <Col><h5>Round </h5><h5>{roundNumber}</h5></Col>
                        <Col><h5>Computer Score</h5><h5 id="computer-score">{computerScore}</h5></Col>
                    </Row>
                    <h3 ref={roundMessage} className={"mb-4 text-white"}>Your Turn!</h3>
                    <Row id="player-options" className={"d-flex justify-content-center mx-auto py-5"}>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {setPlayerChoice(0)}}>Rock</Button>
                        </Col>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {setPlayerChoice(1)}}>Paper</Button>
                        </Col>
                        <Col>
                            <Button variant={"outline-light"} className={"px-4 py-3"} onClick={e => {setPlayerChoice(2)}}>Scissor</Button>
                        </Col>
                        {/*{roundOver && <Button>Play Again?</Button>*/}
                    </Row>
                </Container>}

            </Container>
        </>
    )
}

export default Roshambo;