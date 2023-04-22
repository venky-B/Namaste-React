import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy name",
        id: 1234,
        location: "Dummy",
      },
    };
    console.log("constructor " + this.props.name);
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("hello");
    }, 1000);
    //API call
    console.log("componentDidMount " + this.props.name);
    const data = await fetch("https://api.github.com/users/venky-B");
    const json = await data.json();

    this.setState({
      userInfo: json,
      count: 0,
    });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != this.prevProps) {
      console.log("count is differnt from prevstate");
    }
    console.log("componentDidUpdate " + this.props.name);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount " + this.props.name);
  }
  render() {
    const { count } = this.state;
    console.log("render " + this.props.name);
    return (
      <>
        <h2> Hello this from profileClass - class based component</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3> Name: {this.state.userInfo.login}</h3>
        <h3> followers : {this.state.userInfo.followers}</h3>
        <h3> following : {this.state.userInfo.following}</h3>
        <h3>count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 2,
            });
          }}
        >
          count
        </button>
      </>
    );
  }
}

export default ProfileClass;
