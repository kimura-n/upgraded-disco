$(document).ready(function(){
	totop();
});
function totop(){
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop a').click(function() {$('body,html').animate({scrollTop:0},900);});
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, function () {
	        window.location.hash = target;
	    });
	});
}