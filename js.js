$(document).ready(move);

function move() {

    moveGreen('#greenMoveLeft', '#greenMoveRight', '#greenMoveUp', '#greenMoveDown', '#greenReset', '#greenBlock');
    moveBlue('#blueMoveLeft', '#blueMoveRight', '#blueMoveUp', '#blueMoveDown', '#blueReset', '#blueBlock');
    moveRed('#redMoveLeft', '#redMoveRight', '#redMoveUp', '#redMoveDown', '#redReset', '#redBlock');

    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            $("#greenBlock").animate({
                left: '-=50px'
            });
        } else if (e.keyCode == 38) {
            $("#greenBlock").animate({
                top: '-=50px'
            });
        } else if (e.keyCode == 39) {
            $("#greenBlock").animate({
                left: '+=50px'
            });
        } else if (e.keyCode == 40) {
            $("#greenBlock").animate({
                top: '+=50px'
            });
        }
    });
}

function moveGreen(l, r, u, d, reset, b) {
    $(l).click(function () {
        $(b).animate({
            left: '-=50px'
        });
    });
    $(r).click(function () {
        $(b).animate({
            left: '+=50px'
        });
    });
    $(u).click(function () {
        $(b).animate({
            top: '-=50px'
        });
    });
    $(d).click(function () {
        $(b).animate({
            top: '+=50px'
        });
    });
    $(reset).click(function () {
        $(b).animate({
            top: '50%',
            left: '25%'
        });
    });
}

function moveBlue(l, r, u, d, reset, b) {
    $(l).click(function () {
        $(b).animate({
            left: '-=50px'
        });
    });
    $(r).click(function () {
        $(b).animate({
            left: '+=50px'
        });
    });
    $(u).click(function () {
        $(b).animate({
            top: '-=50px'
        });
    });
    $(d).click(function () {
        $(b).animate({
            top: '+=50px'
        });
    });
    $(reset).click(function () {
        $(b).animate({
            top: '50%',
            left: '50%'
        });
    });
}

function moveRed(l, r, u, d, reset, b) {
    $(l).click(function () {
        $(b).animate({
            left: '-=50px'
        });
    });
    $(r).click(function () {
        $(b).animate({
            left: '+=50px'
        });
    });
    $(u).click(function () {
        $(b).animate({
            top: '-=50px'
        });
    });
    $(d).click(function () {
        $(b).animate({
            top: '+=50px'
        });
    });
    $(reset).click(function () {
        $(b).animate({
            top: '50%',
            left: '75%'
        });
    });
}