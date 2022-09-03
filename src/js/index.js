import '../scss/style.scss';
import {mod} from './defineMod.js';
import {renderBrands} from './brands.js';
import {typesSwiperInit} from './types.js';
import {pricesSwiperInit} from './prices.js';
import './menu-burger.js';
import './feedback-modal.js';
import './call-modal.js';

renderBrands(mod);
if (mod === 0) {
    typesSwiperInit();
    pricesSwiperInit();
}

console.log('Works!');
