$(function() {
	// Filter

	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');


		$("[data-cat]").each(function() {
			let workCat = $(this).data('cat');

			if (workCat == cat || cat == 'all') {
				$(this).removeClass('hide');
			} else {
				$(this).addClass('hide');
			}
		});
	});


	// Modal

	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function(event) {
		event.preventDefault();

		let modalId = $(this).data('modal');

		$(modalId).addClass("show");
		$("body").addClass("no-scroll");

		$('[data-slider="slick"]').slick('setPosition');
	});


	modalClose.on("click", function(event) {
		event.preventDefault();

		let modalParent = $(this).parents(".modal")

		modalParent.removeClass("show");
		$("body").removeClass("no-scroll");

	});


	$(".modal").on("click", function() {
		$(this).removeClass("show");
		$("body").removeClass("no-scroll");
	});


	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});



	// Slider: https://kenwheeler.github.io/slick/
	$('[data-slider="slick"]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

	$(".slickPrev").on("click", function(event) {
		event.preventDefault();

		let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

		currentSlider.slick("slickPrev");
	});

	$(".slickNext").on("click", function(event) {
		event.preventDefault();

		let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

		currentSlider.slick("slickNext");
	});



	// Mobile nav
	const burger = $("#navToggle");
	const nav = $("#nav");

	burger.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});


	// Nav scroll 
	$("[data-nav]").on("click", function() {
		const header = $("#header");
		const blockId = $(this).data("nav");
		const blockHeight = $(blockId).offset().top;

		$('html, body').animate({
			scrollTop: blockHeight - 2*header.height()
		}, 300);

		nav.toggleClass("show");
	});

});