var sb = document.getElementById('sidebar');
var sbItems = document.getElementById('sidebar-items');
var content = document.getElementById('content');
var container = document.getElementById('container');


// desktop = 0, tablet = 1, mobile = 2
const sbPercentages = ["7%", "12%", undefined];
const untoggleWidth = "calc(40px + 20 * ((100vw - 440px) / 1000))";

var sbTog = false;

function sideBarToggle()
{
    // If in desktop mode, expand and change width. Do not do this in mobile mode.
    // Toggle menu item display regardless of what mode it's in.

    var visualWidth = document.documentElement.clientWidth;

    if(visualWidth > 835)
    {
        if(!sbTog)
        {
            sb.classList.remove("sidebarWidth");
            sb.classList.add("col-1");
        }
        else
        {
            sb.classList.remove("col-1");
            sb.classList.add("sidebarWidth");
        }
    }

    if(!sbTog)
    {
        sbItems.style.display = "flex";
        sbTog = true;
    }
    else
    {
        sbItems.style.display = "none";
        sbTog = false;
    }

}