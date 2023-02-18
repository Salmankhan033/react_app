import React, { useState } from "react";

export default function TextForm(props) {
  const [inPutVal, setInputVal] = useState("");
  const onChangeVal = () => {};

  const onChangeToUper = () => {
    setInputVal(inPutVal.toUpperCase());
  };
  const onChangeToLower = () => {
    setInputVal(inPutVal.toLowerCase());
  };
  const handleCopy = () => {
    let text = document.getElementById("textbox");
    // text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <div>
      <h1 style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textbox"
          rows="8"
          value={inPutVal}
          style={{
            backgroundColor: props.mode == "dark" ? "gray" : "white",
          }}
          onChange={(val) => setInputVal(val.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1" onClick={onChangeToUper}>
        Convert to upercase
      </button>
      <button className="btn btn-primary mx-1" onClick={onChangeToLower}>
        Convert to upercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="container">
        <h1 style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
          "Your Text Summary
        </h1>
        <p style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
          {inPutVal.split(" ").length} charecters in your text and
          {inPutVal.length} words
        </p>
        <p style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
          {0.0008 * inPutVal.split(" ").length} times
        </p>
        <h2 style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
          Preview
        </h2>
        <p style={{ color: props.mode == "dark" ? "white" : "#042743" }}>
          {inPutVal}
        </p>
      </div>
    </div>
  );
}
