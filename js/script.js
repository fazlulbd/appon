
$('.bann-main').slick({
   
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.scrren-main').slick({
   
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:'.prevoius',
    nextArrow:'.next',
    autoplay: true,
    autoplaySpeed: 2000,
  });




  $('.mem-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.mem-img'
  });
  $('.mem-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.mem-text',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding:'0'
  });


  new VenoBox({
    selector: ".my-video"
});