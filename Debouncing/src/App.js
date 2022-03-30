import React from "react";

function App() {
  const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      timeoutID = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const log = () => {
    console.log("CLICKED");
  };

  return (
    <div>
      <button
        onClick={debounce((e) => {
          log();
        }, 1000)}
      >
        Click
      </button>
    </div>
  );
}

export default App;
