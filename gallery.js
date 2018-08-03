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

var threeCol = false;
$(document).ready(function(){

    //  Handle the default case: window was opened with a larger width
    if(document.documentElement.clientWidth >= 1400)
    {
        useThreeColumns();
        threeCol = true;
    }

    $(window).on('resize', function()
    {

        if(document.documentElement.clientWidth >= 1400 && !threeCol)
        {
            useThreeColumns();

            threeCol = true;
        }
        else if(document.documentElement.clientWidth < 1400 && threeCol)
        {
            useTwoColumns();
            threeCol = false;
        }

    });
});

function useThreeColumns()
{
    // Count all of the images in the columns
    // Divide those amongst the columns
    // This method can easily be generalized to n columns.
    var images = $(".left").children().toArray();
    images = images.concat($(".right").children().toArray());

    var imagesPerCol = Math.ceil((images.length) / 3); // Rounding up so that the leftmost columns definitely get their shares of images.
    var target = $(".left"); // Col to fill
    var currentIndex = 0;
    for(var i = 0; i < 3; i++)
    {
        for(var j = 0; j < imagesPerCol; j++)
        {
            if(currentIndex == images.length)
                break;
            target.append(images[currentIndex++]);
        }
        target = target.next();
    }
}

function useTwoColumns()
{
    var images = $(".left").children().toArray();
    images = images.concat($(".right").children().toArray());
    images = images.concat($(".right-L").children().toArray());

    var imagesPerCol = Math.ceil((images.length) / 2); // Rounding up so that the leftmost columns definitely get their shares of images.
    var target = $(".left"); // Col to fill
    var currentIndex = 0;
    for(var i = 0; i < 2; i++)
    {
        for(var j = 0; j < imagesPerCol; j++)
        {
            if(currentIndex == images.length)
                break;
            target.append(images[currentIndex++]);
        }
        target = target.next();
    }
}