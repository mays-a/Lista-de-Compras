import gerarDiaDaSemana from "./GerarDiaDaSemana.js"
import verificarListaVazia from "./VerificarListaVazia.js";

export const inputItem = document.getElementById('input-item');
let contador = 0;
export function criarItemDaLista(){
    if (inputItem.value === '') {
        alert("Por favor, insira um item!");
        return;    
    }
    const itemDaLista= document.createElement('li')
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
    const nomeItem = document.createElement("p")

    //Cria um checkbox para o item da lista
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox"; //define tipo do input como checkbox
    inputCheckBox.id = "checkbox-" + contador++ //define id unico para checkbox
    containerItemDaLista.appendChild(inputCheckBox);
    
    nomeItem.innerText = inputItem.value;

    
    //Botão Excluir
    const botao = document.createElement("button");
    botao.classList.add('botao-excluir');
    
    //Cria um elemento "icone"
    const iconeExcluir = document.createElement('i');
    iconeExcluir.className = 'bi bi-trash3';
    
    //add uma 'mãozinha' com a sobreposicao do mouse
    botao.style.cursor = 'pointer';
    
    //add o botão e o ícone excluir dentro do container da...
    containerItemDaLista.appendChild(botao);
    //Add o icone dentro do botão
    botao.appendChild(iconeExcluir);

    botao.addEventListener('click', function (){
        const confirmacao = confirm('Deseja realmente deletar esse item?');

        if(confirmacao){
            itemDaLista.remove();
            alert('Item deletado');
            verificarListaVazia(listaDeCompras);
        }
    });

    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    //Botão Editar
    const botao2=document.createElement("button")
      botao2.classList.add("botao-editar")

      const iconeEditar= document.createElement("i");
      iconeEditar.className = "bi bi-pencil-square";
     botao2.style.cursor="pointer";
      containerItemDaLista.appendChild(botao2);
      botao2.appendChild(iconeEditar)
       botao2.addEventListener("click", function(){
        const inputEdicao = document.createElement("input");
  inputEdicao.type = "text";
  inputEdicao.value = nomeItem.innerText;
  inputEdicao.classList.add("input-edicao");
  // Substitui o <p> pelo input
  containerItemDaLista.replaceChild(inputEdicao, nomeItem);
  inputEdicao.focus();
  function salvarEdicao() {
    if (inputEdicao.value.trim() === "") {
      alert("O item não pode ficar vazio!");
      inputEdicao.focus();
      return;
    }
    nomeItem.innerText = inputEdicao.value;
    containerItemDaLista.replaceChild(nomeItem, inputEdicao);
  }
  // Salvar ao perder o foco
  
  inputEdicao.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      salvarEdicao();
    }
  });
});
    //---------

    //gerar dia da semana
    const dataCompleta = gerarDiaDaSemana();
    //<p>
    const itemData = document.createElement('p');
    itemData.innerText= dataCompleta;
    itemData.classList.add('texto-data');

    itemDaLista.appendChild(itemData);
    
    return itemDaLista;
}




