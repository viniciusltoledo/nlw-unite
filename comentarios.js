```js

 // variaveis 

 const mensagem = 'Oi, tudo bem?'

 // tipos de dados 
 // number 
 // string 
 // funcao 

 alert(mensagem)

 // objeto javascript
const participante = {
    name: "Vinicius Toledo",
    email: "viniciustoledo@gmail.com",
    dataInscricao: new Date(2014, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0),
};

//array
let participantes = [
    {
        name: "Vinicius Toledo",
        email: "viniciustoledo@gmail.com",
        dataInscricao: new Date(2014, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0),
    },
];

// estrutura de repetição - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
        // Faça alguma coisa aqui
        // Enquanto tiver pessoas na lista
    }

    //condicional
    if (participante.dataCheckIn == null) {
        dataCheckIn = `
        <button 
            data-email="${participante.email}"
            onclick="fazerCheckIn(event)"
        >
            Confirmar check-in
        </button>
        `;
    }
 ```
