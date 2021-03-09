import React from "react";
import { AuthUtils } from "./utils/AuthUtils";
import Player from "./pages/Player";
import Welcome from "./pages/Welcome";
import { SpotifyService } from "./api/SpotifyService";

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
    if (await AuthUtils.getToken()) {
      this.setState({ auth: true });
    } else {
      SpotifyService.onLoad();
    }
  }

  render() {
    return this.state.auth ? <Player /> : <Welcome />;
  }
}

export default App;
