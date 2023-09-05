import {searchImages} from "./hendler"

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', searchImages);