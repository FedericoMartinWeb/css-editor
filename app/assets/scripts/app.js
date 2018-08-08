import Main from './modules/Main';
import CloseAside from './modules/CloseAside';
import Items from './modules/Items';
import UploadImage from './modules/UploadImage';
import CssGene from './modules/CssGene';
import Reset from './modules/Reset';
import Switch from './modules/Switch';
import Sliderui from './modules/Sliderui';
import ClipboardJS from 'clipboard';

var close = new CloseAside();
var item = new Items();
var image = new UploadImage();
var main = new Main();
var cssgene = new CssGene();
var slider = new Sliderui();
var switchit = new Switch();
var reset = new Reset();
var copy = new ClipboardJS('.center--modal__copy');