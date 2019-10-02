import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    name: "",
    age: "",
    city: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  handleChange = e => {
    let obj = {
      [e.target.name]: e.target.value
    };

    console.log(obj);

    this.setState(obj);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        />
        <input
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          placeholder="city"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
