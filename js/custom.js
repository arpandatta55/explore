// col-2-slide-js=============== 01 =========================

$(window).on('load resize orientationchange', function () {
    $('.services-slider').each(function () {
        var $carousel = $(this);
        if ($(window).width() > 991) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        } else {
            if (!$carousel.hasClass('slick-initialized')) {
                $('.services-slider').slick({
                    dots: true,
                    infinite: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }]
                });
            }
        }
    });
});

// simple-slider======== 02 =========================

// $('.work-slider').slick({
//     infinite: true,
//     arrows: false,

//     // speed: 4000,
//     autoplay: true,
//     centerMode: true,
//     centerPadding: '0px',
//     pauseOnHover: true,
//     autoplaySpeed: 2000,
//     // cssEase: 'linear',
//     slidesToShow: 2,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });


// sticky-header========================= 03 ====================
// on scroll add class
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $("body").addClass("sticky_hdr");
        } else {
            $("body").removeClass("sticky_hdr");
        }
    });
});

// ==============================  04 =====================================

// remove # from url
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 100, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


$(function () {

    var link = $('.naav-mnu a');

    // Move to specific section when click on menu link
    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 200);
        $(this).addClass('active_one');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        scrNav();
    });

    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active_one');
                $('.naav-mnu').find('[data-scroll="' + id + '"]').addClass('active_one');
            }
        });
    }
    scrNav();
});



// =========================== 05 ============================================

$(document).ready(function () {
    $('.showmore').click(function () {

        $('.explore .col-md-4:nth-child(n+4)').slideToggle(800)

        $('.showmore').text(($('.showmore').text() == 'Show Less') ?
            'Show More' : 'Show Less');
    });


    $('.ftr-card h4').click(function () {
        $(this).next('ul').slideToggle(800)
    });

});

// progressbar================ 06 ====================

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};


// counter-js--------- 07 ---------------

$('.count').countUp();

// $(document).ready(function () {
//     $("#demo-calendar-basic").zabuto_calendar();
// });





// Initialize jQuery UI datepicker as inline
$(function () {
    $("#date").datepicker({
        defaultDate: 0, // Show calendar with current date pre-selected
        minDate: 0, // Block past dates
        // onSelect callback to update the hidden input
        onSelect: function (dateText) {
            $("#selected-date").val(dateText);
        },
        // Disable specific dates or date ranges
        beforeShowDay: function (date) {
            // Define the blocked dates
            var blockedDates = ["2023-10-15", "2023-10-16"];

            // Format the date as "yy-mm-dd"
            var formattedDate = $.datepicker.formatDate("yy-mm-dd", date);

            // Check if the formatted date is in the blockedDates array
            if ($.inArray(formattedDate, blockedDates) !== -1) {
                return [false, "blocked-date", "This date is not available"];
            }

            // Enable all other dates
            return [true, "", ""];
        }
    });
});

// jQuery(document).ready(function () {
//     jQuery('#datepicker').datepicker({
//         format: 'dd-mm-yyyy',
//         startDate: '+1d'
//     });
// });