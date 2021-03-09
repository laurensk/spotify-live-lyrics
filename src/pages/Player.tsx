import React from "react";
import { SpotifyService } from "../api/SpotifyService";
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import LargeText from "../components/LargeText";

interface StateType {
  song: any | undefined;
}

class Player extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      song: null,
    };
  }

  componentDidMount() {
    this.getCurrentSong();
  }

  async getCurrentSong() {
    const song = await SpotifyService.getCurrentSong();
    if (song) {
      this.setState({ song: song });
    }
  }

  render() {
    return (
      <Container>
        <Header title={this.state.song ? this.state.song.item.name : "It's silent..."} />
        {/* <LargeText text="Welcome to Spotify Live Lyrics." />
        <br />
        <LargeText
          text={
            "To get stared, you need to log in with your Spotify account in order to let the application know, which song you're currently listening to. No, worries, we never log or save this data."
          }
        />
        <br />
        <LargeText text="In fact, this project is open-sourced and the code can be seen on GitHub." />
        <br />
        <LargeText fontWeight={"600"} text="To get started with Spotify Live Lyrics, please log in!" />
        <br />
        <CustomButton title="Log in with Spotify" onClick={() => this.login()} /> */}
      </Container>
    );
  }
}

export default Player;
