const form = document.getElementById('form-dados');
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const imgAprovado = '<img src="./imagens/aprovado.png" alt="emoji comemorando"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="emoji decepcionado"/>';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota de corte:"));
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

   adicionaLinha();
   atualizaTabela();
   atualizaMedia();
});

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade "${inputNomeAtividade.value}" já foi inserida.`)

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }

    else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }
};

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaMedia(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

};

function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
};