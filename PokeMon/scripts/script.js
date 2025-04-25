const pokemonCount = 151;
let pokedox = {}; // { 1: {"name" : "bulbsaur" ,"img" : url ,"type" : ["grass" ,"poison"] ,"desc" : "......."}                }

window.onload = async function () {
  getPokemon();
};

async function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
  let res = await fetch(url);
  let pokemon = await res.json();

  const pokemonSprite = data.sprites.front_default;
  const pokemonName = data.name;
  const pokemonType = data.types;

  res = await fetch(data.species.url);
  const pokemonDesc = await res.json();

  console.log(pokemonDesc);
}
