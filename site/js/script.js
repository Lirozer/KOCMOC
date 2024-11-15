$(function() {
	attachButton();
});

function attachButton() {
	let buttonPosition = $('.menuLink').offset().top;
	let buttonHeight = $('.menuLink').css('height');
	$(window).scroll(() => {
		if ($(window).scrollTop() >= buttonPosition) {
			$('.menuLink').css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				zIndex: 10,
			});
			$('main').css({
				marginTop: buttonHeight
			});
		}
		else {
			$('.menuLink').css({
				position: 'static',
			});
			$('main').css({
				marginTop: 0
			});
		}
	})
}