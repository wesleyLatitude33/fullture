/* VARIÁVEIS GLOBAIS VISÍVEIS EM TODO O PROJETO */
const formulario = document.querySelector('form');
const listaPacientes = [];

/*          AÇÃO PRINCIPAL LISTENER            */
formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const paciente = lerDadosPaciente();
    if (validarCamposObrigatorios(paciente)) {
        gravarPaciente(paciente);
        formulario.reset();
        document.getElementById('nome').focus();
        
        console.log(listaPacientes);
    } else {
        alert("Dados obrigatórios(*) em branco!");
    }
});

/*     LER DADOS DO FORMULÁRIO    */
function lerDadosPaciente() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const status = document.getElementById('status').checked;

    const paciente = {"nome": nome, "idade": idade, "status": status};

    return paciente;
}

function validarCamposObrigatorios(dados){
    let vetor = []
    vetor.push(dados);
    let validar = true;
    vetor.map( (value) => {
       if(value.nome == "") validar = false ;
       if(value.idade == "") validar = false;
    });
    return validar; 
}

/*        GRAVAR PACIENTE               */
function gravarPaciente(paciente) {
    listaPacientes.push(paciente);
    addLineTable(paciente);
}

function localizar(componente) {
    let filtered = []
    /* value = todos, maior, 1, 0 */

    switch (componente.value){
        case "todos" : filtered = listaPacientes; break;
        case "maior" : filtered = listaPacientes.filter(value => value.idade >= 18); break;
        default : filtered = listaPacientes.filter(value => value.status == componente.value);
    }
    componente.value = "Selecione status para busca";
    console.log(filtered);
    
    removeAll();
    cabecalho();
    filtered.forEach( linha => {
        addLineTable(linha)
    })
}

function addLineTable(paciente){
    const table = document.querySelector('#table');

    const line = document.createElement('div');  // <div></div>
    line.classList.add('row'); //<div class='row'></div>
    line.classList.add('line'); //<div class='row line'></div>

    const cNome = document.createElement('div'); // <div></div>
    cNome.classList.add('col'); // <div class='col'></div>

    const cIdade = document.createElement('div');
    cIdade.classList.add('col');

    const cAtivo = document.createElement('div');
    cAtivo.classList.add('col');

    table.appendChild(line);

    line.appendChild(cNome);
    line.appendChild(cIdade);
    line.appendChild(cAtivo);

    cNome.innerHTML = paciente.nome;
    cIdade.innerHTML = paciente.idade;

    if (paciente.status == true){
        cAtivo.innerHTML = 'Ativo';
    }
    else{
        cAtivo.innerHTML = 'Inativo';
        line.classList.add('inativo');
    }
    // ------------- IF TERNÁRIO ------------
    //cAtivo.innerHTML = (paciente.status == true ? 'Ativo' : 'Inativo');

    /* ------------------- MODELO CRIAÇÃO BOTÃO --------------------- 
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-secondary');
    button.innerHTML = "excluir";

    const grupoBotao = document.querySelector('#btnGroup');
    grupoBotao.appendChild(button);
    */

}

function cabecalho(){
    const table = document.querySelector('#table');

    const line = document.createElement('div');  // <div></div>
    line.classList.add('row'); //<div class='row'></div>
    line.classList.add('PrincipalLine');

    const cNome = document.createElement('div');
    cNome.classList.add('col');
    const cIdade = document.createElement('div');
    cIdade.classList.add('col');
    const cAtivo = document.createElement('div');
    cAtivo.classList.add('col');

    table.appendChild(line);

    line.appendChild(cNome);
    line.appendChild(cIdade);
    line.appendChild(cAtivo);

    cNome.innerHTML = 'Nome';
    cIdade.innerHTML = 'Idade';
    cAtivo.innerHTML = 'Status';
}

function removeAll(){
    const table = document.querySelector('#table');
    
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
