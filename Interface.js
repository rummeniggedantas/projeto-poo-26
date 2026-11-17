class Interface{
  btnCadastrar;
  tabCadastrar;
  btnListar;
  tabListar;
  btnCadastrarTurma;
  tabCadastrarTurma;

constructor(){

}    
static salvarAluno() {
  let nome = document.getElementById('nome').value;
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let n3 = Number(document.getElementById('n3').value);
  let a1 = new Aluno(nome,"100","ativo", n1, n2, n3);
  let m = a1.gerarMedia(n1, n2, n3);
  a1.gerarEstado(m);
  //turma[turma.length] = a1;
  alert('aluno cadastrado');
  return a1;
}
static listar(turmas) {
  Interface.pegarElementos();
  const mudarMedia = "recalculaMadia()";
  this.btnListar.classList.add('active');
  this.btnCadastrar.classList.remove('active');
  this.btnCadastrarTurma.classList.remove('active');
  //console.log(turmas);

  // Ajusta o conteúdo visível
  this.tabListar.classList.add('active');
  this.tabCadastrar.classList.remove('active');
  this.tabCadastrarTurma.classList.remove('active');

  let listaTurmas = '<table>'
  
  for(let t=0;t <turmas.length;t++){

    listaTurmas += '<tr><th colspan="3">Curso</th> <th colspan="3">Professor</th></tr>';
    let turma = turmas[t].getAlunos();
    console.log(turma)
    listaTurmas = listaTurmas + 
    "<tr>"+
    "<td colspan='3'>"+turmas[t].getCurso() +"</td>"+
    "<td colspan='3'>"+turmas[t].getProfessor().getNome() +"</td>"+
    "</tr>";
    let lista = '';
    lista += '<tr><th>Nome</th> <th>N1</th> <th>N2</th> <th>N3</th><th>Media</th> <th>Situação</th></tr>';
    for (let i = 0; i < turma.length; i++) {
      lista =
        lista +
        "<tr>"+
        "<td>"+turma[i].getNome() +"</td>"+
        "<td>"+turma[i].getNota1() +"</td>"+
        "<td>"+turma[i].getNota2() +"</td>"+
        "<td>"+turma[i].getNota3() +"</td>"+
        "<td>"+turma[i].media.toFixed(2) +"</td>"+
        "<td>"+turma[i].estado +"</td>"
        "</tr>";
    }
    //lista += "</table>"
    //document.getElementById('alunos').innerHTML = lista;
    listaTurmas += lista+"<tr></tr>";
}
listaTurmas += "</table>"
document.getElementById('alunos').innerHTML = listaTurmas;
}

static cadastrar() {
  Interface.pegarElementos();
  this.btnListar.classList.remove('active');
  this.btnCadastrarTurma.classList.remove('active');
  this.btnCadastrar.classList.add('active');  

  // Ajusta o conteúdo visível
  this.tabListar.classList.remove('active');
  this.tabCadastrarTurma.classList.remove('active');
  this.tabCadastrar.classList.add('active');
  //document.getElementById("media").innerHTML = m;
}

static cadastrarTurma(){
  Interface.pegarElementos();
  this.btnListar.classList.remove('active');
  this.btnCadastrarTurma.classList.add('active');
  this.btnCadastrar.classList.remove('active');
  
  // Ajusta o conteúdo visível
  this.tabListar.classList.remove('active');
  this.tabCadastrarTurma.classList.add('active');
  this.tabCadastrar.classList.remove('active');

}

static salvarTurma() {
  const curso = document.getElementById('curso').value;
  const nomeProf = document.getElementById('prof').value;
  const mat = document.getElementById('mat').value;
  const est = document.getElementById('est').value;
  let prof = new Professor(nomeProf,mat,est);
  const t1 = new Turma(curso, prof);
  
  //busca o select no HTML para inserir uma tuma como opção
  const select = document.getElementById('turmaSelect');
  const option = document.createElement('option');
        
        // Define o atributo 'value' e o texto visível
        option.value = curso;
        option.textContent = curso;
        
        // Adiciona a <option> dentro do <select>
        select.appendChild(option);


  alert('turma cadastrada');
  return t1;
}

static pegarElementos(){
  this.btnCadastrar = document.getElementById('btn-cadastrar');
  this.tabCadastrar = document.getElementById('tab-cadastrar');
  this.btnListar = document.getElementById('btn-listar');
  this.tabListar = document.getElementById('tab-listar');
  this.btnCadastrarTurma = document.getElementById('btn-cadastrar-turma');
  this.tabCadastrarTurma = document.getElementById('tab-cadastrar-turma');
}

static pegarIndiceTurma(){
  const selectTurma = document.getElementById('turmaSelect');
  const indice = selectTurma.selectedIndex;
  //const cursoAluno = selectTurma.options[indice].text;
  return indice;
}

static pegarCursoSelecionado(){
  const s = document.getElementById('turmaSelect');
  const i = s.selectedIndex;
  const cursoAluno = s.options[i].text;
  return cursoAluno;
}
}//fim da classe
