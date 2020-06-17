//Desafio 1-2
//Ex 2 Vetores

const progamador = {
    nome: "Daniel",
    idade: 26,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ]
}

console.log (`O progamador ${progamador.nome} tem ${progamador.idade} anos e usa as tecnologias ${progamador.tecnologias[0].nome} com especialidade em ${progamador.tecnologias[0].especialidade}, ${progamador.tecnologias[1].nome} com especialidade em ${progamador.tecnologias[1].especialidade} e ${progamador.tecnologias[2].nome} com especialidade em ${progamador.tecnologias[2].especialidade}`)