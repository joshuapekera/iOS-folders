function wallpapers() {
    var imgLink = 'wallpaper1.png',
        imageTOP = $(".box.image.top"),
        imageBOTTOM = $(".box.image.bottom"),
        arrowwBOTTOM = $(".inside-arrow.bottom"),
        imgCookieLink = $.cookie("wallpaperx");
    $(".wall1").click(function() {
        imgLink = 'color-rainbow-retina.png';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall2").click(function() {
        imgLink = 'wallpaper1.jpeg';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall3").click(function() {
        imgLink = 'wallpaper2.jpeg';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall4").click(function() {
        imgLink = 'wallpaper3.jpeg';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall5").click(function() {
        imgLink = 'wallpaper4.png';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall6").click(function() {
        imgLink = 'wallpaper5.png';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    $(".wall7").click(function() {
        imgLink = 'wallpaper6.png';
        $.cookie("wallpaperx", imgLink, {
            expires: 365
        });
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('set bg' + imgLink);
    });
    wallcookie = $.cookie("wallpaperx");
    if (wallcookie) {
        imgCookieLink = $.cookie("wallpaperx");
        imageTOP.css("background-image", 'url("' + imgCookieLink + '")');
        imageBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        arrowwBOTTOM.css("background-image", 'url("' + imgCookieLink + '")');
        console.log('cookie redo ' + imgCookieLink);
    }
}


