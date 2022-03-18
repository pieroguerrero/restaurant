import "./styles.css";
import pngLogo from './img/logo.png';
import pngTitleIcon from './img/title-icon.png';

//const divImg = document.getElementById("div-img");
//divImg.setAttribute("style", "background-image: url('" + pngTitleIcon + "')");

const imgLogo = document.querySelector("#logo input[type='image']");
imgLogo.setAttribute("src", pngLogo);

//const imgTitleIcon = document.querySelector("#main-menu .title");

//imgTitleIcon.classList.add("before:content-[url('" + pngTitleIcon + "')]", "before:h-[70px]", "before:w-[100px]");

const root = document.querySelector(':root');
root.style.setProperty('--urlimage', "url('" + pngTitleIcon + "')");

//imgTitleIcon.classList.add("before:content-['HelloWorld!']");

//before:content-[attr(before)]

