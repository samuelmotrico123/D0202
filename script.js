//let contador = 0;
//while(contador < 10){
  //  console.log(contador);
    //contador = contador + 1;
    // contador += 1;
    // contador ++;
//}

//let nota = Number(prompt('Qual a nota do aluno?'));
//let i = 0;
//while(isNaN(nota) && i < 5){
 //   nota = Number(prompt('Qual a nota do aluno?'));

  //  i ++;
//}

//if(i >= 5){
 //   alert('Você chegou no limite de tentativas')
//}

//let vetor = ['felipe','ana','samuel','matheus'];

//let vetor = [15,2,-10,227,400,780];
//let i = 0;
//while(i< valore.length){
  //  console.log(valores[i]);
  //  i++;
//}
let valores = [15,2,-10,227,458,300]

for(let valor of valores){
    //console.log(valor);
    if(valor % 2 == 1){
       console.log(`O NUMERO ${valor} É IMPAR`);
    }
    else{
        console.log(`O NUMERO ${valor} É PAR`);
    }
}

let objeto =