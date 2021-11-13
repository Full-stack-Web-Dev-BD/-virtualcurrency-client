import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "./component/Home";
import './slider.css'


export default function App() {
    return (
        <Router>
            <div>
                <Home />
            </div>
        </Router>
    );
}