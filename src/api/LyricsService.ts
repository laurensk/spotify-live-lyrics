import { getLyrics } from "genius-lyrics-api";

export class LyricsService {
  public static getLyrics(title: string, artist: string, callback: Function) {
    const options = {
      apiKey: "g7JzjyslNgesF23kdiRhZH9hsG9GjaTHHgil5qwq1-sUImsNwNLFjRyuokwv9bcy",
      title: title,
      artist: artist,
      optimizeQuery: true,
    };

    getLyrics(options).then((lyrics: any) => callback(lyrics));
  }
}
