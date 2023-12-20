const SHOW_TIME = 5000;

import {loadData} from './fetch.js';
import {showAlert} from './util.js';
import {renderPictures} from './picture.js';
import './forms.js';
import './tagsPristine.js';
import {initEffects} from './actions.js';
import './strainer.js';
import './ownPhotos.js';

initEffects();
let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  showAlert('Ошибка загрузки', SHOW_TIME);
};

loadData(onSuccess, onFail);

export {photos};

