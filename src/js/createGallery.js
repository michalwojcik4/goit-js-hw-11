import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function createGallery(photos) {
  const hits = photos.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
            <a href="${largeImageURL}"> 
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <div class="info-item">
                    <b>Likes</b>
                    <p>${likes}</p>
                </div>
                <div class="info-item">
                    <b>Views</b>
                    <p>${views}</p>
                </div>
                <div class="info-item">
                    <b>Comments</b>
                    <p>${comments}</p>
                </div>
                <div class="info-item">
                    <b>Downloads</b>
                    <p>${downloads}</p>
                </div>
            </div>
      </div>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', hits);

  const lightbox = new SimpleLightbox('.photo-card a', { overlayOpacity: 0.8 });
  lightbox.refresh();
}
