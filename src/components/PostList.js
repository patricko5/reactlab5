import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Error retrieving data" });
      });
  };
  deleteRow = (id, e) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const posts = this.state.posts.filter((item) => item.id !== id);
        this.setState({ posts });
      });
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1> Example of React Axios Delete Request </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  {" "}
                  <img className="thumbnailSize" src={post.thumbnailUrl}></img>{" "}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRow(post.id, e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostList;
