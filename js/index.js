"undefined"==typeof public&&(public={}),public.index={option:{preload:0},init:function(){for(var e in public.index.option.preload=global.preload.length,global.preload){var i=new Image;i.src=global.preload[e],i.onload=function(){--public.index.option.preload,public.index.option.preload<=0&&$("#mainloader").fadeOut(500,(function(){$(this).remove()}))},i.onerror=function(){--public.index.option.preload,public.index.option.preload<=0&&$("#mainloader").fadeOut(500,(function(){$(this).remove()}))}}new Swiper(".shopSwiper",{loop:!0,spaceBetween:0,slidesPerView:3,centeredSlides:!0,freeMode:!0,watchSlidesProgress:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,coverflowEffect:{rotate:30,stretch:15,depth:320,modifier:1,slideShadows:!1},navigation:{nextEl:".shopSwiper-next",prevEl:".shopSwiper-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20},451:{slidesPerView:1},768:{slidesPerView:1.5},993:{slidesPerView:2,spaceBetween:20},1201:{slidesPerView:3}}}),new Swiper(".roadmapSwiper",{breakpoints:{0:{slidesPerView:1,spaceBetween:25},700:{slidesPerView:2,spaceBetween:15},992:{slidesPerView:3,spaceBetween:15},1200:{slidesPerView:4,spaceBetween:20},1700:{slidesPerView:5,spaceBetween:30}},initialSlide:4,loop:!0,navigation:{nextEl:".roadmapSwiper-next",prevEl:".roadmapSwiper-prev"}}),public.index.cost(),$("body main section.shop .currency .changer .item").on("click",(function(){$(this).hasClass("active")||($("body main section.shop .currency .changer .item").removeClass("active"),$(this).addClass("active"),public.index.cost())}))},cost:function(){var e=$("body main section.shop .currency .item:first").hasClass("active")?1:0;$("body main section.shop .swiper .item[data-amount]").each((function(){var i=$(this).attr("data-amount");e?($(this).find(".buy .price .value").addClass("gem").attr("data-tooltip","<i></i>"+core.main.num(i*global.config.deposit.curs,8,".")+"<br>$ "+core.main.num(i,8,".")).find("span").text(core.main.numl(i*global.config.deposit.curs)),core.tooltip()):$(this).find(".buy .price .value").removeClass("gem").removeAttr("data-tooltip").find("span").text("$ "+core.main.num(i,8,"."))}))}},$(document).ready((function(){public.index.init()}));