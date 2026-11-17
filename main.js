let turmas = [];

function listarAluno(){
    Interface.listar(turmas);
}

/*incompleto*/
function btnSalvarAluno(){
   let a = Interface.salvarAluno();
   let codigo = Interface.pegarIndiceTurma();
   let curso = Interface.pegarCursoSelecionado();
   let x = turmas[codigo-1].getAlunos().push(a);
   //console.log(turmas.length)
   //console.log(x);
}

function btnSalvarTurma(){
    const t = Interface.salvarTurma();
    turmas.push(t);
 }

function cadastroAluno(){
    Interface.cadastrar();
}

function cadastrarTurma(){
    Interface.cadastrarTurma();
}