import axios from "axios";
import { AuthUtils } from "../utils/AuthUtils";

export class SpotifyService {
  public static async onLoad() {
    const token = this.getTokenFromUrl();
    console.log(token);
    if (token) {
      AuthUtils.setToken(token.toString());
      AuthUtils.reload();
    }
  }

  private static getTokenFromUrl() {
    const href = window.location.href;
    const container = href.split("access_token=");
    if (container.length < 2) return false;
    const token = container[1].split("&");
    if (token.length < 1) return false;
    return token[0];
  }

  public static login() {
    const authEndpoint = "https://accounts.spotify.com/authorize";

    const scopes = ["user-read-currently-playing"];

    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;

    window.open(href, "_self");
  }

  public static async getCurrentSong() {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: "Bearer " + AuthUtils.getToken() },
      });
      return res.data;
    } catch (e) {
      if (e.response.status) {
        if (e.response.status === 401) {
          AuthUtils.removeToken();
          AuthUtils.reload();
        }
      }
    }
  }
}
