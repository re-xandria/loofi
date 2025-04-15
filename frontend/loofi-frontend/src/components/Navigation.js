import {
    Button, Col,
    Container,
    Form,
    Image,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    NavLink, Row
} from "react-bootstrap";
import Logo from "../assets/Loofi Dark Purple & Cyan.svg"
import Controller_SVG from "../assets/Controller.svg"
import Add_User_SVG from "../assets/Add User.svg"
import Avatar7 from "../assets/Avatar 7.svg"
import {useNavigate} from "react-router-dom";
import {useEffect, useContext, use} from "react";
import {UserContext} from "../features/auth/Store";
import Search from "./Search";

function Navigation({ isChecked, setIsChecked }) {

    const navigate = new useNavigate();
    const [userInfo, clearUserInfo] = useContext(UserContext);

    console.log("ComponentName:", { isChecked, setIsChecked });

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

    return(
        <Navbar expand="lg" bg="light" className="py-2 px-3">
            <Container fluid>

                <Navbar.Brand href="/home" className="me-lg-5 me-sm-3 d-flex align-items-center">
                    <img src={Logo} alt="Loofi logo" style={{ width: '120px' }} className="img-fluid" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="w-100">
                    <Row className="w-100 align-items-center justify-content-between flex-grow-1">

                        {/* Replace with Search component */}
                        <Col xl={7} md={6} className="d-flex justify-content-center align-items-center gap-3 my-2 ms-lg-5">
                            <Search isChecked={isChecked} setIsChecked={setIsChecked}></Search>
                        </Col>

                        <Col lg={4} md={3} className="d-flex justify-content-end align-items-center gap-3 my-2">
                            <NavLink href="/home">Home</NavLink>
                            <NavLink href="/dashboard">Account Dashboard</NavLink>
                            <NavLink href="" onClick={logOut}>Log Out</NavLink>
                            <Image src={Avatar7} roundedCircle style={{ width: '40px' }} />
                        </Col>

                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;