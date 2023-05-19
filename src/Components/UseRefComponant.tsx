import React, { useRef } from "react";

const UseRefComponant: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const scrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "2rem" }}>
          In this componant i have used UseRed hook to scroll to the div
        </p>
        <button className="btn btn-primary" onClick={scrollToDiv}>
          Scroll to Div
        </button>
      </div>
      <div
        className="mt-4"
        ref={divRef}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "gray",
          color: "White",
        }}
      >
        Scroll to this Div
      </div>
    </div>
  );
};

export default UseRefComponant;
