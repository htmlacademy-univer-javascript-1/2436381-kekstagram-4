import {openModal, closeModal, thumbnail, closeButton, escape} from "./picture.js";

const ThumbnailRenderer = (function() {

  const picturesContainer = document.querySelector('.pictures');
  const commentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  let loadedComments = 5;

  function createThumbnail(photo) {

    const pictureElement = document.createElement('a');
    const imgElement = document.createElement('img');
    const likesElement = document.createElement('span');
    const commentsElement = document.createElement('span');

    imgElement.src = photo.url;
    imgElement.alt = photo.description;
    likesElement.textContent = photo.likes;
    commentsElement.textContent = photo.comments;

    pictureElement.classList.add('picture');
    imgElement.classList.add('picture__img');
    likesElement.classList.add('picture__likes');
    commentsElement.classList.add('picture__comments');

    pictureElement.appendChild(imgElement);
    pictureElement.appendChild(likesElement);
    pictureElement.appendChild(commentsElement);

    return pictureElement;
  }

  function renderThumbnails(photos) {

    const fragment = document.createDocumentFragment();

    photos.forEach(function(photo) {
      const thumbnail = createThumbnail(photo);
      fragment.appendChild(thumbnail);
    });

    picturesContainer.innerHTML = '';

    picturesContainer.appendChild(fragment);

    commentCount.textContent = '5' + ' из ' + photos[0].comments;

    if (photos[0].comments > 5) {
      commentsLoader.classList.remove('hidden');
    }
  }

  function loadMoreComments() {
    const comments = document.querySelectorAll('.social__comment');

    for (let i = loadedComments; i < loadedComments + 5; i++) {
      if (comments[i]) {
        comments[i].classList.remove('hidden');
      } else {
        commentsLoader.classList.add('hidden');
        break;
      }
    }

    loadedComments += 5;
    commentCount.textContent = loadedComments + ' из ' + photos[0].comments;
  }

  function setupEventListeners() {
    commentsLoader.addEventListener('click', loadMoreComments);
  }

  return {
    renderThumbnails: renderThumbnails,
    setupEventListeners: setupEventListeners
  };
})();


const photos = [
  {
    url: 'photo1.jpg',
    description: 'Фотография 1',
    likes: 10,
    comments: 12
  },
  {
    url: 'photo2.jpg',
    description: 'Фотография 2',
    likes: 15,
    comments: 8
  },
  {
    url: 'photo3.jpg',
    description: 'Фотография 3',
    likes: 20,
    comments: 20
  }
];

ThumbnailRenderer.renderThumbnails(photos);
ThumbnailRenderer.setupEventListeners();
