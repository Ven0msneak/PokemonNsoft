const sprite = document.getElementById("spritecontainer");
const btnUp = document.getElementById("btnUp");
var pokemon = [
    { name: "qwilfish", src: "Pokemon/qwilfish.png" },
    { name: "diglett", src: "Pokemon/diglett.png" },
    { name: "shelmet", src: "Pokemon/shelmet.png" },
    { name: "Couldn't find anything.", src: "Pokemon/pokeball-n.jpg" }  // Example of an empty Pokémon
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

function moveDown()
{
    let currentTop = parseInt(window.getComputedStyle(sprite).top, 10);
    

    if (currentTop === 430)
    {
    	btnDown.disabled = true;
    }

    if (currentTop === 0 )
    { 
    	btnUp.disabled = false; 
    }

    sprite.style.top = (currentTop + 10) + 'px';
    searchEnemy();
}

function moveLeft()
{
    let currentLeft = parseInt(window.getComputedStyle(sprite).left, 10);
    sprite.style.left = (currentLeft - 10) + 'px';
    if (currentLeft === 0 )
    {
    	btnLeft.disabled = true;
    }

    if (currentLeft <= 650) 
    { 
    	btnRight.disabled = false; 
    }
    searchEnemy()
}

function moveRight()
{
	let currentLeft = parseInt(window.getComputedStyle(sprite).left, 10);
    sprite.style.left = (currentLeft + 10) + 'px';

    if (currentLeft === 640)
    {
    	btnRight.disabled = true;
    }

    if (currentLeft <= 0)
    { 
    	btnLeft.disabled = false; 
    }
    searchEnemy()
}



