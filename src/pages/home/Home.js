import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="container">
        <h3>Home</h3>
      </div>
    );
  }
}

export default Home;
