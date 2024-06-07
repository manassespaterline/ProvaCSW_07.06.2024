function criarTabela(){
    
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = document.getElementById('notaum').value;
    const nota2 = document.getElementById('notadois').value;

    var media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    var situacao = 'Aprovado';

    if (media > 5){
        situacao = 'Aprovado';
    } else {
        situacao = 'Reprovado';
    }

    if (nome && matricula && nota1 && nota2) {
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

    const novaLinha = tabela.insertRow();

    const campo1 = novaLinha.insertCell(0);
    const campo2 = novaLinha.insertCell(1);
    const campo3 = novaLinha.insertCell(2);
    const campo4 = novaLinha.insertCell(3);
    const campo5 = novaLinha.insertCell(4);
    const campo6 = novaLinha.insertCell(5);

    campo1.textContent = nome;
    campo2.textContent = matricula;
    campo3.textContent = nota1;
    campo4.textContent = nota2;
    campo5.textContent = media;
    campo6.textContent = situacao;

    } else {
        alert('Por favor, preencha todos os campos.')
    }
}

