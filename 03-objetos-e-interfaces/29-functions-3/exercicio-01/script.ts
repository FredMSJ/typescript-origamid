function stringOrNumber(param : number ): number;
function stringOrNumber(param : string): string;
function stringOrNumber(param : number | string): number | string {

    if(typeof param === "string") {
        return `Tipo: ${typeof param} \nResult: ${Math.ceil(+param).toString()}`;
    }
    return `Tipo: ${typeof param} \nResult: ${Math.ceil(param)}`;
}

console.log(stringOrNumber(8.7));