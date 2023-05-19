import React, { useState } from "react";

interface Props {
  onData: (data: string) => void;
}

const ChildComponent: React.FC<Props> = ({ onData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const sendDataToParent = () => {
    onData(inputValue);
    setInputValue("");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
