import { User } from "./User";
import { Encontro } from "./Encontro";
import { Posicao } from './Posicao';

export class Mesa {
    id:number
    titulo:string
    descricao:string
    autor:string
    coordenada:Posicao
    participantes:Array<User>
    pendentes:Array<User>
    esconderCheia: boolean
    encontros:Array<Encontro>

    constructor(){
    }

    getMesaMocked(autor:string)
    {
        
        const mesa = new Mesa();
        mesa.titulo = 'MesaN'+this.randomInt();
        mesa.descricao = 'Que mesa interessante'+this.randomInt();
        mesa.autor = autor;
        mesa.coordenada = new Posicao( (-18.5792504 - this.randomInt()), (-46.5073296 - this.randomInt()) )  ;

        return mesa;
    }

    randomInt()
    {
        return Math.random() * 10;
    }

}