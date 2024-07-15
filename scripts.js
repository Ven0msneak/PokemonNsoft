const sprite = document.getElementById("spritecontainer");
const btnUp = document.getElementById("btnUp");
var pokemon = [
    { name: "qwilfish", src: "Pokemon/qwilfish.png" },
    { name: "diglett", src: "Pokemon/diglett.png" },
    { name: "shelmet", src: "Pokemon/shelmet.png" },
    { name: "Couldn't find anything.", src: "Pokemon/pokeball-n.png" }  // Example of an empty Pokémon
];

function searchEnemy()
{
var randomPokemon = Math.floor(Math.random() * (pokemon.length));
console.log(pokemon[randomPokemon]);
document.getElementById("enemy").src = pokemon[randomPokemon].src;
document.getElementById("")
document.getElementById("pokemonFound").innerHTML = pokemon[randomPokemon].name;
}

function moveUp()
{
    let currentTop = parseInt(window.getComputedStyle(sprite).top, 10);
    sprite.style.top = (currentTop - 10) + 'px';
    
    if (currentTop === 10)
    {
    	btnUp.disabled = true;
    }

    if (currentTop === 440)
    { 
    	btnDown.disabled = false; 
    }

    searchEnemy()
}

function move(direction) {
    let currentTop = parseInt(window.getComputedStyle(sprite).top, 10);
    let currentLeft = parseInt(window.getComputedStyle(sprite).left, 10);

    switch (direction) {
        case 'up':
            if (currentTop > 0) {
                sprite.style.top = (currentTop - 10) + 'px';
            }
            break;
        case 'down':
            if (currentTop < 430) { // Adjust based on your boundary
                sprite.style.top = (currentTop + 10) + 'px';
            }
            break;
        case 'left':
            if (currentLeft > 0) {
                sprite.style.left = (currentLeft - 10) + 'px';
            }
            break;
        case 'right':
            if (currentLeft < 640) { // Adjust based on your boundary
                sprite.style.left = (currentLeft + 10) + 'px';
            }
            break;
    }

    updateButtonState(currentTop, currentLeft);
    searchEnemy();
}

function updateButtonState(currentTop, currentLeft) {
    btnUp.disabled = currentTop === 10;
    btnDown.disabled = currentTop >= 430;
    btnLeft.disabled = currentLeft <= 0;
    btnRight.disabled = currentLeft >= 640;
}

