let turmas = [];

function listarAluno(){
    Interface.listar(turma);
}

function btnSalvar(){
   let a = Interface.salvar();
   turma.push(a);
}

function cadastroAluno(){
    Interface.cadastrar();
}

function cadastrarTurma(){
    Interface.cadastrarTurma();
}