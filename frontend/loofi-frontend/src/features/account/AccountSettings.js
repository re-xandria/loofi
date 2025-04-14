import {Button, Col, Form, FormLabel, FormText, Image, Row} from "react-bootstrap";
import Avatar7 from "../../assets/Avatar 7.svg";
import React, {useContext, useEffect, useState} from "react";
import * as settingsAPI from "../../services/settingsAPI";
import { UserContext } from "../auth/Store";
import {validatePassword} from "../validation/authValidation";

function AccountSettings() {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    useEffect(() => {
        console.log("valid fields updated");
    }, [password, passwordConfirmation])

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

    const onSubmit = async () => {
        console.log(userInfo.email)
        if (userInfo.token && password === passwordConfirmation) {

            try {
                const res = await settingsAPI.changePassword(userInfo.email, password);
                console.log(res.data)
                alert("Password successfully changed!")
            } catch (error) {
                console.log(error)
                alert("Password could not be saved. Please try again.")
            }
        } else {
            alert("You may not be logged in to your account, therefore your password was not saved.")
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
                        <Form.Control type="text" placeholder="john.appleseed@email.com" />
                    </Form.Group>
                    <Form.Group>
                        <Button type="button" disabled={true}>Send Verification Link</Button>
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
                        <Button type="button" onClick={onSubmit}>Save Changes</Button>
                    </Form.Group>
                </Form>
            </Row>

            {/* Add Delete account button*/}
        </>
    )
}

export default AccountSettings;