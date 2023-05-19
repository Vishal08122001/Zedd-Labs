import React, { useState } from "react";
import { useSelector } from "react-redux";

const FunctionalComponent: React.FC = () => {
  const [text, setText] = useState("");
  const Counter2 = useSelector(
    (state: { counter2: { counter2: number } }) => state.counter2.counter2
  );

  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "400px",
        maxHeight: "fit-content",
      }}
    >
      <div className="row">
        <div className="col-md-6 bg-primary text-white p-4">
          <p style={{ fontSize: "2rem" }}>
            This value is from Functional Component The value of count is from
            Part-3 fetched from the Redux store
          </p>
          <span style={{ color: "red", fontSize: "30px" }}>{Counter2}</span>
        </div>
        <div className="col-md-6 bg-secondary p-4">
          <p style={{ fontSize: "1rem", color: "white" }}>
            Handling data from useState hook
          </p>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <h1 style={{ fontSize: "3rem", color: "red" }}>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default FunctionalComponent;
