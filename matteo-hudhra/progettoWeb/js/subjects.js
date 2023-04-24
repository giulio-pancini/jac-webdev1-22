class Subjects{
    
    #nome_materia;
    #docente;
    #voti = [] = new Voti;

    constructor(mat, doc, vot = []){
        this.#nome_materia = mat;
        this.#docente = doc;
        this.#voti = [];
    }

    getMateria(){
        return this.#nome_materia;
    }
    getDocente(){
        return this.#docente;
    }
    getVoti(){
        return this.#voti;
    }
    mediaVoti(){
        return;
    }
}