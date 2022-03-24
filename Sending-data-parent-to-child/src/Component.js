// SENDING DATA FROM HERE TO PARENT (component to App)

import React from "react";

const Component = (props) => {
  const Data = { name: "tabeeb", Age: 20 };
  const onClickHandler = () => {
    props.onData(Data);
  };
  return (
    <div>
      <button onClick={onClickHandler}>
        Click here to send data from parent to child{" "}
      </button>
    </div>
  );
};

export default Component;
