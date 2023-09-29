function Cadastrar(){
const produto={
    nome: document.getElementById("prod_name").value,
    marca: document.getElementById("prod_marca").value,
    preco: document.getElementById("prod_preco").value,
}

const lista_item = document.createElement("li")
lista_item.innerHTML+=produto.nome
lista_item.innerHTML+=produto.marca
lista_item.innerHTML+=produto.preco
document.getElementById("lista_prod").appendChild(lista_item)
console.log(lista_item)
}
