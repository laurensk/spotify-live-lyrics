export class AuthUtils {
  public static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  public static getToken() {
    const token = localStorage.getItem("token");
    return token ? token : null;
  }

  public static removeToken() {
    return localStorage.removeItem("token");
  }

  public static reload() {
    window.location.reload();
  }
}
