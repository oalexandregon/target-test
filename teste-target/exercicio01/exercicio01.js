// Questão 1: 

const userInput = Number(prompt('Digite um número: '));

function isFibonacci(userInput) {
    if (userInput === 0 || userInput === 1) {
        alert("O número pertence à sequencia de Fibonacci")
        return
    }

    let fibonacciArr = [0, 1]

    for (i = 2; i <= userInput; i++) {
        nextValue = fibonacciArr[i - 1] + fibonacciArr[i - 2];
        fibonacciArr.push(nextValue);
        console.log(fibonacciArr);
        if(nextValue === userInput) {
            alert("O número pertence à sequência de Fibonacci")
            return
        }

        if (nextValue >= userInput) { break };
    }

    alert('O número não pertence à sequência de Fibonacci')
   
}


if(!userInput) {
    alert("Insira um número válido")
} else {
    isFibonacci(userInput);
}

