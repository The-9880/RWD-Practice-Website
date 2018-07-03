var sb = document.getElementById('sidebar');
var sbItems = document.getElementById('sidebar-items');
var content = document.getElementById('content');
var container = document.getElementById('container');


// desktop = 0, tablet = 1, mobile = 2
const sbPercentages = [["7%", "2%"], ["12%","5%"], [undefined, undefined]];

var sbTog = false;

function sideBarToggle()
{
    var visualWidth = document.documentElement.clientWidth;
    var deviceType;

    if(visualWidth > 768)
    {
        deviceType = 0;
    }
    else if (visualWidth > 400)
    {
        deviceType = 1;
    }
    else
    {
        deviceType = 2;
    }

    if(!sbTog)
    {
            sb.style.width = sbPercentages[deviceType][0];
            sbItems.style.visibility = "visible";
            sbItems.style.opacity = 1;
            sbTog = true;
    }
    else
    {
            sb.style.width = sbPercentages[deviceType][1];
            sbItems.style.visibility = "hidden";
            sbItems.style.opacity = 0;
            sbTog = false;
    }
}