import logo from './logo.svg';
import './styles/App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';


function App() {
  // const [message, setMessage] = useState("");
  //
  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/test')
  //       .then(res => {setMessage(res.data)})
  //       .catch(error => console.log("Error:", error));
  // }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*<p>{message}</p>*/}
      </header>
    </div>
  );
}

export default App;
