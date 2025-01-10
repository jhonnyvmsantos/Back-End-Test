import data from './data/dados.json' with {type: "json"}

console.log("PRIMEIRO TESTE")

function first() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    console.log(soma)
}

first();

console.log("--------------------------------------------------------------------------------");

console.log("SEGUNDO TESTE")

function second(n) {
    let arr = [0, 1]

    while (arr[arr.length - 1] < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    if (arr.includes(n)) {
        console.log(`Número (${n}) incluso na sequência Fibonacci`)
    } else {
        console.log(`Número (${n}) NÃO incluso na sequência Fibonacci`)
    }
}

second(144);

console.log("--------------------------------------------------------------------------------");

console.log("TERCEIRO TESTE")

function third() {
    let values = [];
    let media = 0;
    let days = 0;

    data.forEach(element => {
        values.push(element.valor);
        media += element.valor;
    });

    media /= values.length;

    console.log(`Valor Mínimo obtido no mês: ${Math.min(...values)}`);
    console.log(`Valor Máximo obtido no mês: ${Math.max(...values)}`);
    console.log(`Média mensal dos valores diários: ${media}`)

    values.forEach(element => {
        if (element > media) {
            days++;
        }
    });

    console.log(`Número de Dias com faturamento diário maior que à média mensal: ${days}`)
}

third();

console.log("--------------------------------------------------------------------------------");

console.log("QUARTO TESTE")

function four() {
    let total = 0;
    const dt = [
        {
            estado: "SP",
            valor: 67836.43
        },
        {
            estado: "RJ",
            valor: 36678.66
        },
        {
            estado: "MG",
            valor: 29229.88
        },
        {
            estado: "ES",
            valor: 27165.48
        },
        {
            estado: "Outros",
            valor: 19849.53
        },
    ]

    dt.forEach(element => {
        total += element.valor;
    });

    dt.forEach(element => {
        console.log(`${element.estado}: ${(element.valor / total) * 100}%`);
    });
}

four();

console.log("--------------------------------------------------------------------------------");

console.log("QUINTO TESTE")

function five() {
    let str = "Testando o código em desenvolvimento."
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    console.log(reverse)
}

five();