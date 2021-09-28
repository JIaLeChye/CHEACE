/*
function sendMail(){
    var contactName = $('#contactName').val();
    var contactMail = $('#contactMail').val();
    var contactPhone = $('#contactPhone').val();
    var contactMessage = $('#contactMessage').val();

    $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: { 
            'name': contactName, 
            'mail': contactMail,
            'phone' : contactPhone,
            'message' : contactMessage
        },
        success: function(msg){
            $('#messageBox').html(msg);
            $('#messageBox').show(500);
            
        }
    });
}
*/
function sendNew(action){
    if(action == 'new'){
        $('#formTemp').find('textarea').val('');
        $('#formTemp').find('textarea').focus();
    }
    $('#messageBox').hide(500);
    $('#messageBox').html('');
}

function navigateTo(section){
    $('.hideme').addClass('disabled');
    if($('#mobileMenuBtn').find('div').hasClass('open')){
        $('#mobileMenuBtn').find('div').removeClass('open');
        $('#menu').find('ul').stop().slideUp(200);

        setTimeout(function(){
            var body = $("html, body");
            var scrollTo = $(section).offset().top + 10;
            body.stop().animate({scrollTop:scrollTo}, 750);
        },350);
    }else{
        var body = $("html, body");
        var scrollTo = $(section).offset().top + 10;
        body.stop().animate({scrollTop:scrollTo}, 750);
    }
    setTimeout(function(){
    $('.hideme').removeClass('disabled');
    },1100);
}
function onStart(){
    var body = $("html, body");
    body.stop().animate({scrollTop:0},200);
    setTimeout(function(){
        if($(window).width()<735){
            $('#logoBracketLeftWrap').delay(200).animate({'margin-left':'30px'},600);
            $('#logoBracketRightWrap').delay(200).animate({'margin-left':'-30px'},600);
        }else{
            $('#logoBracketLeftWrap').animate({'margin-left':'80px'}, 800);
            $('#logoBracketRightWrap').animate({'margin-left':'-80px'}, 800);
        }
        setTimeout(function(){
            $('#logoBracketLeftWrap').animate({'margin-left':'0px'}, 300);
            $('#logoBracketRightWrap').animate({'margin-left':'0px'}, 300);
            $('#logoXWrap').delay(250).animate({'opacity':'1'}, 150);
            $('#logoTextWrap').animate({'opacity':'1','margin-top':'0px'}, 300);
            setTimeout(function(){
                $('#header').animate({'opacity':'1'},300);
                $('body').css('position','relative');
            },500);
        },1000);

    },100);
}
function preLoadImg(){
    $('#fixBg').css('background-image','url("assets/img/bg/section1_bg_mobile.jpg")');
    setTimeout(function(){
        $('#fixBg').css('background-image','url("assets/img/bg/section2_bg_mobile.jpg")');
        setTimeout(function(){
            $('#fixBg').css('background-image','url("assets/img/bg/section3_bg_mobile.jpg")');	
            setTimeout(function(){
                $('#fixBg').css('background-image','url("assets/img/bg/section3_bg.jpg")');
                setTimeout(function(){
                    $('#fixBg').css('background-image','url("assets/img/bg/section2_bg.jpg")');
                    setTimeout(function(){
                        $('#fixBg').css('background-image','url("assets/img/bg/section1_bg.jpg")');
                        setTimeout(function(){
                            $('#wrapper').animate({'opacity':'1'},500);
                        },500);
                    },500);
                },500);
            },500);
        },500);
    },500);
}
function fadeInOut() {
    
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($('.hideme'), function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass('animated')){
                $element.animate({'opacity':'1'}, 200);
                if($element.hasClass('fromBottom')){
                $element.animate({'margin-top':'0px'},500);
                }else if($element.hasClass('fromLeft') || $element.hasClass('fromRight')){
                $element.animate({'margin-left':'0px'},500);
                }
                $element.addClass('animated');
            }
        }
    });
    
}
function homeBtnDisplay() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    var $element = $('#home-section');
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $('#homeBtn').hide(500);
        $('#menu').css('color','white');
        $('#menu').find('ul').css('background-color','rgba(255,255,255,0.0)');
        $('.selectedStroke').css('background','white');
        $('#mobileMenuBtn').find('div').css('background','white');
    } else {
        $('#homeBtn').show(500);
        $('#menu').css('color','black');
        $('#menu').find('ul').css('background-color','rgba(255,255,255,0.8)');
        $('.selectedStroke').css('background','black');
        $('#mobileMenuBtn').find('div').css('background','black');
    }
}
function checkSize(){
    logoPosition();
    if($(window).width()<735){
        //$('#fixBg').css('background-image','url("assets/img/bg/section1_bg_mobile.jpg")');
        if(!$('#menu').hasClass('mobile')){
            $('#menu').addClass('mobile');
            $('#menu').find('ul').hide();
        }
        $('.dev-cirkel').removeClass('dynamic1 dynamic2 dynamic3');
        $('.con-info').removeClass('dynamic4');
        $('#mobileMenuBtn').show();
    }else{
        //$('#fixBg').css('background-image','url("assets/img/bg/section1_bg.jpg")');
        $('#menu').removeClass('mobile');
        $('#mobileMenuBtn').find('div').removeClass('open');
        $('#menu').find('ul').show();
        $('#mobileMenuBtn').hide();
        $('.static1').siblings('.dev-cirkel').addClass('dynamic1');
        $('.static2').siblings('.dev-cirkel').addClass('dynamic2');
        $('.static3').siblings('.dev-cirkel').addClass('dynamic3');
        $('.static4').siblings('.con-info').addClass('dynamic4');
    }
}
function changeBg(){
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    if(window_bottom_position > $('#aboutDivider').offset().top && window_bottom_position < $('#gameDivider').offset().top){

        $('#fixBg1').css('display','block');
        $('#fixBg2').css('display','none');
        $('#fixBg3').css('display','none');
        if(!$('#fixBg').hasClass('sec1')){
            $('#fixBg').removeAttr('class');
            $('#fixBg').addClass('sec1');
            $('#fixBg').css('background-image','url("assets/img/bg/section1_bg.jpg")');
        }
    }
    else if(window_bottom_position > $('#gameDivider').offset().top && window_bottom_position < $('#contactDivider').offset().top){

        $('#fixBg1').css('display','none');
        $('#fixBg2').css('display','block');
        $('#fixBg3').css('display','none');
        if(!$('#fixBg').hasClass('sec2')){
            $('#fixBg').removeAttr('class');
            $('#fixBg').addClass('sec2');
            $('#fixBg').css('background-image','url("assets/img/bg/section2_bg.jpg")');
        }
    }
    else if(window_bottom_position > $('#contactDivider').offset().top){
        
        $('#fixBg1').css('display','none');
        $('#fixBg2').css('display','none');
        $('#fixBg3').css('display','block');
        if(!$('#fixBg').hasClass('sec3')){
            $('#fixBg').removeAttr('class');
            $('#fixBg').addClass('sec3');
            $('#fixBg').css('background-image','url("assets/img/bg/section3_bg.jpg")');
        }
    }	
}
function changeMenu(){
    var window_top_position = $(window).scrollTop();
    var $newSelected;
    if(window_top_position < $('#aboutDivider').offset().top){
        $newSelected = $('#menuHome');
    }
    if(window_top_position > $('#aboutDivider').offset().top && window_top_position < $('#gameDivider').offset().top){
        $newSelected = $('#menuAbout');
    }
    if(window_top_position > $('#gameDivider').offset().top && window_top_position < $('#contactDivider').offset().top){
        $newSelected = $('#menuGames');
    }
    if(window_top_position > $('#contactDivider').offset().top){
        $newSelected = $('#menuContact');
    }
    var $oldSelected = $('#menu').find('.selected');
    if(!$newSelected.hasClass('selected')){
        $oldSelected.find('.selectedStroke').stop().hide(200);
        $oldSelected.removeClass('selected');
        $oldSelected.css('letter-spacing','0px');
        $newSelected.find('.selectedStroke').stop().show(200);
        $newSelected.addClass('selected');
        $newSelected.css('letter-spacing','5px');
    }
    
    
}
function logoPosition(){
    var height = $('.secLogoWrap').find('img').css('height');
    $('.secLogoWrap').css('top', 'calc( 50% - ( '+height+' / 2 ))');
}


