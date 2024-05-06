/* jQuery Effect */

/* 
fadeIn
fadeOut
fadeToggle
slideDown
slideUp
slideToggle
animate
Get : - .text() / .html() / .val()
Set : - .text() / .html() / .val()
.remove
.addClass
.removeClass
.toggleClass
.css()
*/

// fadeIn

// $(function(){
//   $('button').click(function(){
//     $('.demo').fadeIn();
//     $('.demo1').fadeIn('slow');
//     $('.demo2').fadeIn(2000);
//     $('.demo3').fadeIn(5000);
//   })
// })

// $(function(){
//   $('button').click(function(){
//     $('.demo').fadeOut();
//     $('.demo1').fadeOut('slow');
//     $('.demo2').fadeOut(2000);
//     $('.demo3').fadeOut(5000);
//   })
// })

// $(function(){
//   $('button').click(function(){
//     $('.demo').fadeToggle();
//     $('.demo1').fadeToggle('slow');
//     $('.demo2').fadeToggle(2000);
//     $('.demo3').fadeToggle(5000);
//   })
// })


// slideDown

// $(function(){
//   $('.button').click(function(){
//     $('.demo').slideDown()
//   })
// })

// $(function(){
//   $('.button').click(function(){
//     $('.demo').slideUp()
//   })
// })

// $(function(){
//   $('.button').click(function(){
//     $('.demo').slideToggle()
//   })
// })

// animate

// $(function(){
//   $('#button').click(function(){
//     $('.animate').animate({
//       left:'500px',
//       fontSize:'30px',
//     })
//   })
// })

 // Get

//  $(function(){
//   $('button').click(function(){
//     console.log($('.h1').text());
//   })
//  })


//  $(function(){
//   $('button').click(function(){
//     console.log($('.h1').html());
//   })
//  })

//  $(function(){
//   $('button').click(function(){
//     console.log($('#inputs').val());
//   })
//  })

// set

//  $(function(){
//   $('button').click(function(){
//     console.log($('.h1').text('Hello Class'));
//   })
//  })


//  $(function(){
//   $('button').click(function(){
//     console.log($('.h1').html('<b>this is bold tag</b>'));
//   })
//  })

//  $(function(){
//   $('button').click(function(){
//     console.log($('#inputs').val('vivek'));
//   })
//  })


// .addclass

// $(function(){
//   $('button').click(function(){
//     $('h1').addClass('h1')
//   })
// })

// $(function(){
//   $('button').click(function(){
//     $('h1').removeClass('h1')
//   })
// })

// $(function(){
//     $('button').click(function(){
//       $('h1').toggleClass('h1')
//     })
//   })

// css()

$(function(){
  $('button').click(function(){
    $('.h1').css({
      backgroundColor:'red',
      fontSize:'50px',
      color:'white'
    })
  })
})