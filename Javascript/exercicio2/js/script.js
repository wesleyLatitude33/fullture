let pacientes = new Array();

function gravarPaciente() {
    const sexo = document.getElementById('sexo').value;
    const altura = parseFloat(document.getElementById('altura').value);

    pacientes.push([sexo, altura]);

    limparForm();
}

function limparForm() {
    document.getElementById('sexo').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('sexo').focus();
}

function maiorAltura(){
    let maior = 0.0;
    pacientes.forEach(element => {
        if (element[1] > maior) maior = element[1];
    });
    alert('A maior altura é de '+maior);
}

function mediaMulheres() {
    let soma = 0;

    const mulheres = pacientes.filter(element => element[0] === "F")

    mulheres.forEach(element => {
        soma += element[1];
    });
    const media = soma / mulheres.length;

    alert('A média da altura das mulheres é de '+media);
}