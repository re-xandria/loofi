import {Button, Col, Form, FormLabel, FormText, Image, Row} from "react-bootstrap";
import Avatar7 from "../../assets/Avatar 7.svg";
import React, {useContext, useEffect, useState} from "react";
import * as settingsAPI from "../../services/settingsAPI";
import { UserContext } from "../auth/Store";
import {validateEmail, validatePassword} from "../validation/authValidation";

function AccountSettings() {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    useEffect(() => {
        console.log("valid fields updated");
        console.log(userInfo.email)
    }, [password, passwordConfirmation])

    const handleEmail = (field) => {
        if (validateEmail(field.target.value)) {
            console.log("valid email given")
            setEmail(field.target.value);
        }
        else {
            setEmail('')
            console.log("invalid email");
        }
    }

    const handlePassword = (field) => {
        if (field.target.id === 'password') {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPassword(field.target.value);
            }
            else {
                setPassword('')
                console.log("invalid password");
            }
        }
        else {
            if (validatePassword(field.target.value)) {
                console.log("valid password given")
                setPasswordConfirmation(field.target.value);
            }
            else {
                setPasswordConfirmation('')
                console.log("invalid password");
            }
        }
    }

    const onSubmitEmail = async () => {
        if (userInfo.token && email) {
            try {
                const res = await settingsAPI.changeEmail(userInfo.email, email);
                if (res.data === "Email changed") alert("Email successfully changed!");
                else alert("Email entered is same as current email. Please try again.");
                document.getElementById("email").value = ""
            } catch (error) {
                console.log(error)
                alert("Email could not be saved. Please try again.")
            }
        }
    }

    const onSubmitPass = async () => {
        console.log(userInfo.email)
        if (userInfo.token && password === passwordConfirmation) {
            try {
                const res = await settingsAPI.changePassword(userInfo.email, password);
                if (res.data === "Password changed") alert("Password successfully changed!");
                else alert("New password is same as current password. Please try again.")
                document.getElementById("password").value = ""
                document.getElementById("passwordConfirm").value = ""
            } catch (error) {
                console.log(error)
                alert("Password could not be saved. Please try again.")
            }
        }
    }

    return (
        <>
            <h3>Account Settings</h3>
            <hr/>

            <Row className="mt-4">
                <Form>
                    <h5 className="mb-2">Change Email</h5>
                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label>New Email Address</Form.Label>
                        <Form.Control type="text" placeholder="john.appleseed@email.com" onChange={e => handleEmail(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="button" disabled={false} onClick={onSubmitEmail}>Save Changes</Button>
                    </Form.Group>
                </Form>
            </Row>

            <Row className="my-5">
                <Form>
                    <h5 className="mb-2">Change Password</h5>
                    <Form.Group className="mb-4" controlId="password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" onChange={e => handlePassword(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="passwordConfirm">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" onChange={e => handlePassword(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="button" onClick={onSubmitPass}>Save Changes</Button>
                    </Form.Group>
                </Form>
            </Row>

            {/* Add Delete account button*/}
        </>
    )
}

export default AccountSettings;