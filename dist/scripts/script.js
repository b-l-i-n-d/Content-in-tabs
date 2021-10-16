const cntHtml = document.getElementById("cnt-html");
const cntCss = document.getElementById("cnt-css");
const cntJs = document.getElementById("cnt-js");
const cntNodejs = document.getElementById("cnt-nodejs");
const cntReact = document.getElementById("cnt-react");


const btnHtml = document.getElementById("btn-html");
const btnCss = document.getElementById("btn-css");
const btnJs = document.getElementById("btn-js");
const btnNodejs = document.getElementById("btn-nodejs");
const btnReact = document.getElementById("btn-react");


function openHtml() {
    cntHtml.style.transform = "translateX(0)";
    cntCss.style.transform = "translateX(100%)";
    cntJs.style.transform = "translateX(100%)";
    cntNodejs.style.transform = "translateX(100%)";
    cntReact.style.transform = "translateX(100%)";
    btnHtml.style.color = "#4f46e5";
    btnCss.style.color = "#000000";
    btnJs.style.color = "#000000";
    btnNodejs.style.color = "#000000";
    btnReact.style.color = "#000000";

}

function openCss() {
    cntHtml.style.transform = "translateX(100%)";
    cntCss.style.transform = "translateX(0)";
    cntJs.style.transform = "translateX(100%)";
    cntNodejs.style.transform = "translateX(100%)";
    cntReact.style.transform = "translateX(100%)";
    btnHtml.style.color = "#000000";
    btnCss.style.color = "#4f46e5";
    btnJs.style.color = "#000000";
    btnNodejs.style.color = "#000000";
    btnReact.style.color = "#000000";
}

function openJs() {
    cntHtml.style.transform = "translateX(100%)";
    cntCss.style.transform = "translateX(100%)";
    cntJs.style.transform = "translateX(0)";
    cntNodejs.style.transform = "translateX(100%)";
    cntReact.style.transform = "translateX(100%)";
    btnHtml.style.color = "#000000";
    btnCss.style.color = "#000000";
    btnJs.style.color = "#4f46e5";
    btnNodejs.style.color = "#000000";
    btnReact.style.color = "#000000";
}

function openNodejs() {
    cntHtml.style.transform = "translateX(100%)";
    cntCss.style.transform = "translateX(100%)";
    cntJs.style.transform = "translateX(100%)";
    cntNodejs.style.transform = "translateX(0)";
    cntReact.style.transform = "translateX(100%)";
    btnHtml.style.color = "#000000";
    btnCss.style.color = "#000000";
    btnJs.style.color = "#000000";
    btnNodejs.style.color = "#4f46e5";
    btnReact.style.color = "#000000";
}

function openReact() {
    cntHtml.style.transform = "translateX(100%)";
    cntCss.style.transform = "translateX(100%)";
    cntJs.style.transform = "translateX(100%)";
    cntNodejs.style.transform = "translateX(100%)";
    cntReact.style.transform = "translateX(0)";
    btnHtml.style.color = "#000000";
    btnCss.style.color = "#000000";
    btnJs.style.color = "#000000";
    btnNodejs.style.color = "#000000";
    btnReact.style.color = "#4f46e5";
}