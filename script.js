/*
iOS 5 Folder effect 

    using   jQuery 1.7.1
            jquery.cookie.js
            
    Copyright © 2011 Gregor Adams http://pixelass.com
            
*///////////

$(document).ready(function() {

//prevent default behavior
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    
//the main variables
    var icon = $('.icon'),
        iconFolderIcon = $('.icon.folder'),
        iconFolder = $('.clicked').parent(),
        iconBelow = $('.iconwrapper.below'),
        allIcons = $('.iconwrapper'),
        offsetControl = $('#innerbox'),
        upperImage = $('.box.top'),
        lowerImage = $('.box.bottom'),
        underImage = $('.box.under'),
        upperArrow = $('.arrow.top'),
        lowerArrow = $('.arrow.bottom'),
        folderLabel = $('label#folder'),
        marginTop = 30,
        iconHeight = 87,
        iconWidth = 77,
        pageHeight = 480,
        pageWidth = 320,
        p = $("#folder1");



//open the folder
    function openiOSFolder() {
        p = $(".clicked");
        position = p.position();
        folderRows = 2; 
        folderYPos = position.top;
        folderY = folderYPos - 40;
        folderRow = Math.round((folderY + iconHeight) / iconHeight);
        folderRowID = folderRow - 2;
        folderXPos = position.left + 20;
        folderX = folderXPos;
        folderCol = Math.round((folderX + iconWidth) / iconWidth);
        pageNumber = Math.round(folderCol / 4 + 0.25);
        imageBottomoffset = -1 * (120 + folderY);
        arrowOffset = -1 * (100 + folderY);
        folderLabel = p.parent().find('label');
        allIcons = $('.iconwrapper:not(.opened)');
        $('.below').removeClass('below');
        iconNumber = (folderRow - 1) * 4 + folderCol;
        iconsAbove = 4 * folderRow;
            iconIconID = p.attr('id');
            iconIconIDNo = iconIconID.substring(6, 8, iconIconID.indexOf("folder"));
        icon.each(function() {
            iconID = $(this).parent().attr('id');
            iconIDNo = iconID.substring(5, 7, iconID.indexOf("icon-"));
            if (iconIDNo > iconsAbove) {
                $(this).parent('.iconwrapper').addClass('below');
            }
        });
            console.log('Folder Number: ' + (iconIconIDNo * 1 + 1));
        if (iconNumber === 5 || iconNumber === 3 || iconNumber === 16) {
            folderRows = 3;
        } else if (iconNumber === 4) {
            folderRows = 1; 
        } else if (iconNumber === 10) {
            folderRows = 2.5;
        }
        folderHeight = 10 + iconHeight * folderRows;
        fullHeight = (folderHeight + 10 + iconHeight * folderRow);
        FADING_TIME = 600;
        FADING_TIME2 = FADING_TIME / 1.5 + FADING_TIME;
        if (!$(lowerImage).hasClass('down')) {
            lowerImage.removeClass('is-down');
            if (fullHeight > 400) {
                offsetControl.css('-webkit-transition', '-webkit-transform ' + FADING_TIME + 'ms').css('-webkit-transform', 'translateY(-' + (fullHeight - 400) + 'px)');
            }
            if (iconNumber === 10) {
                underImage.css("background-image", 'url("ios-wood.png")');
                upperArrow.find(".inside-arrow").css("background-image", 'url("ios-wood.png")');
            } else {
                underImage.css("background-image", 'url("fabric2.png")');
                upperArrow.find(".inside-arrow").css("background-image", 'url("fabric2.png")');

            }
            iconBelow = $('.iconwrapper.below');
            underImage.css('top', (folderY + 106) + 'px');
            upperImage.css('height', (folderY + 116) + 'px').addClass('down');
            lowerImage.addClass('down').css('height', (480 - (folderY + 116)) + 'px').css('top', (folderY + 118) + 'px').css('background-position', '0px ' + imageBottomoffset + 'px').css('-webkit-transition', '-webkit-transform ' + FADING_TIME + 'ms').css('-webkit-transform', 'translate3d(0,' + folderHeight + 'px,0)');
            upperArrow.find('.inside-arrow').css('background-position', '-' + (folderX - 6) + 'px -468px');
            lowerArrow.find('.inside-arrow').css('background-position', '-' + (folderX - 4) + 'px ' + arrowOffset + 'px');
            upperArrow.addClass('down').removeClass('up').css('left', folderX + 'px').css('-webkit-transition', 'opacity  0ms').css('-webkit-transition-delay', '0ms').css('opacity', '1');
            lowerArrow.addClass('down').css('left', folderX + 'px').removeClass('up');
            folderLabel.css('-webkit-transition', 'opacity  0ms').css('-webkit-transition-delay', '0ms').css('opacity', '0').addClass('down').removeClass('up')
            allIcons.css('-webkit-transition', 'all ' + FADING_TIME + 'ms').css('opacity', '0.2');
            iconBelow.css('-webkit-transform', 'translate3d(0,' + folderHeight + 'px,0)');
            console.log('Column: ' + folderCol + ' __ Row: ' + folderRow + ' __ Icon Number: ' + iconNumber + ' __ Full Height: ' + fullHeight);
            setTimeout(function() {
                lowerImage.addClass('is-down');
            }, 600);
            $('body').append('<div id="folder-overlay" style="height:480px;width:320px;position:fixed;z-index:9999;"></div>');
            folderOverlay = $('#folder-overlay');
            folderOverlay.bind('click', closeiOSFolder);

        }

    }
//close the folder

    function closeiOSFolder() {
        if (lowerImage.hasClass('is-down')) {
            upperImage.removeClass('down');
            lowerImage.removeClass('down').css('-webkit-transition', '-webkit-transform ' + FADING_TIME + 'ms').css('-webkit-transform', 'translate3d(0,0,0)');
            upperArrow.addClass('up').removeClass('down').css('-webkit-transition', 'opacity  0ms').css('-webkit-transition-delay', '0ms').css('opacity', '0');
            lowerArrow.addClass('up').removeClass('down');
            folderLabel.parent('.iconwrapper').addClass('up');
            folderLabel.removeClass('down').addClass('up').css('-webkit-transition', 'opacity  0ms').css('-webkit-transition-delay', '0ms').css('opacity', '1');
            allIcons.css('-webkit-transition', 'all ' + FADING_TIME + 'ms').css('opacity', '1').css('-webkit-transform', 'translate3d(0,0,0)');
            p.removeClass('clicked');
            p.parent().removeClass('opened');
            lowerImage.removeClass('is-down');
            folderOverlay.unbind('click', closeiOSFolder);
            folderOverlay.remove();
            if (fullHeight > 400) {
                offsetControl.css('-webkit-transition', '-webkit-transform ' + FADING_TIME + 'ms').css('-webkit-transform', 'translate3d(0,0,0)');
            }
        }
    }


    wallpapers();

    iconFolderIcon.click(function() {
        $(this).addClass('clicked');
        $(this).parent().addClass('active').addClass('opened');
    }).bind('click', openiOSFolder);
});