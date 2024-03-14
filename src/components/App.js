import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      relationship: ""
    };
  }

  calculateRelationship = () => {
    const { name1, name2 } = this.state;
    let modifiedName1 = name1.split("");
    let modifiedName2 = name2.split("");

    for (let char of name1.toLowerCase()) {
      if (modifiedName2.includes(char)) {
        modifiedName2.splice(modifiedName2.indexOf(char), 1);
        modifiedName1.splice(modifiedName1.indexOf(char), 1);
      }
    }

    let sum = modifiedName1.length + modifiedName2.length;
    let result = sum % 6;

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
      relationship: ""
    });
  };

  render() {
    const { name1, name2, relationship } = this.state;

    return (
      <div id="main">
        <input
          type="text"
          value={name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
          placeholder="Enter Name 1"
          data-testid="input1"
        />
        <br />
        <input
          type="text"
          value={name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
          placeholder="Enter Name 2"
          data-testid="input2"
        />
        <br />
        <button onClick={this.calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship
        </button>
        <button onClick={this.clearForm} data-testid="clear">
          Clear
        </button>
        <br />
        <h3 data-testid="answer">{relationship}</h3>
      </div>
    );
  }
}

export default App;
