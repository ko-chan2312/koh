$(function(){
  $(window).scroll(function (){
    $('.container').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin');
        }
    });
});
});

$(function(){
    $('.header-right-iphone').click(function(){
      var $list =$(this).find('.menu-list');
      if($list.hasClass('open')){
        $list.removeClass('open');
        $list.slideUp();
      }else{
        $list.addClass('open');
        $list.slideDown();
      }
    });
  });
