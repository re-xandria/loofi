import {Button, Col, Container, Image, Navbar, NavLink, Row} from "react-bootstrap";
import Logo from "../assets/Loofi Dark Purple & Cyan.svg"
import Home from "../assets/Home.svg";
import Dashboard from "../assets/Dashboard.svg";
import Logout from "../assets/Logout.svg"
import Avatar7 from "../assets/Avatar 7.svg"
import NotificationsUnread from "../assets/Notification (Unread).svg"
import NotificationsRead from "../assets/Notification (Read).svg"
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../features/auth/Store";
import Search from "./Search";

function Navigation({isChecked}) {

    const navigate = new useNavigate();
    const [userInfo, clearUserInfo] = useContext(UserContext);

    useEffect(() => {
        if (userInfo.token === '') navigate("/")
    }, []);

    const logOut = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            clearInfo()
            console.log("user logged out")
            setTimeout(() => {
                navigate('/');
            }, 50);
        }
    }

    const clearInfo = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        clearUserInfo();
    }

    return (
        <Navbar expand="lg" bg="light" className="py-2 px-3">
            <Container fluid>

                <Navbar.Brand href="/home" className="me-lg-4 me-sm-3 d-flex align-items-center">
                    <img src={Logo} alt="Loofi logo" style={{width: '120px'}} className="img-fluid"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav" className="w-100">
                    <Row className="w-100 justify-content-end flex-grow-1">

                        <Col xl={7} md={6}
                             className="d-flex justify-content-center align-items-center gap-2 my-2 ms-lg-5">
                            <Search isChecked={isChecked}></Search>
                        </Col>

                        <Col lg={4} md={3} className="d-flex justify-content-end align-items-center gap-3 my-2">
                            <NavLink href={`/home?isChecked=${isChecked}`}><Image src={Home} alt="Home"
                                                                                  style={{scale: '60%'}}/></NavLink>
                            <NavLink href={`/dashboard?isChecked=${isChecked}`}><Image src={Dashboard}
                                                                                       style={{scale: '60%'}}/></NavLink>
                            <Button variant={"link"} className={"p-0"}><Image src={NotificationsRead} style={{scale: '60%'}}></Image></Button>
                            <NavLink onClick={logOut}><Image src={Logout} style={{scale: '60%'}}/></NavLink>
                            <Image src={Avatar7} roundedCircle style={{width: '50px'}}/>
                        </Col>

                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;