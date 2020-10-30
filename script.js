let $menu = $('<div id="horizMenu" class = "menuHoriz"></div>').appendTo("body");

// < a href = "#top" > Наверх < /a>

let $sectionOne = $('<a href="#sectionOne" class = "ancorMenu">LATEST NEWS</a>').appendTo("#horizMenu");
let $sectionTwo = $('<a href="#sectionTwo" class = "ancorMenu">popular posts</a>').appendTo("#horizMenu");
let $sectionThree = $('<a href="#sectionThree" class = "ancorMenu">popular clients</a>').appendTo("#horizMenu");
let $sectionFour = $('<a href="#sectionFour" class = "ancorMenu">top rated</a>').appendTo("#horizMenu");
let $sectionFive = $('<a href="#sectionFive" class = "ancorMenu">hot news</a>').appendTo("#horizMenu");

$('<a id = "sectionOne" ></a> ').prependTo(".menu1>h2");
$('<a id = "sectionTwo" ></a>').prependTo(".container");
$(' <a id = "sectionThree" ></a> ').prependTo(".grid1");
$('<a id = "sectionFour" ></a> ').prependTo(".topRat");
$('<a id = "sectionFive" ></a>').prependTo(".hotNews");

$("#horizMenu").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
});


let $btn = $('<button>UP</button>')

$btn.css({
    "display": "none",
    "background-color": "gray",
    "width": "50px",
    "height": "50px",
    "text-align": "center",
    "border-radius": "4px",
    "margin": "30px",
    "position": "fixed",
    "bottom": "30px",
    "right": "30px",
    "transition": "background-color .3s",
    "z-index": "1000",
    "cursor": "pointer",
});
$btn.appendTo("body");


$(window).scroll(function() {
    if ($(window).scrollTop() > 150) {

        $btn.css("display", "inline-block");
    } else {
        $btn.css("display", "none");
    }

});
$btn.on('click', function(elem) {
    $('body,html').animate({ scrollTop: 0 }, '1200');
    elem.preventDefault();
});

let $btnSlide = $('<button>show/hide</button>')
$btnSlide.css({
    "display": "inline-block",
    "background-color": "green",
    "width": "150px",
    "height": "50px",
    "text-align": "center",
    "border-radius": "4px",
    "margin": "30px",
    "position": "absolute",
    "bottom": "30px",
    "left": "30px",
    "z-index": "1000",
    "cursor": "pointer",
});
$btnSlide.appendTo(".container");

$btnSlide.on('click', function(elem) {
    $(".menu2").slideToggle();
    elem.preventDefault();
});