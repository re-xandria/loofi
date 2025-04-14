// reusable dashboard component, changes if admin or regular user

import {Button, Col, Container, Form, FormGroup, Image, Nav, Row} from "react-bootstrap";
import Navigation from "../../components/Navigation";

/*
    Possibly pass the dashboard tabs into the base dashboard if admin view will have extra tabs
*/

function BaseDashboard({ title, children }) {
    return(
        <>
            <Navigation></Navigation>
            <div>{children}</div>
            <footer className="fixed-bottom my-5 mx-5">You are viewing this page as an {title}.</footer>
        </>
    )
}

export default BaseDashboard;