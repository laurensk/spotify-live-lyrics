export class SongUtils {
  public static getArtists(artists: any) {
    let pretty = "";
    for (const artist of artists) pretty += artist.name + ", ";
    return pretty.substr(0, pretty.length - 2);
  }
}
