import { loadMore, searchImages } from './hendler';

const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', searchImages);
loadMoreBtn.addEventListener('click', loadMore);
