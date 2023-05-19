import React, { useContext, useEffect, useState } from "react";
import MyContext from "../Context/MyContext";
import { useDispatch } from "react-redux";
import { increment2, decrement2 } from "../redux/action";

const ContextComponent: React.FC = () => {
  const [count, setCount] = useState("0");
  const data = useContext(MyContext);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment2());
  };

  const handleDecrement = () => {
    dispatch(decrement2());
  };

  useEffect(() => {
    setCount(data);
  }, [handleIncrement, handleDecrement]);

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-6 bg-primary text-white p-4">
          <p className="text-black text-center" style={{ fontWeight: "bold" }}>
            Part-3
          </p>
          <p style={{ fontSize: "2rem" }}>
            In this Demo, I have used the useContext and useEffect hooks, which
            are major hooks in React.
            <br />
            Context Value is in Component 1
          </p>
        </div>
        <div
          className="col-md-6 bg-secondary p-4 d-flex justify-center "
          style={{ alignItems: "center", flexDirection: "column" }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Count: {count}
          </div>
          <button className="btn btn-success my-2" onClick={handleIncrement}>
            Increase Age by 5
          </button>
          <button className="btn btn-danger" onClick={handleDecrement}>
            Decrease Age by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextComponent;
