
$(document).ready(function(){
  AOS.init(); 

  media();
  function media(){
    var windowWidth = $(window).width();
    if(windowWidth >= 1200){
      //헤더스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop() >= 200){
          $('.header-area').addClass('active');
          $('.header-logo').addClass('active');
          $('.menu-btn').css({width:30,height:20});
          $('.menu-btn span').css({'background-color':'#000'});
        }else{
          $('.header-area').removeClass('active');
          $('.header-logo').removeClass('active');
          $('.menu-btn').css({width:40,height:25});
          $('.menu-btn span').css({'background-color':'#fff'});
        }




        $(window).scroll(function(){
          let scrollY = $(window).scrollTop();
          let bgSize = 100 + (scrollY / 30);
  
          $('.main-bg').css('background-size', `${bgSize}%`);
  
      });
  
      $(window).scroll(function(){
          const sct = $(window).scrollTop();
          console.log(sct);
  
          if(sct >= 800){
            $('.main-txt-box').addClass('active');
            
          }else{
            $('.main-txt-box').removeClass('active');
          }
        });
  
  
  
        $(window).scroll(function(){
          const h = $(window).scrollTop();
          console.log(h);
  
          // 1 = a * 2350 + b
          // 0 = a * 2850 + b
          // a = -1/500,b = 57/10
  
          const y = -1/500 * h + 57/10;
  
          $('.card-box').eq(0).css('opacity',y);
  
          // a = -1/5000,b = 147/100
          const z = -1/5000 * h + 147/100;
          $('.card-box').eq(0).css('transform',`scale(${z})`);
          //1=  a*2350 +b
          //0.9 = a*2850+b
  
  
        });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
            //메뉴버튼 누르면 햄버거버튼 돌아가게 만들고 배경색처리
       $('.menu-btn').click(function(){
          $('.menu-btn').toggleClass('active');
          $('.menu-btn span:nth-child(1)').toggleClass('active');
          $('.menu-btn span:nth-child(2)').toggleClass('active');
          $('.menu-btn span:nth-child(3)').toggleClass('active');
    
          // $('.menu-bar-box').toggleClass('active');
          // hasClass사용해보기
          if($('.menu-btn').hasClass('active')){
            $('.menu-bar-box').addClass('active');
          }else{
            $('.menu-bar-box').removeClass('active');
          }
    
        });

      });

    }else{
      
      $(window).resize(function(){
        ww = $(window).width();
        media();
      });
    }
  }

    

      

}); //end