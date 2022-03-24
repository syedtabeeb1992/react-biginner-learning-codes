import React from "react";
import Component from "./Component";

function App(props) {
  const saveExpensedateHandler = (recievedData) => {
    console.log("FROM  PARENT", recievedData);
  };

  return (
    <div>
      <Component onData={saveExpensedateHandler} />
    </div>
  );
}

export default App;
