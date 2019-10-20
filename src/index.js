$(document).ready(function() {
	(function($) {
		// Tabs script
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
		// END TABS SCRIPT

		// KEYPRESS EVENT
		document.addEventListener("keypress", function(e) {
			console.log(e);
			var tabsKey = ["1", "2", "3", "4"];
			if (e.ctrlKey && tabsKey.includes(e.key)) {
				console.log("in");
				$(`.tab [data-index=${e.key - 1}] a`).trigger("click");
			}
		});
		// END KEYPRESS EVENT
	})(jQuery);

/*--------------
 *  MODAL 
 *--------------*/
	// Get the modal
	var modal = document.getElementById("myModal");
	// Get the button that opens the modal
	var btn = document.getElementById("info-icon");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on the button, open the modal
	btn.onclick = function() {
		modal.style.display = "block";
	};
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	};
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
/*--------------
 * END MODAL 
 *--------------*/


});
