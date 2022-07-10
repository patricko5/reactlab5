import React, { Component } from "react";
import axios from "axios";

export class AddList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/photos", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ errorMessage: "Error retrieving data" });
      });
  };
  render() {
    const { userId, title } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>User ID: </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <br />
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default AddList;
