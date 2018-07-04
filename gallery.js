var navBar = document.getElementById('navBar');
var navItems = document.getElementById('navItems');

var navTg = false;

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