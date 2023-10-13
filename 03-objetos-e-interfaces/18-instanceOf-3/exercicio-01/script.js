"use strict";
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    console.dir(link);
    link.href = link.href.replace("http", "https");
}
