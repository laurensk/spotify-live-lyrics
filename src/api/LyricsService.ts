import axios from "axios";

export class LyricsService {
  public static async getLyrics(title: string, artist: string) {
    return await this.lyricsRequest(title, artist, 0);
  }

  private static async lyricsRequest(title: string, artist: string, count: number): Promise<string | null> {
    console.log("getting lyrics!");
    if (count > 4) return null;

    const headers = { Authorization: "Bearer b6fbac76-2ac3-4187-a662-7d9a3f67b346" };
    const endpoint = "https://lyrics.prod.laurensk.at/lyrics";

    try {
      const res = await axios.post(endpoint, { title: title, artist: artist }, { headers: headers });
      return res.status === 200 ? res.data : this.lyricsRequest(title, artist, count + 1);
    } catch {
      return this.lyricsRequest(title, artist, count + 1);
    }
  }
}
