const BASE_URL = 'https://api.thecatapi.com/v1/';
const api_key =
  'api_key=live_jZ0nu5n8S6VnwCRIqQbou78F73kuP0K8ypzeCvwyDJXNFhtU9EdT8X7Gy3mw67V0';

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}&${api_key}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}