const formSubmit = document.querySelector(".form-submit");
const firstNameInput = document.querySelector(".firstNameInput");
const lastNameInput = document.querySelector(".lastNameInput");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const firstNameErrorIcon = document.querySelector(".firstNameErrorIcon");
const firstNameErrorText = document.querySelector(".firstNameErrorText");
const lastNameErrorIcon = document.querySelector(".lastNameErrorIcon");
const lastNameErrorText = document.querySelector(".lastNameErrorText");
const emailErrorIcon = document.querySelector(".emailErrorIcon");
const emailErrorText = document.querySelector(".emailErrorText");
const passwordErrorIcon = document.querySelector(".passwordErrorIcon");
const passwordErrorText = document.querySelector(".passwordErrorText");

const regex = /^[A-Za-z0-9]+@[a-z]{3,}\.[a-z]{3,}$/;

formSubmit.addEventListener("submit", (e) => {
	e.preventDefault(); //prevent refresh of page

	if (firstNameInput.value.trim() === "") {
		firstNameErrorIcon.style.visibility = "visible";
		firstNameErrorText.style.display = "block";
		firstNameInput.style.border = "2px solid rgb(255, 122, 122)";
	} else {
		firstNameErrorIcon.style.visibility = "hidden";
		firstNameErrorText.style.display = "none";
		firstNameInput.style.border = "1px solid rgb(185, 182, 211)";
	}

	if (lastNameInput.value.trim() === "") {
		lastNameErrorIcon.style.visibility = "visible";
		lastNameErrorText.style.display = "block";
		lastNameInput.style.border = "2px solid rgb(255, 122, 122)";
	} else {
		lastNameErrorIcon.style.visibility = "hidden";
		lastNameErrorText.style.display = "none";
		lastNameInput.style.border = "1px solid rgb(185, 182, 211)";
	}

	console.log(emailInput.placeholder);
	if (emailInput.value.trim() === "") {
		emailErrorIcon.style.visibility = "visible";
		emailErrorText.style.display = "block";
		emailInput.style.color = "black";
		emailInput.style.fontWeight = "400";
		emailErrorText.innerHTML = "Email cannot be empty";
		emailInput.style.border = "2px solid rgb(255, 122, 122)";
	} else if (!regex.test(emailInput.value.trim())) {
		emailErrorIcon.style.visibility = "visible";
		emailErrorText.style.display = "block";
		emailInput.value = "email@example/com";
		emailInput.style.color = "rgb(255, 122, 122)";
		emailInput.style.fontWeight = "700";
		emailErrorText.innerHTML = "Looks like this is not an email";
		emailInput.style.border = "2px solid rgb(255, 122, 122)";
	} else {
		emailErrorIcon.style.visibility = "hidden";
		emailErrorText.style.display = "none";
		// emailInput.value = "email@example/com";
		emailInput.style.color = "black";
		emailInput.style.fontWeight = "400";
		emailInput.style.border = "1px solid rgb(185, 182, 211)";
	}

	if (passwordInput.value === "") {
		passwordErrorIcon.style.visibility = "visible";
		passwordErrorText.style.display = "block";
		passwordInput.style.border = "2px solid rgb(255, 122, 122)";
	} else {
		passwordErrorIcon.style.visibility = "hidden";
		passwordErrorText.style.display = "none";
		passwordInput.style.border = "1px solid rgb(185, 182, 211)";
	}
});
