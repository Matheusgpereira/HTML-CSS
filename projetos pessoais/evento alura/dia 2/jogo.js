var numSecreto = parseInt(Math.random() * 1000); //paseInt() = considere inteiro Math.random() = selecionar um numero aleatorio
var chute = prompt('digite seu chute') //primpt('') = alert com caixa para digitar

while (chute != numSecreto) {       //while(caracteristica){execução} = enquanto a caracteristica definida não caontecer executar algo
    var chute = prompt('digite seu chute')
if (chute == numSecreto) {
    alert('correto')
} else if (chute < numSecreto) {
    alert('Baixo de mais')
} else if (chute > numSecreto) {
    alert('Alto de mais')
}
}
