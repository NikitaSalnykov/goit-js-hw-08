// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


console.log(galleryItems);

const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item" >
  <a class="gallery__link" href="${photo.original}">
  <img class="gallery__image"
  src=${photo.preview} 
  data-source=${photo.original} 
  alt='${photo.description}'>
  </a>
  </li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)

let gallerySlider = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, navText: ['❮','❯']});

