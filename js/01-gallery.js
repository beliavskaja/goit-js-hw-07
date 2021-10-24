import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createItem = galleryItems
  .map(
    (el, index) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}"> 
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      data-index="${index}"
      alt="${el.description}"
    />
  </a>
</div>`,
  )
  .join('');
galleryRef.insertAdjacentHTML('beforeend', createItem);

document.addEventListener('click', function(event) {
  if (event.target.matches('a[href], a[href] *')) {
      event.preventDefault();
      const image = event.target.getAttribute("data-source");
      const instance = basicLightbox.create(`<img src=${image} width=“800" height=“600”>`);
      instance.show();
  }
}, false);


