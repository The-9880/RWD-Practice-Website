var sb = document.getElementById('sidebar');
var sbItems = document.getElementById('sidebar-items');
var content = document.getElementById('content');
var container = document.getElementById('container');

var sbTog = false;

function sideBarToggle()
{
    if(!sbTog)
    {
        sb.style.width = "7%";
        sbItems.style.visibility = "visible";
        sbItems.style.opacity = 1;
        sbTog = true;
    }
    else
    {
        sb.style.width = "2%";
        sbItems.style.visibility = "hidden";
        sbItems.style.opacity = 0;
        sbTog = false;
    }
}