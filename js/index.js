// article1 슬라이드 
$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 1000, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'ease-in-out', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',        
})

// article2
var num;
$(".article2 .cf li").on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    num=$(this).index()
    $(this).parent().next().children().eq(num)
    .addClass('active').siblings().removeClass('active')
})