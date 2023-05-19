import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/store";

interface Props {
  counter: number; // Define the type for the counter prop
}

interface State {
  inputValue: string;
}

class MyClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { counter } = this.props;
    const { inputValue } = this.state;

    return (
      <div
        className="main"
        style={{ display: "flex", flexWrap: "wrap", height: "400px" }}
      >
        <div className="row">
          <div className="col-md-6 bg-primary text-white p-4">
            <p className="my-class-component-text" style={{ fontSize: "2rem" }}>
              This is from Class Component The Value of count from part-2 part
              is
            </p>
            <p
              className="my-class-component-counter"
              style={{ fontWeight: "bold", color: "red", fontSize: "2rem" }}
            >
              {counter}
            </p>
            <p className="my-class-component-text" style={{ fontSize: "1rem" }}>
              Fetched from Redux store
            </p>
          </div>
          <div className="col-md-6 p-4 bg-secondary">
            <p
              className="my-class-component-text"
              style={{ fontSize: "1rem", color: "white" }}
            >
              Handling data from class Componant
            </p>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={this.handleInputChange}
            />
            <h1 style={{ color: "red" }}>{inputValue}</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReturnType<typeof store.getState>) => {
  return {
    counter: state.counter.counter, // Map the counter state to the counter prop
  };
};

export default connect(mapStateToProps)(MyClassComponent);
