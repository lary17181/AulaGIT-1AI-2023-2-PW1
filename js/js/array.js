function nome(param1, param2){
    //código
    return
}

() => {}

//Função Map
//array = []
//objeto Produto = {foto, modelo, preço, qntd em estoque, nome, código}

const numeros = [5,48,65,33,12,79,8,44]
const novoNumeros = []
numeros.map( (num) => {
    novoNumeros.push(num*2)
})
console.log(numeros)
console.log(novoNumeros)


const numero= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const result= []
numero.map((par)=>{
    if(par%2===0){
        result.push(par)
    }
})
console.log(result)