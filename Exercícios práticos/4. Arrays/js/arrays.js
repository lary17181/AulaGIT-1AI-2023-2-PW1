function manipulaArrays(){
    function manipulaArrays() {
        var cores = [
          'branco', 'azul', 'vermelho', 'verde', 'preto', 'amarelo',
          'marrom', 'violeta', 'rosa', 'ciano', 'magenta', 'cinza'
        ];
        console.log('Array de cores:', cores);
        cores.push('laranja');
        console.log('Array após adicionar laranja:', cores);
      
        var corRemovida = cores.pop();
        console.log('Array após remover a última cor (' + corRemovida + '):', cores);
        var resultado = manipulaArrays();
    }
    function manipulaarrays(){
        let cores = ["vermelho", "verde", "azul", "amarelo", "azul"];

        for (let i = cores.length - 1; i >= 0; i--) {
          if (cores[i] === "azul") {
            cores.splice(i, 1);
          }
        }
        console.log(cores);
      }
      return cores;

      function Manipulaarrays(){
        let cores = ["vermelho", "verde", "azul", "amarelo", "azul"];

  
  let primeiroValor = cores[0];

  
  let ultimoValor = cores[cores.length - 1];

  
  console.log("Primeiro valor:", primeiroValor);
  console.log("Último valor:", ultimoValor);
}

    function ManipulaArrays(){
        var cores = ["vermelho", "verde", "azul"];

  cores.unshift("fucsia");

  console.log(cores);
}
manipulaArrays();

function ManipulaARRAYS(arr) {
    if (arr.length > 0) {
      arr.shift(); 
      console.log("Array resultante:", arr);
    } else {
      console.log("O array está vazio.");
    }
  const meuArray = [1, 2, 3, 4, 5];
  manipulaArrays(meuArray);
}
    
      
    function sort(){
    var cores = [
        'branco', 'azul', 'vermelho', 'verde', 'preto', 'amarelo',
        'marrom', 'violeta', 'rosa', 'ciano', 'magenta', 'cinza'
      ];
      cores.sort();
      console.log('Array de cores ordenado:', cores);
    }
}
