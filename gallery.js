var navBar = document.getElementById('navBar');
var navItems = document.getElementById('navItems');
var navTg = false;

var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');
var modalCaption = document.getElementById('modalCaption');

function navToggle()
{
    if(document.documentElement.clientWidth >= 1400)
    {
        if(!navTg)
            navBar.classList.add("col-s-1");
        else
            navBar.classList.remove("col-s-1");
    }

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
    var imgSrc = element.getElementsByClassName('imgCard')[0].childNodes[0].src; // Assumes the first child of an imgCard div is the image
    var caption = element.getElementsByTagName('span')[0].innerHTML; // Assumes first span is the image caption

    modalImage.src = imgSrc;
    modalCaption.innerHTML = caption;
    modal.style.display = "block";
}