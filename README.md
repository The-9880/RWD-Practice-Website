# RWD-Practice-Website
Some scribbling I did to play with RWD and general design concepts. Has a (bad) homepage and a gallery page, both of which aim to be responsive.

## Motive and Overview
No planning went into this. None whatsoever. I was reading a bit about RWD and web design, and thought I'd like to tinker around with some
of the concepts and applications. It turned out to be really fun and educational, and I plan on doing a few serious web design/development projects
later.

I could've added a lot more to this: a proper slideshow mode for the gallery, a rework of the homepage with more content, the two other pages 
which are mentioned in the navigation bar but were never actually created. I cut it off at this point because I've gotten far enough into
it that I have a better respect for the key considerations of design and to know that I enjoy working on this kind of project. So with
that in mind, I'd like to start on another project which isn't random (as you'll notice, this website is about gibberish) and is
planned-out beforehand.

## Content
There's an index page and a gallery page. The other pages in the navigation bar are just placeholders. The navbar switches between being
on the side of the screen and being on the top of the screen, depending on the screen width (mobile has a top-navbar).

The gallery page has a similar navbar, a clean black-and-white theme with a two-column display for mobile screens and a three-column display
for laptops and larger. This page uses a touch of JQuery just to shift the images around between columns, when changing screen width. It
also uses a modal display to enlarge selected images.

## Observations
I like the gallery page - it's not at all fancy, but it's elegant and fluid. I used JQuery on this page to shift some of the content around when the screen width is sufficient, and I designed it with a mobile-first mindset.

When I started this little project, I went into it with no planning at all. Just opened the editor and started writing.
The homepage, as a result, is pretty disgusting; I freely admit this. Like, I honestly have no idea why I went the way I did with that. I started it with a desktop implementation and then tried to scale that to mobile, which hit a few bumps - so I created a new file and started working on a gallery to distract myself.
After working on the gallery for some time, I discovered it's much easier to start with mobile and then scale up.

I used Chrome's developer mode to help decide on threshold points for layout changes and media queries.

## Next
I'm going to spend some time studying design and layouts, choose from one of the ideas that popped into my head while I was working on this, and then get to it. I'll also be getting back into some AI projects.
