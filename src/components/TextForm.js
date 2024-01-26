import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //so now whereever i update count it will update without reloading page
  const handleUpperClick = () => {
    console.log("Upper case was clicked");
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    console.log("Upper case was clicked");
    setText(text.toLowerCase());
  };
  const handleSentenceClick = () => {
    console.log("Sentence case was clicked");
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].substring(0, 1).toUpperCase() +
        words[i].substring(1).toLowerCase();
    }
    let newText = words.join(" ");
    setText(newText);
  };
  const handleNumberClick = () => {
    console.log("Extract Number was clicked");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (!isNaN(text.charAt(i))) newText += text.charAt(i);
    }
    setText(newText);
  };
  const handleTextClick = () => {
    console.log("Extract Text was clicked");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (isNaN(text.charAt(i))) newText += text.charAt(i);
    }
    setText(newText);
  };
  const removeWhiteSpace = () => {
    console.log("removeWhiteSpace was clicked");
    let words = text.split(" ");
    let newText = words.join("");
    setText(newText);
  };
  const removeSpecial = () => {
    console.log("removeSpecial was clicked");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (!isNaN(text.charAt(i)) || /[a-zA-Z]/.test(text.charAt(i))) {
        newText += text.charAt(i);
      }
    }
    setText(newText);
  };
  const copyToClipboard = () => {
    console.log("copyToClipboard was clicked");
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style ={{backgroundColor: props.mode==="light" ? "white" : "black", color: props.mode==="light" ? "black" : "white"}}
            id="MyBox"
            rows="5"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleSentenceClick}
        >
          Convert to SentenceCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleNumberClick}
        >
          Extract numbers
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTextClick}>
          Extract text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={removeWhiteSpace}
        >
          Remove White Space
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeSpecial}>
          Remove Special Characters
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.trim().length > 0
            ? `${text.trim().split(" ").length} words and ${
                text.length
              } characters`
            : "0 Words and 0 characters"}
        </p>
        <p>{text.trim().length > 0 ? `${text.split(" ").length * 0.08} Minutes needed to read` : "0 Minutes to read"}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
