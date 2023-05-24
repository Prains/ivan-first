import links from "./links";
import token from "./token";
import apiToken from "./apiToken";

class Auth {
  constructor() {
    this._headers = {
      "Content-Type": "application/json",
      Authorization: apiToken,
    };
  }
  register(username, email, userRole, type, password) {
    return fetch(`${links.backend}/auth/local/register`, {
      method: "post",
      headers: this._headers,
      body: JSON.stringify({
        username: username,
        email: email,
        userRole: userRole,
        type: type,
        password: password,
      }),
    }).then((res) => res.json());
  }
  login(email, password) {
    return fetch(`${links.backend}/auth/local`, {
      method: "post",
      headers: this._headers,
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    }).then((res) => res.json());
  }
  checkUser() {
    const access = token.getAccessToken();
    return fetch(`${links.backend}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    }).then((res) => res.json());
  }
}

const auth = new Auth();

export default auth;
