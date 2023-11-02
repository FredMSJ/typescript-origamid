"use strict";
async function responseApi() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const result = await response.json();
    console.log(result);
    somarVendas(result);
}
responseApi();
function somarVendas(vendas) {
    let soma = 0;
    // if (vendas) {
    //     vendas.forEach((el) => {
    //         soma+=el[1]
    //     })
    // }
    const total = vendas.reduce((anterior, venda) => {
        return anterior + venda[1];
    }, 0);
    return console.log(total);
}
