function buscaPeloNome() {
    let nome = document.getElementById('nome').value
    console.log(nome)
    mostraPokemon(nome)
  }
  
  function mostraPokemon(nome) {
    let newDiv = document.createElement(`div`);
    let contentDiv = document.createTextNode(`${nome}`);
    newDiv.appendChild(contentDiv);
  
    let activeDiv = document.getElementById(`div`);
    document.body.insertBefore(newDiv, activeDiv);
  }