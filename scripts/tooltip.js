$(document).ready(function(){
    $('span[rel=tooltip]').mouseover(function(e){
       var tip =  $(this).attr('title');
        $(this).attr('title', '');
        
        $(this).append('<div id="tooltip"><div class="tooltipHeader"></div><div class="tooltipBody">' + tip + '</div><div class="tooltipFooter></div></div>');
        
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 20);
        $('#tooltip').fadeIn('500');
        $('#tooltip').fadeTo('10',0.8);
    }).mousemove(function(e){
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 20);
    }).mouseout(function(){
       $(this).attr('title', $('.tooltipBody').html());
        $(this).children('div#tooltip').remove();
    });
});
