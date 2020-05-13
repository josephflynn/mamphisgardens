$(document).ready(function(){

	console.log("Memphis Gardens and Memphis Projects, copyright Joseph Flynn 2018");

	$('.hamburger').click(function(){
		$('button').toggleClass('is-active');
		$('.leftBar').toggleClass('click');
		$('.menuList').toggleClass("unhide");
		$('.facebook, .instagram').toggleClass("unhide");
	});


 	$(".Current").hover(
      function () {
        $(".current").show();
      },
      function () {
        $(".current").hide();
      }
      );






	var slider = $('.my-slider').unslider({
		autoplay:true,
		speed:1000,
		delay:8000
	});

	$('h2.loadMore').click(function(){
    $('.loadingMore').slideDown();
    $('h2.loadMore').addClass('hide');
    event.preventDefault();
  	});

  	$('h2.loadMore1').click(function(){
    $('.loadingMore1').slideDown();
    $('h2.loadMore1').addClass('hide');
    event.preventDefault();
  	});


});