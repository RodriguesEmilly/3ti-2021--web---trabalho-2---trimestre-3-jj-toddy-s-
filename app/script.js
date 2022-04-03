let resultadoTodos;
let resultadoBuscaPorNome;

var _ = document.querySelector.bind(document)

const enviroments = {
  baseApiURL: 'https://pokeapi.co/api/v2/',

  get baseURL() {
    return this.baseApiURL;
  }
}

class PokemonService {
  buscaTodos() {
    fetch(`${enviroments.baseURL}pokemon?limit=12&offset=15`)
      .then((res) => res.json())
      .then((data) => {
        resultadoTodos = data
        mostraTodos(resultadoTodos)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  buscaPorNome(nome) {
    fetch(`${enviroments.baseURL}pokemon/${nome}`)
      .then((res) => res.json())
      .then((data) => {
        resultadoBuscaPorNome = data
        console.log(data)
        mostraPokemonPorNome(resultadoBuscaPorNome)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  next(value) {
    fetch(`${value}`)
      .then((res) => res.json())
      .then((data) => {
        resultadoTodos = data
        mostraTodos(resultadoTodos)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  before(value) {
    fetch(`${value}`)
      .then((res) => res.json())
      .then((data) => {
        resultadoTodos = data
        mostraTodos(resultadoTodos)
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
const service = new PokemonService()

window.onload = () => {
  service.buscaTodos()
  console.log('teste')
}


function beforePagination() {
  service.before(resultadoTodos?.previous)
}

function nextPagination() {
  service.next(resultadoTodos?.next)
}

function buscaPeloNome() {
  let nome = document.getElementById('nome').value
  service.buscaPorNome(nome)
}

function pokemonElementTemplate(element){
  return `<a id="" class="list-group-item list-group-item-action list-group-item-dark" aria-current="true">
  ${element.name}
  </a>`
}

function mostraTodos(pokemon) {
  _("#pokemon-list").innerHTML = pokemon.results.map((element) => this.pokemonElementTemplate(element)).join('');
}

function pokemonElementTemplateCard(element){
  return `<img src="${element.sprites.other.dream_world.front_default}" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h3 class="card-title text-center">${element.name}</h3>
  </div>`
}

function mostraPokemonPorNome(pokemon) {
  _("#pokemon-card").innerHTML =  this.pokemonElementTemplateCard(pokemon);
}