let $campoItem = document.querySelector('.item__compra');
let $campoQuantidade = document.querySelector('.quantidade__compra');
let $campoValor = document.querySelector('.valor__compra');
let $btnEnviar = document.querySelector('#envia__registro');
let $form = document.querySelector('.tabela__registros');
let listaDeCompras = [];

$btnEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    $form.insertAdjacentHTML('beforeend', `

    <tr class="border border-black">

        <td class="text-center border border-black"> <input type="checkbox"> </td>
        <td class="text-center border border-black"> ${$campoItem.value}   </td>
        <td class="text-center border border-black "> ${$campoQuantidade.value}   </td>
        <td class="text-center border border-black"> ${$campoQuantidade.value * $campoValor.value} €   </td>
        <td class="text-center border border-black"> <button class="botaoDeleta bg-red-700 w-5 rounded-md text-white"> X </button> </td>
</tr>  `);

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
