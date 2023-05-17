$('.latest__sliders').slick({
   arrows:false,
   
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots:true,
       }
     },
      
    ]
  });
  $('.latest__prev').on('click', function (e) {
    e.preventDefault()
    $('.latest__sliders').slick('slickPrev')
})

$('.latest__next').on('click', function (e) {
    e.preventDefault()
    
$('.latest__sliders').slick('slickNext')





})