$( document ).ready(function() {
    var animateFunctions = true;

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        animateFunctions=false;
    }

    setTimeout(function(){	
        $(window).on('scroll resize', function(){
            fadeInOut();
            homeBtnDisplay();
            checkSize();
            changeBg();
            changeMenu();
            //parrallax();
            for(var i=1;i<5;i++){
                $('.dynamic'+i).height($('.dynamic'+i).siblings('.static'+i).height());
                $('.dynamic2-'+i).height($('.dynamic2-'+i).siblings('.static2-'+i).height());
            }
        });

        $(window).trigger('scroll');

        $(window).mousemove(function( event ) {
            
            if($(window).width()>735 && animateFunctions == true){
                var pageCenterX = $(window).width() / 2;
                var mousePosX = event.pageX - pageCenterX;
                var shadowX = ( mousePosX * -1 ) / 40;

                var pageCenterY = $(window).height() / 2;
                var mousePosY = event.clientY - pageCenterY;
                var shadowY = ( mousePosY * -1 ) / 40;

                var xDist = mousePosX;
                if(xDist<0){
                    xDist = xDist * -1;
                }
                var yDist = mousePosY;
                if(yDist<0){
                    yDist = yDist * -1;
                }
                var distSquared = ( xDist * xDist ) + ( yDist * yDist );
                var dist = Math.sqrt(distSquared);
                var blur = dist / 40;
                
                $('.section-divider').find('b').css('text-shadow',''+shadowX+'px '+shadowY+'px '+blur+'px rgba(0,0,0,0.5)');
                $('#fixBg1').css('left', ((mousePosX/100) * -1) -100);
                $('#fixBg1').css('top', ((mousePosY/100) * -1) -100);
                $('#logoText').css('margin-left',(mousePosX/20) * -1);
                $('#logoText').css('margin-top',(mousePosY/20) * -1);
                $('#logoX').css('margin-left',(mousePosX/30) * -1);
                $('#logoX').css('margin-top',(mousePosY/30) * -1);

                $('#logoBracketLeft').css('margin-left',(mousePosX/50) * -1);
                $('#logoBracketLeft').css('margin-top',(mousePosY/50) * -1);
                $('#logoBracketRight').css('margin-left',(mousePosX/50) * -1);
                $('#logoBracketRight').css('margin-top',(mousePosY/50) * -1);
            }

        });
    },2100);

    
    $('#AM').hover(function(){
        $('#AM').parent('div').addClass('mouseOn');
    },function(){
        $('#AM').parent('div').removeClass('mouseOn');
    });

    $('#AM').click(function(){
        $('#AM').parent('div').addClass('on');
        $('#SM').parent('div').removeClass('on');
        $('.smClose').trigger('click');
        if($(window).width()>735){
            $('#SM').css('pointer-events','none');
            $('#SM').css('height','0vh');
            $('.amWrap').css('height','100vh');
        }else{
            $('.amWrap').css('height','100%');
        }
        $('.amWrap').css('padding-top','50px');
        
    });

    $('.amClose').click(function(){
        $('#AM').parent('div').removeClass('on');
        if($(window).width()<735){
            $('#SM').css('height','50vh');
        }else{
            $('#SM').css('pointer-events','auto');
            $('#SM').css('height','100vh');
        }
        $('.amWrap').css('height','0vh');
        $('.amWrap').css('padding-top','0px');
        
    });

    $('#SM').hover(function(){
        $('#SM').parent('div').addClass('mouseOn');
    },function(){
        $('#SM').parent('div').removeClass('mouseOn');
    });
    $('#SM').click(function(){
        $('#SM').parent('div').addClass('on');
        $('#AM').parent('div').removeClass('on');
        $('.amClose').trigger('click');
        if($(window).width()>735){
            $('#AM').css('pointer-events','none');
            $('#AM').css('height','0vh');
            $('.smWrap').css('height','100vh');
        }else{
            $('.smWrap').css('height','100%');
        }
        $('.smWrap').css('padding-top','50px');
    });
    $('.smClose').click(function(){
        $('#SM').parent('div').removeClass('on');
        if($(window).width()<735){
            $('#AM').css('height','50vh');
        }else{
            $('#AM').css('pointer-events','auto');
            $('#AM').css('height','100vh');
        }
        $('.smWrap').css('height','0vh');
        $('.smWrap').css('padding-top','0px');
    });
    
    $('#menu').find('li').click(function(){
        $(window).unbind('scroll');
        $(window).on('scroll resize', function(){
            homeBtnDisplay();
            changeBg();
            fadeInOut();
        });
        var $oldSelected = $('#menu').find('.selected');
        var $newSelected = $(this);
        $oldSelected.find('.selectedStroke').stop().hide(200);
        $oldSelected.removeClass('selected');
        $oldSelected.css('letter-spacing','0px');
        $newSelected.find('.selectedStroke').stop().show(200);
        $newSelected.addClass('selected');
        $newSelected.css('letter-spacing','5px');
        setTimeout(function(){
            $(window).on('scroll resize', function(){
                fadeInOut();
                homeBtnDisplay();
                checkSize();
                changeBg();
                changeMenu();
            });
        },500);
    });
    $('#mobileMenuBtn').click(function(){
        $(this).find('div').toggleClass('open');
        $('#menu').find('ul').stop().slideToggle(200);
    });
    $('#homeBtn').click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, '500', 'swing');
    });

    onStart();
    preLoadImg();
    checkSize();
});