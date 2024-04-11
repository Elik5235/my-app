import React from "react";
// import SignUpForm from "./LoginForm/LoginForm";
import Clicker from "./SanboxComponent/Clicker";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <Clicker />
        )
    }
}

export default App;