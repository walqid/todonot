import React, { Component } from "react";

const DisplayPersonDetails = props => (
    <tr>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.phNo}</td>
        <td>{props.email}</td>
        <td>
            <button
                type="button"
                className="btn btn-success"
                onClick={() => props.call(props.phNo)}
            >
                Call
            </button>
            &nbsp; &nbsp;
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.sendEmail(props.email)}
            >
                Email
            </button>
        </td>
    </tr>
);

export default class App extends Component {
    state = {
        list: [
            {
                name: "Sudarsan",
                age: 23,
                email: "xyz@gmail.com",
                phNo: 7708660623
            },
            {
                name: "Vimal",
                age: 23,
                email: "xyz@gmail.com",
                phNo: 1234567890
            },
            {
                name: "Fehath",
                age: 23,
                email: "xyz@gmail.com",
                phNo: 123456789
            },
            {
                name: "Sasi",
                age: 23,
                email: "xyz@gmail.com",
                phNo: 123456789
            },
            {
                name: "Sami",
                age: 23,
                email: "xyz@gmail.com",
                phNo: 123456789
            }
        ]
    };

    handleCall = phNo => {
        window.location.href = `tel:${phNo}`;
    };

    handleSendEmail = email => {
        window.location.href = `mailto:${email}`;
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Details</h2>
                        <table
                            style={{ textAlign: "center" }}
                            className="table"
                        >
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Ph No</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.list.map((item, index) => (
                                    <DisplayPersonDetails
                                        key={index}
                                        name={item.name}
                                        age={item.age}
                                        phNo={item.phNo}
                                        email={item.email}
                                        // {...item}
                                        index={index}
                                        call={this.handleCall}
                                        sendEmail={this.handleSendEmail}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
