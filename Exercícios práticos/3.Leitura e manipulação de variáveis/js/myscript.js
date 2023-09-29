function calculadora(){
    var n1= parseInt (prompt("Digite o primeiro número: "))
    var n2= parseInt (prompt("Digite  segundo número: "))
    var op= (prompt("Digite uma das opções a seguir Adição= +, subtrair= -, multiplicação= *,Divisão=  /: "))
    console.log(n1)
    console.log(n2)

    switch(op){
        case "+":
            var resultado_da_soma = n1 + n2
            console.log(resultado_da_soma)
            break;
        case "-":
            var resultado_da_subtração = n1 - n2
    console.log(resultado_da_subtração)
    break;
        case "*":
            var resultado_da_multiplicação = n1 * n2
    console.log(resultado_da_multiplicação)
    break;
        case "/":
            var resultado_da_divisão = n1 / n2
    console.log(resultado_da_divisão)
    break;
    default:
        console.log("Opção inválida!")
    }
    return 0;
}
function mudaConstante() {
    const nome = prompt("Digite seu nome:");
    console.log("Nome:", nome);
    const novoNome = prompt("Digite um novo nome:");
    nome = novoNome;
}