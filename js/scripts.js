
  // IIFE for pokemonRepository
let pokemonRepository = (function () {
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

  function loadList() {
    showLoadingMessage();
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
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
    $('.loading').css('display', 'block');
  }

  function hideLoadingMessage() {
    $('.loading').css('display', 'none');
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

// Load list and populate items
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
      addListItem(pokemon);
  });
});

// Function to add list item
function addListItem(pokemon) {
  let ul = $('.pokemon-list');
  let li = $('<li></li>');
  let button = $('<button></button>').text(pokemon.name);
  button.on('click', function () {
      showDetails(pokemon);
  });
  li.append(button);
  ul.append(li);
}

// Function to show modal details
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function (details) {
      let modalTitle = $('#modal-title');
      let modalImage = $('#modal-image');
      let modalHeight = $('#modal-height');
      modalTitle.text(details.name);
      modalImage.attr('src', details.imgUrl);
      modalHeight.text(`Height: ${details.height}`);

      // Check if height is big or small
      if (details.height > 10) {
        modalHeight.text(`Height: ${details.height} - Wow, That's big!`);
      } else if (details.height < 5) {
        modalHeight.text(`Height: ${details.height} - Wow, That's small!`);
      } else {
        modalHeight.text(`Height: ${details.height}`);
      }

      // Show the Bootstrap modal
      $('#myModal').modal('show');
  }).catch(function (error) {
      console.error('Error loading Pokemon details:', error);
  });
}

// Event delegation for modal close
$(document).on('click', function (event) {
  if (event.target === $('#myModal')[0]) {
      $('#myModal').modal('hide');
  }
});

$(document).on('keydown', function (event) {
  if (event.key === 'Escape') {
      $('#myModal').modal('hide');
  }
});