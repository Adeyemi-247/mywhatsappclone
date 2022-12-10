const myMenuBar = document.querySelector(".demmenu");
const disMenuBar = document.querySelector(".menubars");
const deNav = document.querySelector("nav");
const btnMenu1 = document.querySelector(".menubnt1");
const btnMenu2 = document.querySelector(".menubnt2");
const btnMenu3 = document.querySelector(".menubnt3");
const btnMenu4 = document.querySelector(".menubnt4");
const btnMenu5 = document.querySelector(".menubnt5");
const topChat = document.querySelector(".chaty");
const topCamera = document.querySelector(".camera");
const myBody = document.querySelector("body");
const contatList = document.querySelector(".contactlist");
const myChats = document.querySelector(".chats");
const searchButton = document.querySelector(".searchy");
const inputSearch = document.querySelector(".search");
const backSearch = document.querySelector(".baksarch");
const myHeader = document.querySelector("header");
const clickSettings = document.querySelector(".slotting");
const mySettings = document.querySelector(".settles");
const inSettings = document.querySelector(".arrangeset");
const eachChats = document.querySelector(".chats3");
const arnmyDm = document.querySelector(".dmback");
const dmMessages = document.querySelector(".dmessage");
const indmMessages = document.querySelector(".intexits");
const inputFields = document.querySelector(".deinputs");
const voiceCall = document.querySelector(".mics");
const sendText = document.querySelector(".seanns");
const inTextsis = document.querySelector(".intexits2");








myMenuBar.onclick = function (){
    disMenuBar.style.transform = "translateX(0)";
}

deNav.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";
}

btnMenu1.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";

}

btnMenu2.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";
}

btnMenu3.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";
}

btnMenu4.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";
}



// WHATSAPP SETTINGS
btnMenu5.onclick = function (){
    disMenuBar.style.transform = "translateX(110%)";
    mySettings.style.display = "block";
    inSettings.style.display = "block";
    deNav.style.display = "none";
    myChats.style.display = "none";
    myHeader.style.display = "none";
    contatList.style.display = "none";
    dmMessages.style.display = "none";
    indmMessages.style.display = "none";
}

clickSettings.onclick = function (){
    deNav.style.display = "block";
    deNav.style. alignItems = "flex-end";
    deNav.style. justifyContent = "end";
    myChats.style.display = "block";
    myHeader.style.display = "block";
    contatList.style.display = "block";
    mySettings.style.display = "none";
    inSettings.style.display = "none";
    

}

topChat.onclick = function (){
    myChats.style.display = "block";
    contatList.style.display = "block";
}
topCamera.onclick = function (){
    myChats.style.display = "none";
    contatList.style.display = "none";
}

myBody.onload = function (){
    myChats.style.display = "block";
}

searchButton.onclick = function (){
    inputSearch.style.transform = "translateX(0)";
    // deNav.style.marginTop = "4rem"
}
backSearch.onclick = function (){
    inputSearch.style.transform = "translateX(110%)";
    // deNav.style.marginTop = "0"
}

myBody.onscroll = function (){
    inputSearch.style.transform = "translateX(110%)";
    // deNav.style.marginTop = "0"
}

// WHATSAPP DM
eachChats.onclick = function (){
    dmMessages.style.display = "block";
    indmMessages.style.display = "block";
    myHeader.style.display = "none";
    deNav.style.display = "none";
    myChats.style.display = "none";
    contatList.style.display = "none";
    // inTextsis.style.scroll = "hidden";
}
arnmyDm.onclick = function (){
    myHeader.style.display = "block";
    deNav.style.display = "block";
    myChats.style.display = "block";
}

inputFields.onclick = function (){
    voiceCall.style.display = "none";
    sendText.style.display = "block";
}
sendText.onclick = function (){
    voiceCall.style.display = "block";
    sendText.style.display = "none";
}