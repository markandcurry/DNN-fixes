$.fn.equalHeights = function () {
    var max_height = 0;
    $(this).each(function () {
        max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function () {
        $(this).height(max_height);
    });
};


function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    //return os;
    console.log(os);

    document.body.setAttribute('class', os);
}

getOS();


$(document).ready(function () {

    // Activate the Carousel, but pause it from the start
    $("#eventsSlider").carousel("pause");

    // Add smooth scrolling to all links
    $(".smoothscroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.navbar-toggler').click(function () {
        $('.language-object').delay("slow").toggle();
    })

    $('.dnnSearchBoxClearText').attr('tabindex', '0');

    $(".Language[title|='English (United States)'] > a").attr('hreflang', '/').attr('tabindex', '0');
    $(".Language[title|='Español (Estados Unidos)'] > a").attr('hreflang', 'es-US').attr('tabindex', '0');
    $(".Language[title|='中文(中国)'] > a").attr('hreflang', 'zh-CN').attr('tabindex', '0');
    $(".Language[title|='English (United States)'] img").attr('alt', 'English');
    $(".Language[title|='Español (Estados Unidos)'] img").attr('alt', 'Español');
    $(".Language[title|='中文(中国)'] img").attr('alt', '中文');
    $(".Language[title|='中文(中国)']").attr('lang', 'zh-CN');

    $('.home-easy-steps-header').equalHeights();

    $('#eventsSlider').on('slide.bs.carousel', function () {
        $('.carousel-indicators > li.active, .carousel-item.active').attr('aria-current', 'false');
        $('.carousel-indicators > li.active, .carousel-item.active').next().attr('aria-current', 'true');
        $('.carousel-indicators > li:last-child.active, .carousel-item:last-child.active').prev().prev().attr('aria-current', 'true');
    })

    $('.searchInputContainer').attr({
        "data-moreresults": "See More Results",
        "data-noresult": "No Results Found",
        "role": "combobox",
        "aria-expanded": "true",
        "aria-owns": "ex1-listbox",
        "aria-haspopup": "listbox",
        "id": "ex1-combobox"
    });

    $('#dnn_dnnSearch_txtSearch').attr({
        "aria-autocomplete": "list",
        "aria-controls": "ex1-listbox",
        "aria-activedescendant": ""
    });

    $('#playButton').click(function () {
        $('#playButton').hide();
        $('#pauseButton').show();
        $('#carouselExampleIndicators').carousel('cycle');

    });
    $('#pauseButton').click(function () {
        $('#pauseButton').hide();
        $('#playButton').show();
        $('#carouselExampleIndicators').carousel('pause');
    });

    if ($('#dnn_dnnSearch_txtSearch').length > 0 && $('#dnn_dnnSearch_txtSearch').val() != '') {

        $('.searchSkinObjectPreview').attr({
            //"aria-labelledby": "ex1-label",
            "role": "listbox",
            "id": "result-item-0",
            "class": "listbox"
        });

        $('.searchSkinObjectPreview > li').attr({
            "role": "option"
        });
    }

    $('[lang="es-US"] .skip-link:first-child').text("Saltar al contenido principal");
    $('[lang="zh-CN"] .skip-link:first-child').text("跳到主要内容");

    $('#top').attr('aria-label', "Top Navigation");

    $('.nav-link.dropdown-toggle').each(function (i) {
        $(this).attr('id', 'navbarDropdownMenuLink' + i);
        $(this).next().attr('aria-labelledby', 'navbarDropdownMenuLink' + i);
        i++;
    });

});
