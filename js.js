const sprite = document.getElementById("spritecontainer");
const btnUp = document.getElementById("btnUp");

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
}



