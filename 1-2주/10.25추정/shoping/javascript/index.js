const menuA = [
  "gmm",
  "NEW ARRIVAL",
  "OUTER",
  "TOP",
  "DRESS",
  "BOTTOM",
  "SET",
  "ACC",
  "SALE"
];
let menu;
window.onload = function () {
    menu=document.getElementById("menu").getElementsByTagName("div");
    for(i=0; i<menuA.length; i++) {
        menu[i].innerHTML=menuA[i];
    }

};
