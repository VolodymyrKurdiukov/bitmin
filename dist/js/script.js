"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},

	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('active');
			});
		}
	}
} else {
	document.body.classList.add('pc');
}

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
	});
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYoffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


$(document).ready(function () {
	// $('.price__row').slick({
	// 	slidesToShow: 4,
	// 	arrows: false,
	// 	dots: true,
	// 	slidesToScroll: 1,
	// });

	$(".content-price__item-1").not(":first").hide();
	$(".body-item-price .body-item-price__tab-1").click(function () {
		$(".body-item-price .body-item-price__tab-1").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-price__item-1").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".content-price__item-2").not(":first").hide();
	$(".body-item-price .body-item-price__tab-2").click(function () {
		$(".body-item-price .body-item-price__tab-2").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-price__item-2").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".content-price__item-3").not(":first").hide();
	$(".body-item-price .body-item-price__tab-3").click(function () {
		$(".body-item-price .body-item-price__tab-3").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-price__item-3").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".content-price__item-4").not(":first").hide();
	$(".body-item-price .body-item-price__tab-4").click(function () {
		$(".body-item-price .body-item-price__tab-4").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-price__item-4").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".content-price__item-5").not(":first").hide();
	$(".body-item-price .body-item-price__tab-5").click(function () {
		$(".body-item-price .body-item-price__tab-5").removeClass("active").eq($(this).index()).addClass("active");
		$(".content-price__item-5").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
});

$(window).scroll(function () {
	let top = $(document).scrollTop();
	if (top < 30 || innerWidth < 1120) $(".header").css({ background: 'none', transition: ' all 0.3s ease' });
	else $(".header").css({ background: 'rgba(0, 0, 0, 0.5)' });
});



