const $meuCampoItem = document.querySelector('.item__compra');
const $meuCampoQuantidade = document.querySelector('.quantidade__compra');
const $meuCampoValor = document.querySelector('.valor__compra');
const $meuBtnEnviar = document.querySelector('#envia__registro');
const $meuForm = document.querySelector('.tabela__registros');
const url = 'http://localhost:3000/produtos'
let id = 0


fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));




    //estudar fetch e tentar entender o motivo do arquivo não estar sendo recuperado