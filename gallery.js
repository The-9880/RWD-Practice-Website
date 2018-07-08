var navBar = document.getElementById('navBar');
var navItems = document.getElementById('navItems');
var navTg = false;

var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');
var modalCaption = document.getElementById('modalCaption');

function navToggle()
{
    if(!navTg)
    {
        navItems.style.display = "flex";
        navTg = true;
    }
    else
    {
        navItems.style.display = "none";
        navTg = false;
    }
}

function imageModal(element)
{
    var image = document.getElementsByTagName('img');
    image = image[element-1];
    console.log(image.src);
    
    var caption = document.getElementsByTagName('span');
    caption = caption[element-1];


    modalImage.src = image.src;
    modalCaption.innerHTML = caption.innerHTML;
    modal.style.display = "block";
}