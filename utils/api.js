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

    getUserBooks(id) {
        return fetch(
            `${links.backend}/users/${id}?populate[0]=books&populate[1]=books.book&populate[2]=books.places&populate[3]=books.places.photos&populate[4]=books.owners`, 
            {
                method: "get",
                headers: this._headers,
            }
        ).then((res) => res.json());
    }

    getUserPlaces(id) {
        return fetch(
            `${links.backend}/users/${id}?populate[0]=places&populate[1]=places.books&populate[2]=places.photos&populate[3]=places.books.book&populate[4]=places.books.owner`, 
            {
                method: "get",
                headers: this._headers,
            }
        ).then((res) => res.json());
    }

    changePlaceData(data, id) {
        return fetch(`${links.backend}/places/${id}`, {
            method: "put",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }

    changeBookData(data, id) {
        return fetch(`${links.backend}/books/${id}`, {
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
