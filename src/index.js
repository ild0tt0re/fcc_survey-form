$(document).ready(function () {
	(function ($) {
		// Tabs script
		$(".tab ul.tabs")
			.addClass("active")
			.find("> li:eq(0)")
			.addClass("current");

		$(".tab ul.tabs li a").click(function (g) {
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
		document.addEventListener("keypress", function (e) {
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

	var modalContent = modal.querySelector(".modal-content");
	function hideModalLayer() {
		modal.style.display = "none";
	}
	// When the user clicks on the button, open the modal
	btn.onclick = function () {
		modal.removeEventListener("transitionend", hideModalLayer);
		modal.style.display = "block";
		setTimeout(() => modalContent.classList.add("modal-show"), 0.1);
	};
	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		removeModal();
	};
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			removeModal();
		}
	};

	function removeModal() {
		modal.addEventListener("transitionend", hideModalLayer);
		modalContent.classList.remove("modal-show");
	}

	/*---
	 * END MODAL
	 *--------------*/

	/*---------------
	  SUBMIT BUTTON
	 ----------------- */

	document.querySelector("button").addEventListener("click", function (e) {
		e.preventDefault();
		var invalidFields = document.querySelectorAll("input:invalid");
		var modalFormValidity = document.getElementsByClassName(
			"modal-form-validity"
		)[0];

		if (invalidFields.length === 0) {
			modalFormValidity.textContent =
				"SUCCESS: all fields have been validated.";
			modalFormValidity.classList.add("success");
		} else {
			Array.from(invalidFields).forEach(function (invalidField) {
				console.error("Field ", invalidField.name, " is invalid!");
			});
			modalFormValidity.textContent = "ERROR: Some fields are invalid...";
			modalFormValidity.classList.add("error");
		}

		setTimeout(function () {
			modalFormValidity.classList.remove("success", "error");
		}, 3000);
	});

	/*---
	  END SUBMIT BUTTON
	 ----------------- */
});
