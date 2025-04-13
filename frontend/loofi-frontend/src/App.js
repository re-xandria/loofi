import logo from './logo.svg';
import './styles/App.css';
import React, {useEffect, useState} from "react";
import Store from "./features/auth/Store";
import {Button, Container, Row} from "react-bootstrap";

function App() {

  return (
      <div className="App">
        <header className="App-header">
            <h1 className="mb-5" >Welcome to Loofi!</h1>
            <div className="d-grid gap-3">
                <Button className="px-5 py-3" size={"lg"} href='/sign-in'>Sign In</Button>
                <Button className="px-5 py-3" size={"lg"} variant="secondary" href='/sign-up'>Sign Up</Button>
            </div>
        </header>
      </div>
  )
}

export default App;
