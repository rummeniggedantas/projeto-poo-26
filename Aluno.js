class Aluno extends Pessoa{
  #nota1;
  #nota2;
  #nota3;
  media;
  constructor(nome, mat, estado, nota1, nota2, nota3) {
    super(nome, mat, estado);
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }
  gerarMedia(nota1, nota2, nota3) {
    let m = (nota1 + nota2 + nota3) / 3;
    this.media = m;
    return m;
  }
  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
  getNota1(){
    return this.#nota1;
  }
  setNota1(nota){
    this.#nota1 = nota;
  }
  getNota2(){
    return this.#nota2;
  }
  setNota2(nota){
    this.#nota2 = nota;
  }
  getNota3(){
    return this.#nota3;
  }
  setNota3(nota){
    this.#nota3 = nota;
  } 
}//fim da classe
