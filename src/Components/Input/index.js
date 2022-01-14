import React, { useState } from "react";

const Input = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  function handlechange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input onChange={handlechange} value={text} />
      <button 
        type="submit"
        onClick={() => {
          handleSubmit(text)
        }}
      >Search</button>
    </div>
  );
};

export default Input;
