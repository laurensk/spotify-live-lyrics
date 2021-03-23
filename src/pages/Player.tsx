import React from "react";
import { Helmet } from "react-helmet";
import { LyricsService } from "../api/LyricsService";
import { SpotifyService } from "../api/SpotifyService";
import cover from "../assets/cover.png";
import Container from "../components/Container";
import { SongUtils } from "../utils/SongUtils";
import "./Player.css";

interface StateType {
  song: any | null;
  lyrics: any | null;
  image: string | null;
}

class Player extends React.Component<any, StateType> {
  updateInterval: any;

  constructor(props: any) {
    super(props);
    this.state = {
      song: null,
      lyrics: null,
      image: null,
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

      try {
        this.setState({ image: song.item.album.images[0].url });
      } catch {
        this.setState({ image: null });
      }

      if (lastSong == null || lastSong.item.name !== song.item.name) {
        this.setState({ lyrics: "\nLoading lyrics..." });
        const lyrics = await LyricsService.getLyrics(
          this.state.song.item.name,
          SongUtils.getArtists(this.state.song.item.artists)
        );
        if (lyrics) this.setState({ lyrics: "\n" + lyrics.trim() });
        else this.setState({ lyrics: "\nError loading lyrics..." });
      }
    } else {
      this.setState({ song: null });
    }
  }

  openLyrics() {
    window.open(
      LyricsService.openLyrics(this.state.song.item.name, SongUtils.getArtists(this.state.song.item.artists)),
      "_blank"
    );
  }

  render() {
    return (
      <div className="sll-player-background">
        <Helmet>
          <style>{`body {${
            this.state.image
              ? `background-color: initial; background-image: url(${this.state.image}), linear-gradient(rgba(24,24,24,0.5),rgba(24,24,24,0.5));`
              : ""
          }}`}</style>
        </Helmet>
        <Container>
          {!this.state.song && (
            <div>
              <p>its silent</p>
            </div>
          )}

          {this.state.song && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="sll-player-meta">
                <img
                  className="sll-player-cover"
                  src={this.state.image ?? cover}
                  alt={SongUtils.getArtists(this.state.song.item.artists) + " - " + this.state.song.item.name}
                />
                <div className="sll-player-song">
                  <p className="sll-player-title">{this.state.song.item.name}</p>
                  <p className="sll-player-artist">{SongUtils.getArtists(this.state.song.item.artists)}</p>
                </div>
              </div>
              <div className="sll-player-lyrics">{this.state.lyrics}</div>
            </div>
          )}

          {/* <Header title={this.state.song ? this.state.song.item.name : "It's silent..."} />
          {this.state.song && (
            <div style={{ marginTop: -15 }}>
              <LargeText text={SongUtils.getArtists(this.state.song.item.artists)} />
              <br />
              <LargeText text={this.state.lyrics} />
              <CustomButton
                style={{ marginTop: 40, marginBottom: 70 }}
                title="Open Lyrics on Genius"
                onClick={() => this.openLyrics()}
              />
            </div>
          )} */}
        </Container>
      </div>
    );
  }

  // render() {
  //   return (
  //     <Container>
  //       <Header title={this.state.song ? this.state.song.item.name : "It's silent..."} />
  //       {this.state.song && (
  //         <div style={{ marginTop: -15 }}>
  //           <LargeText text={SongUtils.getArtists(this.state.song.item.artists)} />
  //           <br />
  //           <LargeText text={this.state.lyrics} />
  //           <CustomButton
  //             style={{ marginTop: 40, marginBottom: 70 }}
  //             title="Open Lyrics on Genius"
  //             onClick={() => this.openLyrics()}
  //           />
  //         </div>
  //       )}
  //     </Container>
  //   );
  // }
}

export default Player;
