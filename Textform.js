import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        console.log("uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            </div>
        </div>
    );
}
