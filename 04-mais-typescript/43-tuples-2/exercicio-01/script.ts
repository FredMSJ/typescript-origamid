async function responseApi() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const result = await response.json();
    console.log(result);
    somarVendas(result);
}

responseApi();

interface ComplementoVendas {
    marca: string;
    cor: string; 
}

type Venda = [string, number, string, ComplementoVendas];

function somarVendas(vendas: Venda[]) {
    let soma = 0;
    // if (vendas) {
    //     vendas.forEach((el) => {
    //         soma+=el[1]
    //     })
    // }
    const total = vendas.reduce((anterior, venda) => {
        return anterior + venda[1];
    }, 0)
    
    return console.log(total);
}


