function move(tg, start, end){
    tg.css({'left':start}).stop().animate({left:end},500)//
}
$(function(){
    let banner=$('#slide ul li'),
    current = 0;
    setInterval(function(){
        let prev = banner.eq(current);
        current++;
        move(prev, 0, '100%');
        if(current == banner.size()){
            current = 0;
        }
        let next = banner.eq(current);
        move(next, '-100%', 0 );
    },2000);
});


$('#nav ul li').hover(function(){
    $(this).find('ul').stop().slideDown()
}, function(){
    $(this).find('ul').stop().slideUp()
});


//팝업
$('.popup').click(function(){
    $('.pop').fadeIn();
});
$('.btn').click(function(){
    $('.pop').fadeOut();
});