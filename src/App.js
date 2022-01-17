import "./App.css";

import React, { Component } from "react";
import LogIn from "./screens/LogIn";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <div>
            <LogIn
            />
        </div>;
    }
}

export default App;
