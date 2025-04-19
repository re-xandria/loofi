import Controller_SVG from "../assets/Controller.svg";
import {Button, Form} from "react-bootstrap";
import Add_User_SVG from "../assets/Add User.svg";
import * as searchAPI from "../services/searchAPI";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Search({ isChecked, setIsChecked }) {

    const [searchInput, setSearchInput] = useState('');
    const navigate = new useNavigate();

    // console.log("ComponentName:", { isChecked, setIsChecked });

    const handleToggle = () => setIsChecked(prev => !prev);

    const handleInput = (value) => {
        setSearchInput(value.target.value)
    }

    // if switch is checked, onSubmit will execute friend search and go to user results page
    const onSubmit = async () => {
        if (document.getElementById("search-toggle").checked) {
            try {
                const res = await searchAPI.findUsers(searchInput)
                console.log("search successful")
                console.log(res.data)
                navigate('/user-results', { state: { results: res.data } });
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <img src={Controller_SVG} alt="Games Icon" style={{ width: '25px' }} />
            <Form.Check type="switch" checked={isChecked} onChange={handleToggle} id="search-toggle" className="ms-3" style={{ transform: 'scale(1.5)'}}/>
            <img src={Add_User_SVG} alt="Add Friends Icon" style={{ width: '20px' }} />
            <Form className="d-flex w-50">
                <Form.Control type="text" placeholder="Search" className="me-2" onChange={e => {handleInput(e)}} />
                <Button type="button" onClick={onSubmit}>Submit</Button>
            </Form>
        </>
    )
}

export default Search;