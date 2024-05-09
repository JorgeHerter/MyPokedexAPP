let pokemonRepository=function(){let t=[];function o(o){"object"==typeof o&&"name"in o&&"detailsUrl"in o?t.push(o):console.error("add: invalid pokemon")}function e(){return t}function n(){$(".loading").css("display","block")}function i(){$(".loading").css("display","none")}return{add:o,getAll:e,loadList:function t(){return n(),fetch("https://pokeapi.co/api/v2/pokemon/?limit=100").then(t=>t.json()).then(t=>{t.results.forEach(t=>{o({name:t.name,detailsUrl:t.url})}),i()}).catch(t=>{console.error(t),i()})},loadDetails:function t(o){return n(),fetch(o.detailsUrl).then(t=>t.json()).then(t=>(o.imgUrl=t.sprites.front_default,o.height=t.height,i(),o)).catch(t=>{console.error(t),i()})}}}();function addListItem(t){let o=$(".pokemon-list"),e=$("<li></li>"),n=$("<button></button>").text(t.name);n.on("click",function(){showDetails(t)}),e.append(n),o.append(e)}function showDetails(t){pokemonRepository.loadDetails(t).then(function(t){let o=$("#modal-title"),e=$("#modal-image"),n=$("#modal-height");o.text(t.name),e.attr("src",t.imgUrl),n.text(`Height: ${t.height}`),t.height>10?n.text(`Height: ${t.height} - Wow, That's big!`):t.height<5?n.text(`Height: ${t.height} - Wow, That's small!`):n.text(`Height: ${t.height}`),$("#myModal").modal("show")}).catch(function(t){console.error("Error loading Pokemon details:",t)})}pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){addListItem(t)})}),$(document).on("click",function(t){t.target===$("#myModal")[0]&&$("#myModal").modal("hide")}),$(document).on("keydown",function(t){"Escape"===t.key&&$("#myModal").modal("hide")});