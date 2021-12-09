$(document).ready(function(){
    $('header nav > ul > li').hover(function(){
        $('.sub_bg').stop().slideDown(300);
        $('header').addClass('active');
    },
    function(){
        $('.sub_bg').stop().slideUp(300);
        $('header').removeClass('active');
    });
    //메인 비주얼 슬라이드
    $('.num ul li').click(function(e){
        e.preventDefault();
        var numIndex=$(this).index();
        $('.num ul li').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.photo ul li').each(function(){
            var photoIndex=$(this).index();
            if(photoIndex == numIndex){
                $('.photo ul li').hide();
                $(this).fadeIn();
            }
        });
        $('.des ul li').each(function(){
            var desIndex=$(this).index();
            if(numIndex == desIndex){
                $('.dex ul li').hide();
                $(this).fadeIn();
            }
        });
    });
    var sw=0;
    $('.btn a').click(function(e){
        e.preventDefault();
        if(sw==0){
            sw=1;
            clearInterval(auto);
            $(this).addClass('active');
        }else{
            sw=0;
            auto=setInterval(fn, 3000);
            $(this).removeClass('active');
        }
    });
    var numLi=0;
    var auto=setInterval(fn, 3000);
    function fn(){
        numLi += 1;
        if(numLi > 2) { numLi=0; }
        $('.num ul li').eq(numLi).click();
    }

    //product (탭메뉴)
    $('.product_list ul li').click(function(){
        $('.product_list ul li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.t1').click(function(){
        $('.product_des ul li').hide();
        $('.d1').fadeIn();
        $('.product2 ul li').hide();
        $('.img1').fadeIn();
    });
    $('.t2').click(function(){
        $('.product_des ul li').hide();
        $('.d2').fadeIn();
        $('.product2 ul li').hide();
        $('.img2').fadeIn();
    });
    $('.t3').click(function(){
        $('.product_des ul li').hide();
        $('.d3').fadeIn();
        $('.product2 ul li').hide();
        $('.img3').fadeIn();
    });
    $('.swiper').hover(function(){
        swiper.autoplay.stop();
    }, function(){
        swiper.autoplay.start();
    });
})
