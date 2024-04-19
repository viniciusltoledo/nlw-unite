let participantes = [
    {
        name: "Vinicius Toledo",
        email: "viniciustoledo@gmail.com",
        dataInscricao: new Date(2014, 2, 22, 19, 20),
        dataCheckIn: null,
    },
    {
        name: "Diego Fernandes",
        email: "diego@gmail.com",
        dataInscricao: new Date(2014, 2, 23, 12, 45),
        dataCheckIn: new Date(2024, 2, 24, 20, 37),
    },
    {
        name: "Ana Souza",
        email: "ana@gmail.com",
        dataInscricao: new Date(2015, 4, 10, 8, 15),
        dataCheckIn: null,
    },
    {
        name: "Rafael Silva",
        email: "rafael@gmail.com",
        dataInscricao: new Date(2016, 7, 5, 14, 30),
        dataCheckIn: new Date(2024, 3, 1, 10, 10),
    },
    {
        name: "Carla Oliveira",
        email: "carla@gmail.com",
        dataInscricao: new Date(2017, 10, 18, 9, 0),
        dataCheckIn: null,
    },
    {
        name: "João Santos",
        email: "joao@gmail.com",
        dataInscricao: new Date(2018, 1, 9, 18, 20),
        dataCheckIn: new Date(2024, 3, 3, 12, 30),
    },
    {
        name: "Maria Oliveira",
        email: "maria@gmail.com",
        dataInscricao: new Date(2019, 3, 30, 11, 10),
        dataCheckIn: new Date(2024, 3, 4, 17, 15),
    },
    {
        name: "Pedro Lima",
        email: "pedro@gmail.com",
        dataInscricao: new Date(2020, 6, 12, 16, 40),
        dataCheckIn: new Date(2024, 3, 5, 14, 50),
    },
    {
        name: "Sandra Pereira",
        email: "sandra@gmail.com",
        dataInscricao: new Date(2021, 8, 25, 13, 5),
        dataCheckIn: new Date(2024, 3, 6, 11, 25),
    },
    {
        name: "Lucas Santos",
        email: "lucas@gmail.com",
        dataInscricao: new Date(2022, 11, 8, 22, 30),
        dataCheckIn: new Date(2024, 3, 7, 8, 0),
    },
];

const criarNovoParticipante = (participante) => {
    console.log(participante)
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

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

    return `
        <tr>
            <td>
                <strong>
                    ${participante.name} 
                </strong>
                <br>
                <small>
                    ${participante.email}
                </small>
            </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>
        </tr>
    `;
};

const atualizarLista = (participantes) => {
    let output = "";
    // estrutura de repetição - loop
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }

    // substituir informação do HTML
    document.querySelector("tbody").innerHTML = output;
};

const adicionarParticipante = (event) => {
    event.preventDefault();
    
    const dadosDoFormulario = new FormData(event.target);
    console.log(dadosDoFormulario.get("nome"))
    
    const participante = {
        name: dadosDoFormulario.get("nome"),
        email: dadosDoFormulario.get("email"),
        dataInscricao: new Date(),
        dataCheckIn: null,
    };

    // verificar se o participante já existe
    const participanteExiste = participantes.find(
        (p) => p.email == participante.email
    )

    if(participanteExiste) {
        alert('Email já cadastrado')
        return
    }



    participantes = [participante, ...participantes];
    atualizarLista(participantes);

    // limpar o formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
};


const fazerCheckIn = (event) => {
    // confirmar se  realmente quer o check-in
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

    if(confirm(mensagemConfirmacao) == false) {
        return
    }

    //encontrar participante dentro da lista
    const participante = participantes.find((p) => {
        return p.email == event.target.dataset.email;
    });
    // atualizar o check-in do participante
    participante.dataCheckIn = new Date();

    // atualizar a lista de participantes
    atualizarLista(participantes);
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    atualizarLista(participantes);
});


