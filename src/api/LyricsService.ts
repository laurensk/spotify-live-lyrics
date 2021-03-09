import axios from "axios";
import { getLyrics } from "genius-lyrics-api";

export class LyricsService {
  public static getLyrics(title: string, artist: string, callback: Function) {
    const options = {
      apiKey: "jklIWOS5zp1xoyszijpeb_nuZbJ4eWXwByqaSemhq9TNJG2SuN3qgCXXN5UKcASH",
      title: title,
      artist: artist,
      optimizeQuery: true,
    };

    callback("...");

    //getLyrics(options).then((lyrics: any) => callback(lyrics));
  }
}
