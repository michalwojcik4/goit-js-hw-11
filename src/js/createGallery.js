const gallery = document.querySelector('.gallery');

export function createGallery(photos) {
  gallery.innerHTML = '';
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
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <p>${likes}</p>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <p>${views}</p>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <p>${comments}</p>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <p>${downloads}</p>
                </p>
            </div>
      </div>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', hits);
};
