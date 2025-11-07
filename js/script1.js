/*let pokemonRepository = (function () {
    let pokemonList = [];
  
    function add(pokemon) {
      if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
        pokemonList.push(pokemon);
      } else {
        console.error('add: invalid pokemon');
      }
    }
  
    function getAll() {
      return pokemonList;
    }
    //loading the pokemon list from the API 1.7
    function loadList() {
      showLoadingMessage();
      return fetch('https://pokeapi.co/api/v2/pokemon/?limit=75')
        .then(response => response.json())
        .then(json => {
          json.results.forEach(item => {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
          hideLoadingMessage();
        })
        .catch(e => {
          console.error(e);
          hideLoadingMessage();
        });
    }
  
    function loadDetails(pokemon) {
      showLoadingMessage();
      return fetch(pokemon.detailsUrl)
        .then(response => response.json())
        .then(details => {
          pokemon.imgUrl = details.sprites.front_default;
          pokemon.height = details.height;
          hideLoadingMessage();
          return pokemon;
        })
        .catch(e => {
          console.error(e);
          hideLoadingMessage();
        });
    }
  
    function showLoadingMessage() {
      document.querySelector('.loading').style.display = 'block';
    }
  
    function hideLoadingMessage() {
      document.querySelector('.loading').style.display = 'none';
    }
  
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      addListItem(pokemon);
    });
  });
  //1.6 function to output to the DOM
  function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
    li.appendChild(button);
    ul.appendChild(li);
  }
  
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (details) {
      let modal = document.getElementById('modal-container');
      let modalTitle = document.getElementById('modal-title');
      let modalImage = document.getElementById('modal-image');
      let modalHeight = document.getElementById('modal-height');
  
      modalTitle.textContent = details.name;
      modalImage.src = details.imgUrl;
      modalHeight.textContent = `Height: ${details.height}`;
  
      modal.style.display = 'block';
  
      document.getElementById('modal-close-btn').addEventListener('click', function () {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
  
      window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none';
        }
      });
    });
  }
  
  
  
  function add(pokemon) {
    if (typeof pokemon === "object" &&
        Object.keys(pokemon).every(key => ['name', 'height'].includes(key)) &&
        Object.keys(pokemon).length === 2) {
      pokemonList.push(pokemon);
    } else {
      console.log("Invalid pokemon entry");
    }
  }*/