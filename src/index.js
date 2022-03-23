import "./styles.css";

const root = document.querySelector(':root');

//#region header
import pngLogo from './img/logo.png';


function onClick_ImageLogo() {
    const divMainMenu = document.getElementById("main-menu");
    const divLanding = document.getElementById("landing");
    const header = document.querySelector("header");

    divLanding.classList.remove("hidden");
    header.classList.add("bg-cutlets_gray");
    divMainMenu.classList.add("hidden");

    const linkLandingMenu = document.getElementById("link-option-menu");
    linkLandingMenu.classList.remove("bg-cutlets_green");
}

const imgLogo = document.getElementById("logo-img");
imgLogo.setAttribute("src", pngLogo);

imgLogo.onclick = onClick_ImageLogo;

//#endregion header

//#region menu
import pngTitleIcon from './img/title-icon.png';

root.style.setProperty('--urlimage', "url('" + pngTitleIcon + "')");
//#endregion menu

//#region landing
import jpgLandingPic1_1 from './img/main-pics1/07J1fXvYTai8GPWFtdaK_DSC09739.jpg';
import jpgLandingPic1_2 from './img/main-pics1/22165DSC04884.jpg';
import pngLandingTextImg from './img/landing-text-img.png';
import pngEmblem from './img/emblem.png';
import jpgLandingPics2_1 from './img/main-pics2/58093DSC05149.jpg';
import jpgLandingPics2_2 from './img/main-pics2/60192DSC04942.jpg';
import jpgLandingPics2_3 from './img/main-pics2/69565DSC04782.jpg';
import jpgLandingPics2_4 from './img/main-pics2/94487DSC04897.jpg';
import jpgLandingMenuTextBefore from './img/landing-menu.jpg';
import pngLandingMenuBg from './img/landing-menu-bg.png';
import pngLandingIcons from './img/landing-icons.png';


let myIndex = 0;
carousel();

function carousel() {

    const x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();



const arrLandingPic1 = document.querySelectorAll("#landin-pics1 .mySlides");
arrLandingPic1[1].style.backgroundImage = "url('" + jpgLandingPic1_1 + "')";
arrLandingPic1[0].style.backgroundImage = "url('" + jpgLandingPic1_2 + "')";
arrLandingPic1[2].style.backgroundImage = "url('" + jpgLandingPics2_1 + "')";

const imgLandingTextImg = document.querySelector("#landing-text img");
imgLandingTextImg.setAttribute("src", pngLandingTextImg);

root.style.setProperty('--urlimage_landing_text', "url('" + pngEmblem + "')");

const arrLandingPics2 = document.querySelectorAll("#landing-pics2 .img-pics2");
arrLandingPics2[0].setAttribute("src", jpgLandingPics2_1);
arrLandingPics2[1].setAttribute("src", jpgLandingPics2_2);
arrLandingPics2[2].setAttribute("src", jpgLandingPics2_3);
arrLandingPics2[3].setAttribute("src", jpgLandingPics2_4);

root.style.setProperty('--urlimage_landing_before', "url('" + jpgLandingMenuTextBefore + "')");

const divLandingMenu = document.getElementById("landing-menu");
divLandingMenu.style.backgroundImage = "url('" + pngLandingMenuBg + "')";
divLandingMenu.style.backgroundPosition = "center top";
divLandingMenu.style.backgroundSize = "600px";

const imgLandingIcons = document.querySelector("#landing-icons img");
imgLandingIcons.setAttribute("src", pngLandingIcons);

function onClick_LinkMenuLanding() {

    const divMainMenu = document.getElementById("main-menu");
    const divLanding = document.getElementById("landing");
    const header = document.querySelector("header");

    divMainMenu.classList.remove("hidden");
    divLanding.classList.add("hidden");
    header.classList.remove("bg-cutlets_gray");

    this.classList.add("bg-cutlets_green");

}

const linkLandingMenu = document.getElementById("link-option-menu");
linkLandingMenu.onclick = onClick_LinkMenuLanding.bind(linkLandingMenu);

const btnLandingMenu = document.getElementById("btn-landin-menu");
btnLandingMenu.onclick = onClick_LinkMenuLanding.bind(linkLandingMenu);




//#endregion landing

