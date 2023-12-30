import axios from 'axios';

async function getPhotos(page, per_page) {
      axios.defaults.params;
      const data = await axios.get(`/query?page=${page}&per_page=${per_page}`);
      return data;
}

export default getPhotos;