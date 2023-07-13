// email regular expression
function emailchecking(data) {
	// import email
	let emailBox = document.getElementById("email");
	let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
	if (regex.test(data)) {
		emailBox.classList.add("valid");
		return true;
	} else {
		emailBox.classList.remove("valid");
		return false;
	}
}
let emailInput = document.getElementById("mail-input");
function emailChangeValue() {
	emailInput = document.getElementById("mail-input").value;
}

function validemail() {
	if (emailchecking(emailInput) === true) {
		return true;
	} else {
		return false;
	}
}

let emailBox = document.getElementById("email");
emailInput.onfocus = function () {
	emailBox.classList.add("focus");
	emailInput.style.border = "none";
};

emailInput.onblur = function () {
	emailBox.classList.remove("focus");
};

// Portfolio script ---------------------------------------------------------------------------------------------

// Import Portfolio elements
let codeElement1 = document.getElementById("code1");
let codeElement2 = document.getElementById("code2");
let designElement1 = document.getElementById("design1");
let designElement2 = document.getElementById("design2");
let designElement3 = document.getElementById("design3");
let appsElements = document.getElementById("apps");
let photographyElement1 = document.getElementById("Photography1");
let photographyElement2 = document.getElementById("Photography2");

// import buttons

let allButton = document.getElementById("all");
let designButton = document.getElementById("designbutton");
let codeButton = document.getElementById("codebutton");
let appsButton = document.getElementById("appsbutton");
let PhotographyButton = document.getElementById("photographybutton");

// import ul buttons from DOM
let allLis = document.querySelectorAll("#ul li");

allLis.forEach(function (ele) {
	ele.onclick = function () {
		// Remove Active Class From All Elements
		allLis.forEach(function (ele) {
			ele.classList.remove("active");
		});
		// Add Active Class To This Element
		this.classList.add("active");
		// Hide All Divs
	};
});

codeButton.onclick = function () {
	allLis.forEach(function (ele) {
		ele.classList.remove("active");
	});
	// Add Active Class To This Element
	codeButton.classList.add("active");
	codeElement1.classList.remove("d-none");
	codeElement2.classList.remove("d-none");
	designElement1.classList.add("d-none");
	designElement2.classList.add("d-none");
	designElement3.classList.add("d-none");
	appsElements.classList.add("d-none");
	photographyElement1.classList.add("d-none");
	photographyElement2.classList.add("d-none");
};

designButton.onclick = function () {
	allLis.forEach(function (ele) {
		ele.classList.remove("active");
	});
	// Add Active Class To This Element
	designButton.classList.add("active");
	codeElement1.classList.add("d-none");
	codeElement2.classList.add("d-none");
	designElement1.classList.remove("d-none");
	designElement2.classList.remove("d-none");
	designElement3.classList.remove("d-none");
	appsElements.classList.add("d-none");
	photographyElement1.classList.add("d-none");
	photographyElement2.classList.add("d-none");
};

appsButton.onclick = function () {
	allLis.forEach(function (ele) {
		ele.classList.remove("active");
	});
	// Add Active Class To This Element
	appsButton.classList.add("active");
	codeElement1.classList.add("d-none");
	codeElement2.classList.add("d-none");
	designElement1.classList.add("d-none");
	designElement2.classList.add("d-none");
	designElement3.classList.add("d-none");
	appsElements.classList.remove("d-none");
	photographyElement1.classList.add("d-none");
	photographyElement2.classList.add("d-none");
};

PhotographyButton.onclick = function () {
	allLis.forEach(function (ele) {
		ele.classList.remove("active");
	});
	// Add Active Class To This Element
	PhotographyButton.classList.add("active");
	codeElement1.classList.add("d-none");
	codeElement2.classList.add("d-none");
	designElement1.classList.add("d-none");
	designElement2.classList.add("d-none");
	designElement3.classList.add("d-none");
	appsElements.classList.add("d-none");
	photographyElement1.classList.remove("d-none");
	photographyElement2.classList.remove("d-none");
};

allButton.onclick = function () {
	allLis.forEach(function (ele) {
		ele.classList.remove("active");
	});
	// Add Active Class To This Element
	allButton.classList.add("active");
	codeElement1.classList.remove("d-none");
	codeElement2.classList.remove("d-none");
	designElement1.classList.remove("d-none");
	designElement2.classList.remove("d-none");
	designElement3.classList.remove("d-none");
	appsElements.classList.remove("d-none");
	photographyElement1.classList.remove("d-none");
	photographyElement2.classList.remove("d-none");
};
