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
    if (window.location.href.split("#").length <= 2) window.location.href = window.location.href.split("#")[0];
    setTimeout(() => window.location.reload(), 10);
  }
}
