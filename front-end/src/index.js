let $campoItem = document.querySelector('.item__compra');
let $campoQuantidade = document.querySelector('.quantidade__compra');
let $campoValor = document.querySelector('.valor__compra');
let $btnEnviar = document.querySelector('#envia__registro');
let $form = document.querySelector('.tabela__registros');
let listaDeCompras = [];

$btnEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    $form.insertAdjacentHTML('beforeend', `
    <tr>
                <td> ${listaDeCompras.length} </td>
                <td> ${$campoItem.value}  </td>
                <td> ${$campoQuantidade.value}  </td>
                <td> ${$campoValor.value}  </td>
                <td> <button class="botaoDeleta"> X </button> </td>
            </tr>
    `);
    (function incrementaArray() {
        let item = {
            item: $campoItem.value,
            quantidade: $campoQuantidade.value,
            valor: Number($campoValor.value)
        };
        listaDeCompras.push(item);
        console.log(listaDeCompras)
    })();
    (function limpaCampos() {
        $campoItem.value = '';
        $campoQuantidade.value = '';
        $campoValor.value = '';
    })();
})
