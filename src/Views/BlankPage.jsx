import { useState } from "react";

const BlankPage = () => {
  // We can set state to retain knowledge of the latest state
  const [message, setMessage] = useState(null);

  const thisIsAFunction = () => {
    return <p>this is the result of clicking the button!</p>;
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <h1>Mental health</h1>
      {/* Paragraph */}
      <img 
  src="/Mental health.png" 
  alt="Mental health" 
  style={{ width: '95%' }} 
/>
      {/* Button */}
      <button
        onClick={() => {
          setMessage(thisIsAFunction());
        }}
      >
        Button
      </button>

      {/* Showing result of a function */}
      {message}
    </div>
  );
};

export default BlankPage;
