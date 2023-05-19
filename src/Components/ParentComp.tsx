import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <div
      className="border"
      style={{
        display: "flex",
        height: "400px",
        justifyContent: "space-around",
        backgroundColor: "GREEN",
      }}
    >
      <h2
        className="mx-3 border"
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          width: "40%",
          justifyContent: "center",
          alignContent: "space-evenly",
          backgroundColor: "red",
        }}
      >
        <p>
          In this exmple we are passing the data from child component to parent
          component. <br />
          <span style={{ color: "white" }}>This is Parent Element</span>
        </p>
        Your Name is : {dataFromChild}
      </h2>
      <div
        className="mx-3 border"
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "space-evenly",
          backgroundColor: "red",
        }}
      >
        <ChildComponent onData={handleDataFromChild} />
      </div>
    </div>
  );
};

export default ParentComponent;
