import { fetchQ } from './fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGallery } from './createGallery';

export function searchImages(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputValue = form.elements.searchQuery.value;

  fetchQ(inputValue)
    .then(data => {
      const totalHits = data.totalHits;
      if (totalHits === 0) {
        return Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      Notify.success(`Hooray! We found ${totalHits} images.`);
      createGallery(data);
    })
    .catch(err => console.log(err));
}
