import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action";

const Ques2: React.FC = () => {
  const [countValue, setCountValue] = useState(0);
  const counter = useSelector(
    (state: { counter: { counter: number } }) => state.counter.counter
  );

  useEffect(() => {
    setCountValue(counter);
  }, [counter]);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="border ">
      <div className="row">
        <div className="col-md-6 bg-primary text-white p-4">
          <p className="text-black text-center" style={{ fontWeight: "bold" }}>
            Part-2
          </p>
          <h3>
            For this task, I have implemented the Effect hook to update the
            count state value of this functional component.
          </h3>
        </div>
        <div className="col-md-6 bg-secondary p-4 d-flex align-items-center justify-content-center">
          <p className="text-white text-center">Count: {countValue}</p>
          <div className="d-flex">
            <button className="btn btn-success mx-2" onClick={handleIncrement}>
              Increment
            </button>
            <button className="btn btn-danger mx-2" onClick={handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ques2;
