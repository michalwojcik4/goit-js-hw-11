import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAPI = '39269342-bb9295fafabc2f42da640db69';

export async function fetchQ(inputValue, page) {
  try {
    const searchParams = new URLSearchParams({
      key: keyAPI,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: page,
    });
    const result = await axios.get(`?${searchParams}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
