
let requestResul
const PokemonService = require('./service.js')
const service = new PokemonService(null)
window.onload = () => {
    getAll()
    console.log('teste')
}

function getAll() {
    return service.getAllPokes();
}

function next(value) {
    fetch(`${value}`)
        .then((res) => res.json())
        .then((data) => {
            requestResul = data;
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        });
}

function before(value) {
    fetch(`${value}`)
        .then((res) => res.json())
        .then((data) => {
            requestResul = data;
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        });
}

function beforePagination() {
    before(requestResul?.previous)
}

function nextPagination() {
    next(requestResul?.next)
}