class Turma{
   #curso;
   #professor;
   #alunos;

   constructor(curso, professor){
    this.#curso = curso;
    this.#professor = professor;
    this.#alunos = [];
   }

   matricular(aluno){
    this.alunos.push(aluno);
   }

   getCurso(){
      return this.#curso;
   }

   setCurso(curso){
      this.#curso = curso;
   }

   getProfessor(){
      return this.#professor;
   }

   setProfessor(professor){
      this.#professor = professor;
   }

   getAlunos(){
      return this.#alunos;
   }

   setAlunos(alunos){
      this.#alunos = alunos;
   }
}