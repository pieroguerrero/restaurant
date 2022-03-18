import "./styles.css";
import pngLogo from './img/logo.png';
import pngTitleIcon from './img/title-icon.png';

const imgLogo = document.querySelector("#logo input[type='image']");
imgLogo.setAttribute("src", pngLogo);

const root = document.querySelector(':root');
root.style.setProperty('--urlimage', "url('" + pngTitleIcon + "')");

