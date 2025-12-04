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
      <h1>Workshop Blank Page</h1>
      {/* Paragraph */}
      <p>
        Here is a blank page for you to start developing! Refer to the
        instructions on <a href="/">Home</a> for steps to follow
      </p>
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
