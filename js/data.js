import { generateRandomIndex, generateRandomNumber } from "./util.js";

function generateRandomSentence() {
  const sentences = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return sentences[generateRandomIndex(sentences)];
}

function generateRandomAvatar() {
  const avatarIndex = generateRandomNumber(1, 6);
  return `img/avatar-${avatarIndex}.svg`;
}

function generateRandomComment() {
  return {
    id: generateRandomNumber(1, 1000),
    avatar: generateRandomAvatar(),
    message: generateRandomSentence(),
    name: generateRandomName()
  };
}

function generateRandomComments() {
  const commentsCount = generateRandomNumber(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(generateRandomComment());
  }
  return comments;
}

function generateRandomName() {
  const names = [
    'Влад',
    'Дмитрий',
    'Елена',
    'Мария',
    'Николай',
    'Ольга',
    'Павел',
    'Светлана'
  ];
  return names[generateRandomIndex(names)];
}

function generateRandomPhoto() {
  const id = generateRandomNumber(1, 25);
  const url = `photos/${id}.jpg`;
  const description = generateRandomSentence();
  const likes = generateRandomNumber(15, 200);
  const comments = generateRandomComments();

  return {
    id,
    url,
    description,
    likes,
    comments
  };
}

function generatePhotosArray() {
  const photos = [];
  for (let i = 0; i < 25; i++) {
    photos.push(generateRandomPhoto());
  }
  return photos;
}

const photosArray = generatePhotosArray();

export {photosArray}
