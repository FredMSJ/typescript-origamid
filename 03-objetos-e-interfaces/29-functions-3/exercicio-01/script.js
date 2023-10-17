"use strict";
function stringOrNumber(param) {
    if (typeof param === "string") {
        return `Tipo: ${typeof param} \nResult: ${Math.ceil(+param).toString()}`;
    }
    return `Tipo: ${typeof param} \nResult: ${Math.ceil(param)}`;
}
console.log(stringOrNumber(8.7));
