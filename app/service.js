import {enviroments} from "./model/enviroments.js";

export class PokemonService {

    getAllPokes() {
        let requestResul;
        fetch(`${enviroments.baseURL}pokemon?limit=12&offset=15`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                return data;
            })
            .catch((err) => {
                console.log(err)
            });
    }

    mostraNaTela(){
        console.log(this.nome)
    }

    getByName() {
        let requestResul
        fetch(`${enviroments.baseURL}pokemon/${this.nome}`)
            .then((res) => res.json())
            .then((data) => {
                return data
            })
            .catch((err) => {
                console.log(err)
            });
    }
}
module.exports = PokemonService