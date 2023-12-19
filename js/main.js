import {data} from './data.js';
import {renderPictures} from './picture.js';
import './forms.js';
import './tagsPristine.js';
import {initEffects} from './actions.js';

renderPictures(data);
initEffects();
