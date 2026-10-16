//parte do catálogo
const catalogoBackstore = [
    { 
        id: 1, 
        nome: "Titan Smiler - 15cm", 
        preco: 15.50, 
        estoque: 42, 
        descricao: "Pelúcia assustadora de um titã sorridente." 
    },
]

//parte do carrinho
let carrinho = []

function adicionarAoCarrinho(idDesejado) {
    let produtoEncontrado = null

    //passa pelos produtos para achar o certo
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === idDesejado) {    
            produtoEncontrado = produtos[i]
        }
    }

    //se achar, coloca ele no array do carrinho
    if (produtoEncontrado !== null) {
        carrinho.push(produtoEncontrado)
        console.log(produtoEncontrado.nome + "foi adicionado à mochila!")
    }else {
        console.log("Produto não existe.")
    }

}