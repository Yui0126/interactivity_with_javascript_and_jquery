$('nav ul li a').click(function() {
    var thisSection = $(this).attr('href');
    var thisLink = $(this);
    $('html').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 800, 'easeOutCirc', function() {
        $('nav ul li a').removeAttr('class');
        thisLink.addClass('selected');
    });
});

$(window).on('load', function() {
    var posts = $('section');
    var pageTop;
    var postPos;
    var counter = 0;
    var postTops = [];

    posts.each(function() {
        postTops.push(Math.floor($(this).offset().top));
    });

    console.log(postTops[3]);

    $(window).scroll(function() {
        pageTop = $(window).scrollTop() + 210;
        console.log(pageTop);
        if (pageTop > postTops[counter + 1]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        } else if (counter > 0 && pageTop < postTops[counter]) {
            counter--;
            console.log(`scrolling up! ${counter}`);
        }
    });
});