"use strict";
const elementsLink = document.querySelectorAll(".link");
function custumizeElement(elemento) {
    elemento.style.color = 'blue';
    elemento.style.border = '2px solid blue';
}
elementsLink.forEach((item) => {
    if (item instanceof HTMLElement) {
        custumizeElement(item);
    }
});
//Atenção nas interfaces dos elementos. 
