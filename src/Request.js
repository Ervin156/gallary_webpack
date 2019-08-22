import { BASE_URL, CLIENT_ID } from "./settings";

class Request {
  listPhotos(limit, page) {
    const url = `${BASE_URL}?client_id=${CLIENT_ID}&per_page${limit}&page=${page}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }
  likePhotos(photo, like) {
    const url = `${BASE_URL}${photo.id}/like/?client_id=${CLIENT_ID}`;

    return fetch(url, {
      method: "POST",      
    }).then(response => {
      return response.json();
    });
  }
}

export default new Request()
