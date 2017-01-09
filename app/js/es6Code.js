(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof exports !== "undefined") {
		factory();
	} else {
		var mod = {
			exports: {}
		};
		factory();
		global.main = mod.exports;
	}
})(this, function () {
	'use strict';

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	;(function () {
		//style select
		function styleSelecters() {
			$("select").selecter();
		}

		//menu hover
		function menuOpenedHover() {
			jQuery('li.dropdown').hover(function () {
				jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
			}, function () {
				jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
			});
		}

		//search input
		function searchInput() {
			$(".dropInput input").on("input keyup", function () {
				$(".pushInput").css({ "display": "block" });
			});

			$(".dropInput input").click(function () {
				$(this).val("");
			});

			$(".dropInput input").focusout(function () {
				$(".pushInput").css({ "display": "none" });
				$(this).val("Поиск");
			});
		}

		//slick slider's
		function slickSlidersActivate() {
			var _$$slick, _$$slick2;

			$(".slider_1").slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				adaptiveHeight: true
			});

			$(".sliderSet4").slick((_$$slick = {
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				adaptiveHeight: true,
				slidesToShow: 5,
				slidesToScroll: 2
			}, _defineProperty(_$$slick, 'adaptiveHeight', true), _defineProperty(_$$slick, 'responsive', [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			}]), _$$slick));

			$(".sliderGalleryActivate").slick((_$$slick2 = {
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				adaptiveHeight: true,
				slidesToShow: 4,
				slidesToScroll: 2
			}, _defineProperty(_$$slick2, 'adaptiveHeight', true), _defineProperty(_$$slick2, 'responsive', [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}]), _$$slick2));
		}

		//fancybox
		function fancyboxesActivate() {
			$(".sliderGalleryActivate .item a").fancybox({
				width: 700,
				height: 500
			});

			$(".sliderGalleryActivate .item a").fancybox({
				padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});

			$(".gallery .item a").fancybox({
				width: 700,
				height: 200
			});

			$(".gallery .item a").fancybox({
				padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		}

		//increasing number's
		function increasingNumbers() {
			$(".anim01").spincrement({
				from: 0,
				to: 116000,
				decimalPlaces: 0,
				duration: 8000
			});

			$(".anim02").spincrement({
				from: 0,
				to: 99,
				decimalPlaces: 0,
				duration: 10000
			});

			$(".anim03").spincrement({
				from: 0,
				to: 100,
				decimalPlaces: 0,
				duration: 10000
			});

			$(".anim04").spincrement({
				from: 0,
				to: 3589,
				decimalPlaces: 0,
				duration: 10000
			});
		}

		//tab's
		function tabs2() {
			$(".tabs_2 .toolbar li:first").addClass("myActive");
			$(".tabs_2 .toolbar li").hover(function () {
				$(".tabs_2 .toolbar li").removeClass("myActive");

				$(".tabs_2 .toolbar li").removeClass("active");
				$(this).addClass("active");

				var indE = $(this).index();

				$(".tabs_2 .tab-content > div").stop(true, true).slideUp(500);
				$(".tabs_2 .tab-content > div").stop(true, true).eq(indE).slideDown(500);
				$(".tabs_2 .tab-content > div").eq(indE).addClass("openElem");
			}, function () {

				var indE = $(this).index();

				$(".tabs_2 .tab-content > div").not(":eq(indE)").removeClass("openElem");
			});

			//закрытие всех табов при уведении курсора с этого section
			$(".tabs_2").hover(function () {}, function () {
				$(".tabs_2 .toolbar li").removeClass("active");
				$(".tabs_2 .tab-content > div").slideUp();
			});
		}

		//actions opened logic
		function actionsOpenedLogic() {
			$(".sharesModule .item").hover(function () {
				$(".sharesModule .item").find(".hideBlock").stop(true, true).slideUp();
				$(this).find(".hideBlock").stop(true, true).slideDown();
				$(this).addClass("zindex7");
			}, function () {
				$(this).find(".hideBlock").stop(true, true).slideUp();
				$(this).removeClass("zindex7");
			});
		}

		$(".hideBlock").hover(function () {}, function () {
			$(this).parent().removeClass("zindex7");
		});

		//disabled links
		function disabledLinks() {
			$("section.sharesModule .items .item .flexBlock .text a").click(function () {
				return false;
			});
		}

		//yandex map
		function map() {
			if ($(document).find("#map").length > 0) {
				var init = function init() {
					var myMap = new ymaps.Map("map", {
						center: [52.61880226, 39.57838146],
						zoom: 12
					});

					var myPlacemark = new ymaps.Placemark([52.618291071677724, 39.61376349999999], {
						hintContent: 'Адрес!'
					});
					myMap.geoObjects.add(myPlacemark);
					myMap.behaviors.disable('scrollZoom');
				};

				ymaps.ready(init);
			}
		}

		//validateForms
		function validateForms() {
			$(".form01").validate({
				rules: {
					fio: {
						required: true
					},
					telephone: {
						required: true
					},
					textarea: {
						required: true
					}
				},
				messages: {
					fio: {
						required: "Заполните поле"
					},
					telephone: {
						required: "Заполните поле"
					},
					textarea: {
						required: "Заполните поле"
					}
				}
			});
		}

		//3 step modal form
		function stepsModalForm() {
			$("#myModal button").click(function () {
				$("#myModal").modal("hide");
				$("#myModal-2").modal("show");

				$("#myModal-2 button").click(function () {
					$("#myModal-2").modal("hide");
					$("#myModal-3").modal("show");
				});

				return false;
			});

			//3 step modal disabled links
			$("section.sharesModule a.btn_1_style01").click(function () {
				$("#myModal").modal("show");

				return false;
			});

			$(".blockAction .button-1.modalUtilitClass").click(function () {
				$("#myModal").modal("show");

				return false;
			});
		}

		//adding riple eddect all links and buttons
		function ripleEffect() {
			$("button[class*='button']").addClass("waves-effect waves-riple");
			$("a[class*='button']").addClass("waves-effect waves-riple");
		}

		//anchor
		function anchorLinks() {
			$(".anchor").click(function (e) {
				e.preventDefault();

				var el = $(this).attr("href");

				$("body, html").animate({ scrollTop: $(el).offset().top - 160 }, 800);
				return false;
			});
		}

		//ready function
		$(function () {
			styleSelecters();
			menuOpenedHover();
			searchInput();
			slickSlidersActivate();
			fancyboxesActivate();
			increasingNumbers();
			tabs2();
			actionsOpenedLogic();
			disabledLinks();
			map();
			stepsModalForm();
			ripleEffect();
			anchorLinks();
			validateForms();
		});
	})();
});
//# sourceMappingURL=es6Code.js.map
