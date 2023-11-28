
const ThumbnailRenderer = (function() {

  const picturesContainer = document.querySelector('.pictures');


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
  }

  return {
    renderThumbnails: renderThumbnails
  };
})();


const photos = [
  {
    url: 'photo1.jpg',
    description: 'Фотография 1',
    likes: 10,
    comments: 5
  },
  {
    url: 'photo2.jpg',
    description: 'Фотография 2',
    likes: 15,
    comments: 3
  },
  {
    url: 'photo3.jpg',
    description: 'Фотография 3',
    likes: 20,
    comments: 7
  }
];

ThumbnailRenderer.renderThumbnails(photos);
