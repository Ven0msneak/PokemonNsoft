const pokemon = [
    { 
        name: "Bulbasaur",
        src: "Pokemon/qwilfish.png",
        skills: ["Water Gun", "Poison Sting", "Spikes"]
    },
    { 
        name: "Charmander",
        src: "Pokemon/diglett.png",
        skills: ["Dig", "Magnitude", "Sucker Punch"]
    },
    { 
        name: "Squirtle",
        src: "Pokemon/shelmet.png",
        skills: ["Protect", "Bug Bite", "Acid Armor"]
    },
];

function choosePokemon(pokemonName)
{
var selectedPokemon = pokemon.find ( poke => poke.name ==== pokemonName );
if (selectedPokemon)
{
    localStorage.setItem('starterPokemon', JSON.stringify(selectedPokemon);

    selectedPokemonElement.innerHTML = `
      <h2>Selected Pokémon: ${selectedPokemon.name}</h2>
      <img src="${selectedPokemon.src}" alt="${selectedPokemon.name}">
      <h3>Skills:</h3>
      <ul>
        ${selectedPokemon.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
}
}
