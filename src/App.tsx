import React from "react";
import Part2 from "./Components/Part-2";
import MyClassComponent from "./Components/ClassComponant";
import MyFunctionComponent from "./Components/FunctionComponent";
import MyContext from "./Context/MyContext";
import { useSelector } from "react-redux";
import ContextComponent from "./Components/ContextComponent";
import UseRefComponant from "./Components/UseRefComponant";
import ParentComponent from "./Components/ParentComp";
import SocketIoComp from "./Components/SocketIoComp";

const App = () => {
  const counter2 = useSelector(
    (state: { counter2: { counter2: number } }) => state.counter2.counter2
  );

  return (
    <MyContext.Provider value={counter2.toString()}>
      <div className="main">
        <div className="row m-2">
          <div className="col-md-6">
            <MyClassComponent />
          </div>
          <div className="col-md-6">
            <MyFunctionComponent />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-12">
            <Part2 />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-12">
            <ContextComponent />
          </div>
        </div>
        <UseRefComponant />

        <div>
          <ParentComponent />
        </div>
        <div>
          <SocketIoComp />
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
