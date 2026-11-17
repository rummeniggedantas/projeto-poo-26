class Professor extends Pessoa{
    #formacao;
    #email;
    constructor(nome, mat, estado, forma,email){
        super(nome, mat, estado);
        this.#formacao = forma;
        this.#email = email;
    }
    getFormacao(){
        return this.#formacao;
    }
    setFormacao(forma){
        this.#formacao = forma;
    }
}