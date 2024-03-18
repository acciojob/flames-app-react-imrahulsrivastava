import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      relationship: "",
    };
  }

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    const nameA = name1.trim().toLowerCase().split("");
    const nameB = name2.trim().toLowerCase().split("");

    const charCount = {};

    for (let char of nameA) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    let modified = "";
    for (const char of nameB) {
      if (charCount[char] && charCount[char] > 0) {
        charCount[char]--;
      } else {
        modified += char;
      }
    }

    for (let char in charCount) {
      while (charCount[char] > 0) {
        modified += char;
        charCount[char]--;
      }
    }

    const result = modified.length % 6;

    switch (result) {
      case 1:
        this.setState({ relationship: "Friends" });
        break;
      case 2:
        this.setState({ relationship: "Love" });
        break;
      case 3:
        this.setState({ relationship: "Affection" });
        break;
      case 4:
        this.setState({ relationship: "Marriage" });
        break;
      case 5:
        this.setState({ relationship: "Enemy" });
        break;
      case 0:
        this.setState({ relationship: "Siblings" });
        break;
      default:
        this.setState({ relationship: "Please enter valid input" });
    }
  };

  clearForm = () => {
    this.setState({
      name1: "",
      name2: "",
      relationship: "",
    });
  };

  render() {
    const { name1, name2, relationship } = this.state;

    return (
      <>
        <div id="main">
          <input
            type="text"
            name="name1"
            value={name1}
            onChange={(e) => this.setState({ name1: e.target.value })}
            placeholder="Enter first name"
            data-testid="input1"
          />
          <br />
          <input
            type="text"
            name="name2"
            value={name2}
            onChange={(e) => this.setState({ name2: e.target.value })}
            placeholder="Enter second name"
            data-testid="input2"
          />
          <br />
          <button
            onClick={this.calculateRelationship}
            data-testid="calculate_relationship"
          >
            Calculate Relationship Future
          </button>
          <button onClick={this.clearForm} data-testid="clear">
            Clear
          </button>
        </div>
        <h3 data-testid="answer">{relationship}</h3>
      </>
    );
  }
}

export default App;
