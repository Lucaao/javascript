var sim = 1 == 1;
console.log("Valor ", sim);
var inteiro = 12;
console.log("Valor ", inteiro);
var pontoFlutuante = 12.99;
console.log("Valor ", pontoFlutuante);
var nome = "Aline";
console.log("Valor ", nome);

console.log('tipo ' + sim);
console.log('tipo ' + typeof(inteiro));
console.log('tipo ' + typeof(pontoFlutuante));
console.log('tipo ' + typeof(nome));
var tipo;
console.log(tipo);

console.log("\n");

var avaliacaoParcial1 = 1;
console.log("avaliação parcial " + avaliacaoParcial1);
var avaliacaoParcial2 = 2;
console.log("avaliação parcial " + avaliacaoParcial2);
var ativSemestral = 5;
console.log("avaliação semestral " + ativSemestral);
media = avaliacaoParcial1+avaliacaoParcial2+ativSemestral/3;
console.log("Sua média é " + media);

console.log("\n");

console.log(`com interpolação\n AP1:${avaliacaoParcial1}\n AP2:${avaliacaoParcial2}\n AS:${ativSemestral}\n MEDIA:${media}\n`);

console.log("\n");

console.log("Nome: " + nome);
var idade = 19;
console.log("Idade: " + idade);
if(idade>=18){
    console.log("Maior de idade!");
}else{
    console.log("Menor de idade!");
}

console.log("\n");

var n1= 1;
console.log("Número: "+ n1);
var n2= 8;
console.log("Número: "+ n2);
var n3= 7;
console.log("Número: "+ n3);
if(n1>n2 && n1>n3){
    console.log("O maior número é " + n1);
}
if (n2>n1 && n2>n3){
    console.log("O maior número é " + n2);
}
if(n3>n1 && n3>n2){
    console.log("O maior número é " + n3);
}

