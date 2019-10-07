
// document.onload = init;
// init();

// function init() {
// 	const formElem = document.getElementById("survey-form");

// 	formElem.addEventListener("focusin", focusInHandler);
// 	formElem.addEventListener("focusout", focusOutHandler);
// }

// function focusInHandler(e) {
// 	let targetElem = e.target;
// 	if (targetElem !== e.currentTarget) {
// 		const labelElem = targetElem.previousElementSibling;
// 		labelElem.classList.add("label-active");
// 		console.log("focusIn");
// 	}

// 	e.stopPropagation();
// }

// function focusOutHandler(e) {
// 	let targetElem = e.target;
// 	if (targetElem !== e.currentTarget) {
// 		//move label UP
// 		if (!targetElem.value) {
// 			const labelElem = targetElem.previousElementSibling;
// 			labelElem.classList.remove("label-active");
// 			console.log("focusOut");
// 		}

// 		//set validity style
// 		if (targetElem.validity.valid) {
// 			targetElem.style.borderBottom = "1px solid #0f0";
// 		} else {
// 			targetElem.style.borderBottom = "1px solid red";
// 		}
// 	}

// 	e.stopPropagation();
// }

// TAB
$(document).ready(function() {
	(function($) {
		$(".tab ul.tabs")
			.addClass("active")
			.find("> li:eq(0)")
			.addClass("current");

		$(".tab ul.tabs li a").click(function(g) {
			var tab = $(this).closest(".tab"),
				index = $(this)
					.closest("li")
					.index();

			tab.find("ul.tabs > li").removeClass("current");
			$(this)
				.closest("li")
				.addClass("current");

			tab
				.find(".tab_content")
				.find("div.tabs_item")
				.not("div.tabs_item:eq(" + index + ")")
				.slideUp();
			tab
				.find(".tab_content")
				.find("div.tabs_item:eq(" + index + ")")
				.slideDown();

			g.preventDefault();
		});
	})(jQuery);
});
