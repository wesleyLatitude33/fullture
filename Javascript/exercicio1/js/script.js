let matrizAlunos = new Array();

function calcularMedia() {
    const codAluno = parseInt(document.getElementById('codigo').value);
    const nota1 = parseInt(document.getElementById('valor1').value);
    const nota2 = parseInt(document.getElementById('valor2').value);
    const nota3 = parseInt(document.getElementById('valor3').value);
    const nota4 = parseInt(document.getElementById('valor4').value);

    limparForm();

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    matrizAlunos.push([codAluno, nota1, nota2, nota3, nota4])

    mensagemAluno(codAluno, media);
    document.getElementById('codigo').focus();
}

function mensagemAluno(codigo,media){
    if (media >= 6)
        alert('O aluno '+ codigo + ' foi aprovado com média ' + media)
    else
        alert('O aluno '+ codigo + ' foi reprovado com média ' + media)
}

function limparForm(){
    document.getElementById('codigo').value = '';
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('valor3').value = '';
    document.getElementById('valor4').value = '';
}

function validar(valor) {
    if (valor.value < 0 || valor.value > 10){
        alert('A nota precisa estar entre 0 e 10');
        valor.value = ''
        valor.focus();
    }
}

function buscarAluno(valor){
    /* Método 01 de busca
    matrizAlunos.find(element => {
        if (element[0] == valor.value)
            console.log(element)
    })*/

    const busca = matrizAlunos.find(element => element[0] == valor.value)
    console.log(busca);

}