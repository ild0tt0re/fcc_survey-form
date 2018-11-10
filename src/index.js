document.onload = init;

function init() {
	const formElem = document.getElementById("survey-form");

	formElem.addEventListener("focusin", focusInHandler);
	formElem.addEventListener("focusout", focusOutHandler);
}

function focusInHandler(e) {
	var targetElem = e.target;
	if (targetElem !== e.currentTarget) {
		const labelElem = targetElem.previousElementSibling;
		labelElem.classList.add("label-active");
		console.log("focusIn");
	}

	e.stopPropagation();
}

function focusOutHandler(e) {
	var targetElem = e.target;
	if (targetElem !== e.currentTarget) {
		//move label UP
		if (!targetElem.value) {
			const labelElem = targetElem.previousElementSibling;
			labelElem.classList.remove("label-active");
			console.log("focusOut");
		}

		//set validity style
		if (targetElem.validity.valid) {
			targetElem.style.borderBottom = "1px solid #0f0";
		} else {
			targetElem.style.borderBottom = "1px solid red";
		}
	}

	e.stopPropagation();
}
