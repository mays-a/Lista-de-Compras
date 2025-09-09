const mensagemListaVazia = document.querySelectorAll('mensagem-lista-vazia');

function verificarListaVazia(listaDeCompras){
    //Seleciona todos os elementos <li> da lista de compras e retorna um array
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    //Se nn houver nenhum <li> na lista (lista vazia)
    if (itensDaLista.length === 0){
        //exibe mensagem de lista vazia
        mensagemListaVazia.style.display = 'block';
    }else {
        // 'none' Esconde a mensagem
        mensagemListaVazia.style.display = 'none';
    }
}

//Exporta a fuhnção para ser usada em outro arquivo js
export default verificarListaVazia;

