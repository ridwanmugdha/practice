window.onload = async function getPokemon() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;
    const pokemonName = data.name;
    const pokemonType = data.types;

    // Display the pokemon image
    document.getElementById("pokemon-img").src = pokemonSprite;
    document.getElementById("pokemon-img").alt = pokemonName;

    // Display pokemon name (adding this to the page)
    const nameElement = document.createElement("h2");
    nameElement.textContent = pokemonName;
    nameElement.className = "text-xl font-bold capitalize text-center mt-2";
    document.getElementById("pokemon-info").appendChild(nameElement);

    // Clear existing type boxes
    const typesContainer = document.getElementById("pokemon-types");
    typesContainer.innerHTML = "";

    // Display pokemon types
    pokemonType.forEach((type) => {
      const typeSpan = document.createElement("span");
      typeSpan.textContent = type.type.name;
      typeSpan.className = `type-box ${type.type.name}`;
      typesContainer.appendChild(typeSpan);
    });

    const res = await fetch(data.species.url);
    if (!res.ok) {
      throw new Error("Could not fetch species data");
    }

    const pokemonDesc = await res.json();

    // Get English flavor text
    const flavorText =
      pokemonDesc.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      )?.flavor_text || "No description available";

    // Display pokemon description
    document.getElementById("pokemon-description").textContent = flavorText;
  } catch (err) {
    console.error(err);
  }
};
