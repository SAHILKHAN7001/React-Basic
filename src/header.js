import React from "react";
import "./index.css"
import logo192 from './logo192.png'
export default function Header() {
    return (
        <div className="head">
            <img className="reactimg" src={logo192} />
            {/* <img className="reactimg" src={process.env.PUBLIC_URL + "/logo192.png"} /> */}
            <h3>ReactFacts</h3>
            <h2>About React</h2>
        </div>
    )
}