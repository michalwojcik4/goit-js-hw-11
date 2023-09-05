import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAPI = '39269342-bb9295fafabc2f42da640db69';

export function fetchQ(inputValue) {
  const searchParams = new URLSearchParams({
    key: keyAPI,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios
    .get(`?${searchParams}`)
    .then(result => {
      return result.data;
    })
    .catch(err => console.log(err));
}
