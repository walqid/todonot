import React, { Component } from "react";

const ChildElement = props => {
    console.log(props);
    return (
        <button
            onClick={() => {
                props.alert(124);
            }}
        >
            Alert
        </button>
    );
};

class App extends Component {
    alert = value => {
        alert("Alert " + value);
    };
    render() {
        return (
            <ChildElement
                a={{
                    name: "xyz",
                    age: 25
                }}
                alert={this.alert}
            />
        );
    }
}

export default App;
