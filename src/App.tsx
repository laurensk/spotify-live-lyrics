import React from "react";
import { AuthUtils } from "./utils/AuthUtils";
import Player from "./pages/Player";
import Welcome from "./pages/Welcome";

interface StateType {
  auth: boolean;
}

class App extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  componentDidMount() {
    this.getAuth();
  }

  async getAuth() {
    if (await AuthUtils.getAuth()) {
      this.setState({ auth: true });
    }
  }

  render() {
    return this.state.auth ? <Player /> : <Welcome />;
  }
}

export default App;
