// window.addEventListener('scroll', function() {
//     const parallax = document.getElementById('parallax-img');
//     const scrollPosition = window.scrollY;
//     parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
// });

$(window).scroll(function() {
    // console.log('Scroll event triggered');
    var scrollPos = $(this).scrollTop();
    $("#parallax-img").css({
        // 'background-size' : 100 + scrollPos + '%'
        // 'transform' : 'translateX(' + scrollPos * 0.5 + 'px)',
        // 'transform' : 'translateY(-' + scrollPos * 0.5 + 'px)'
        'transform' : 'scale(' + (1 + scrollPos * 0.0005) + ')'
    });
    
    
});



const events = ["./asset/korea.jpeg", "./asset/miko.jpeg", "./asset/crescentMoon.jpeg"]
const description = ["BLLM is coming to Korea", "Free Miko 911 Porsche giveaway", "Upcoming race in the Crescent Moon"]

var currEvent = 0;

const slideDuration = 600; // Duration of the slide animation in milliseconds

function showSlide(newIndex) {
    $('#carousel-img').fadeOut(slideDuration, function() {
        $('#carousel-img').attr('src', events[newIndex]);
        $('#carousel-img').fadeIn(slideDuration);
    });
    $('.carousel-desc').html(description[newIndex])
}

// $('#next-btn').on("click", () => {
//     currEvent = (currEvent + 1) % 3;
//     $('#carousel-img').attr("src", events[currEvent]);
// });
// $('#prev-btn').on("click", () => {
//     if(currEvent - 1 > -1) {
//         currEvent = currEvent - 1;
//     } else {
//         currEvent = events.length - 1;
//     }
//     $('#carousel-img').attr("src", events[currEvent]);
// });

$('#next-btn').on("click", () => {
    console.log("clicked")
    currEvent = (currEvent + 1) % events.length;
    showSlide(currEvent);
});

$('#prev-btn').on("click", () => {
    if(currEvent - 1 > -1) {
        currEvent = currEvent - 1;
    } else {
        currEvent = events.length - 1;
    }
    showSlide(currEvent);
});