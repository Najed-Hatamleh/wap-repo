"use strict"

$(document).ready(function() {
    let circuleCreationTimer;
    let circuleOpacityTimer;

    $('.start').on('click', function() {
        let circulesNumber = parseInt($('#set-circules-count').val());
        if(circulesNumber <= 0) {
            return;
        }

        let createdElement;
        let circulesWidth = $('.circules').width();
        while(circulesNumber-- > 0) {
           createdElement = $("<div class='circule'><div>");
           createdElement.css("background-color", getRandomColor());
           createdElement.css("left", Math.floor(circulesWidth * Math.random()));
           createdElement.appendTo(".circules");
        }

        $('.circule').css('width', parseInt($('#set-width').val()));
        $('.circule').css('height', parseInt($('#set-width').val()));

        circuleCreationTimer = setInterval(grow, parseInt($('#set-growth-rate').val()), $('.circule'));
    });

    $(document).on('click', '.circule', function() {
        this.remove();
        clearInterval(circuleCreationTimer);
    });

    $(document).on('mouseenter', '.circule', function() {
        circuleOpacityTimer = setInterval(opactiy, 1000, $(this));
    });

    $(document).on('mouseleave', '.circule', function() {
        $(this).css("opactiy", 1.0);
        clearInterval(circuleOpacityTimer);
    });
});

function grow(element) {
    element.css('height', element.height() + parseInt($('#set-growth-amount').val()));
    element.css('width', element.width() + parseInt($('#set-growth-amount').val()));
}

function opactiy(element) {
    element.css("opacity", element.css("opacity") - 0.3);
}

// Some guidunce from the internet, refereance: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
