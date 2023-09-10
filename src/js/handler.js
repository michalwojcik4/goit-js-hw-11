import { fetchQ } from './fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGallery } from './createGallery';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const { searchQuery } = searchForm.elements;
let page = 1;
let limit = 40;

export async function searchImages(e) {
  try {
    e.preventDefault();
    gallery.innerHTML = '';
    const data = await fetchQ(searchQuery.value, page);
    const totalHits = data.totalHits;
    if (totalHits === 0) {
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    Notify.success(`Hooray! We found ${totalHits} images.`);
    await createGallery(data);
    if (limit <= totalHits) {
      loadMoreBtn.style.display = 'block';
    }
  } catch (err) {
    console.log(err);
  }
}

export async function loadMore() {
  try {
    page += 1;
    limit += 40;
    const data = await fetchQ(searchQuery.value, page);
    if (limit > data.totalHits) {
      loadMoreBtn.style.display = 'none';
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
    await createGallery(data);
  } catch (err) {
    console.log(err);
  }
}
