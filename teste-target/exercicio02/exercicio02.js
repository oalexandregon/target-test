// Questão 2: 

const userInput = prompt('Informe uma palavra:').toLocaleLowerCase().trim();

function verifyA(word) {

    let counter = 0;

    for (i = 0; i < word.length; i++) {
        let letter = word[i]

        if (letter === 'a') {
            counter = counter + 1
        }

    }

    if (counter !== 0) {
        alert(`A letra "a" aparece ${counter} vezes`)
    } else {
        alert(`A letra "a" não aparece`)
    }
}

if(!userInput) {
    alert("Insira uma string válida")
} else {
    verifyA(userInput);
}

