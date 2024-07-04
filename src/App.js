import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Login from "./Login/Login";

function App() {
    const {loggedIn,setLoggedIn}=useState(false);

    const getLandingPage=()=>{
        if(loggedIn){
            return (
                <div>

                </div>
            );
        }
        else{
            return (
                <div>
                    <Login loggedIn={loggedIn}/>
                </div>
            );
        }
    }
  return (
    <div className="App">
      <header className="App-header">
          {getLandingPage()}
      </header>
    </div>
  );
}

export default App;
