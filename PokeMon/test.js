const data = {
  array: [1, 2, 3],
  boolean: true,
  color: "gold",
  null: null,
  number: 123,
  object: {
    a: "b",
    c: "d",
  },
  string: "Hello World",
};

const data2 = {
  form_name: "",
  form_names: [],
  form_order: 1,
  id: 1,
  is_battle_only: false,
  is_default: true,
  is_mega: false,
  name: "bulbasaur",
  names: [],
  order: 1,
  pokemon: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  version_group: {
    name: "red-blue",
    url: "https://pokeapi.co/api/v2/version-group/1/",
  },
};

//console.log(data2.form_order);

//console.log(data2.pokemon.name);
//console.log(data2.pokemon.url);
let a = data2.types[0].type.name;
console.log(a);
//console.log(data2.boolean);

//console.log(data2.color);
//console.log(data2.null);
//console.log(data2.number);
//console.log(data2.object.a);
//console.log(data2.string);
