$(document).ready(function () {

    var counter = 0;
    $navItems = $('.slideShow .navNums span'),
        numNav = $navItems.length;
    $items = $('.slideShow figure'),
        numItems = $items.length;

    var showCurrent = function () {
        var itemToShow = Math.abs(counter % numItems);
        $items.removeClass('show');
        $navItems.removeClass('show');
        $items.eq(itemToShow).addClass('show');
        $navItems.eq(itemToShow).addClass('show');
    };

    $('.next').on('click', function () {
        counter++;
        showCurrent();
    });
    $('.prev').on('click', function () {
        counter--;
        showCurrent();
    });
    
    $('.nav1').on('click', function(){
        counter = 0;
        console.log("Nav 1 Clicked");
        showCurrent();
        
    });
    $('.nav2').on('click', function(){
        counter = 1;
        console.log("Nav 2 Clicked");
        showCurrent();
    });
    $('.nav3').on('click', function(){
        counter = 2;
        console.log("Nav 3 Clicked");
        showCurrent();
    });

});     