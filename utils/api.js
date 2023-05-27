import apiToken from "./apiToken";
import links from "./links";
import token from "./token";

class Api {
    constructor() {
        this._headers = {
            "Content-Type": "application/json",
            Authorization: apiToken,
        };
    }

    getUserPlaces(id) {
        return fetch(
            `${links.backend}/users/${id}?populate[places][populate]=*`,
            {
                method: "get",
                headers: this._headers,
            }
        ).then((res) => res.json());
    }

    changeProfileData(data, id) {
        return fetch(`${links.backend}/places/${id}`, {
            method: "put",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }

    addPlace(data) {
        return fetch(`${links.backend}/places`, {
            method: "post",
            headers: this._headers,
            body: JSON.stringify(data),
          }).then((res) => res.json());
    }
}

const api = new Api();

export default api;
