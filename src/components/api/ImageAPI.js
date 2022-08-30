import axios from 'axios';
const KEY = '28394291-ce42361a1eeba82eae067226a';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(name, page, perPage) {
  return await axios
    .get(
      `?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    )
    .then(response => response.data);
}
