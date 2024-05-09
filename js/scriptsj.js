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
  $(document).ready(function() {
    // Your modal code here
});

  
  function showDetails(pokemon) {
    console.log('Show details called'); // Debugging log
    pokemonRepository.loadDetails(pokemon).then(function (details) {
            console.log('details loaded:', details); // Debugging log

            // Check if modal exists and is initialized
            let modal = $('#myModal');
            if (modal.length && typeof modal.modal === 'function') {
                // Update modal content
                let modalTitle = $('#modal-title');
                let modalImage = $('#modal-image');
                let modalHeight = $('#modal-height');

                modalTitle.text(details.name);
                modalImage.attr('src', details.imgUrl);
                modalHeight.text(`Height: ${details.height}`);

                // Show the Bootstrap modal
                modal.modal('show');
                console.log('Modal shown'); // Debugging log
            } else {
                console.error('Error: Modal not found or modal function is not available.');
            }
        })
        .catch(function (error) {
            console.error('Error loading Pokemon details:', error);
        });
}


/*function showDetails(pokemon) {
    console.log('Show details called'); // Debugging log
    pokemonRepository.loadDetails(pokemon).then(function (details) {
      console.log('details loaded:', details); // Debugging log
      let modal = $('#myModal');
      let modalTitle = $('#modal-title');
      let modalImage = $('#modal-image');
      let modalHeight = $('#modal-height');
  
      modalTitle.text(details.name);
      modalImage.attr('src', details.imgUrl);
      modalHeight.text(`Height: ${details.height}`);
  
      modal.modal('show');
      console.log('Modal shown'); // Debugging log
      })
      
      .catch(function (error) {
        console.error('Error loading Pokemon details:', error);
      });
  }
  
  // Event delegation for modal close
  $(document).on('click', '#modal-close-btn', function () {
    $('#myModal').modal('hide');
  });*/
  
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
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      addListItem(pokemon);
    });
  });
  
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
  
  
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (details) {
      // Cache jQuery objects for modal elements
      let modal = $('#myModal');
      let modalTitle = $('#modal-title');
      let modalImage = $('#modal-image');
      let modalHeight = $('#modal-height');
  
      // Populate modal content
      modalTitle.text(details.name);
      modalImage.attr('src', details.imgUrl);
      modalHeight.text(`Height: ${details.height}`);
  
      // Show the Bootstrap modal using modal('show')
      modal.modal('show');
    });
  }
  
  // Global event handlers for modal close
  $('#modal-close-btn').on('click', function () {
    $('#myModal').modal('hide');
  });
  
  $(window).on('click', function (event) {
    if (event.target === $('#myModal')[0]) {
      $('#myModal').modal('hide');
    }
  });
  
  $(window).on('keydown', function (event) {
    if (event.key === 'Escape') {
      $('#myModal').modal('hide');
    }
  });
  
  /*function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (details) {
      let modal = $('#modal-container');
      let modalTitle = $('#modal-title');
      let modalImage = $('#modal-image');
      let modalHeight = $('#modal-height');
  
      modalTitle.text(details.name);
      modalImage.attr('src', details.imgUrl);
      modalHeight.text(`Height: ${details.height}`);
  
      modal.css('display', 'block');
  
      $('#modal-close-btn').on('click', function () {
        modal.css('display', 'none');
      });
  
      $(window).on('click', function (event) {
        if (event.target === modal[0]) {
          modal.css('display', 'none');
        }
      });
  
      $(window).on('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.css('display', 'none');
        }
      });
    });*/
  
  