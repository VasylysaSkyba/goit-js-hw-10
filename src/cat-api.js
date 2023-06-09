const API_KEY = 'live_EI3cmmLlX97Ue6lIZjEaZs1oJM7RDGN0zVkR6Rni7zXEE4axn5JxeOpFNQ7NjMzl';
const BASE_URL = 'https://api.thecatapi.com/v1';

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