let $campoItem = document.querySelector('.item__compra');
let $campoQuantidade = document.querySelector('.quantidade__compra');
let $btnEnviar = document.querySelector('#envia__registro');

$btnEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log($campoItem.value, $campoQuantidade.value);
})


