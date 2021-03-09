import React from "react";
import { LyricsService } from "../api/LyricsService";
import { SpotifyService } from "../api/SpotifyService";
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import LargeText from "../components/LargeText";
import { SongUtils } from "../utils/SongUtils";

interface StateType {
  song: any | undefined;
  lyrics: any | undefined;
}

class Player extends React.Component<any, StateType> {
  updateInterval: any;

  constructor(props: any) {
    super(props);
    this.state = {
      song: null,
      lyrics: null,
    };
  }

  componentDidMount() {
    this.getCurrentSong();
    this.updateInterval = setInterval(() => this.getCurrentSong(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  async getCurrentSong() {
    const lastSong = this.state.song;
    const song = await SpotifyService.getCurrentSong();
    if (song) {
      this.setState({ song: song });

      if (lastSong == null || lastSong.item.name != song.item.name) {
        LyricsService.getLyrics(
          this.state.song.item.name,
          SongUtils.getArtists(this.state.song.item.artists),
          (lyrics: string) => {
            if (lyrics) this.setState({ lyrics: lyrics });
          }
        );
      }
    } else {
      this.setState({ song: null });
    }
  }

  render() {
    return (
      <Container>
        <Header title={this.state.song ? this.state.song.item.name : "It's silent..."} />
        {this.state.song && (
          <div style={{ marginTop: -15 }}>
            <LargeText text={SongUtils.getArtists(this.state.song.item.artists)} />
            <br />
            <LargeText text={this.state.lyrics} />
          </div>
        )}
      </Container>
    );
  }
}

export default Player;
