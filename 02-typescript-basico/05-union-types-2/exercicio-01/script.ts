

function toNumber (parametro: number | string) {
    if (typeof parametro !== "number" && typeof parametro !== "string") {
        throw ("value deve ser um número ou uma string");
    }
    if(typeof parametro === "string") {
        return Number(parametro);
    }

    return parametro;
}


console.log(toNumber(300)); //Passando 'True' dará um erro esperado.