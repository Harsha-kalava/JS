// document.getElementById("form").addEventListener("submit", prevent);

// function prevent(e) {
// 	e.preventDefault();
// 	const fname = document.getElementById("fname").value;
// 	const lname = document.getElementById("lname").value;
// 	const email = document.getElementById("email").value;
// 	console.log(fname, lname, email);
// }

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const btn = document.getElementById("submit");
const warn = document.querySelector(".warn");
const dis = document.getElementById("dis");

btn.addEventListener("click", submit);

function submit(e) {
	e.preventDefault();
	if (fname.value === "" || lname.value === "") {
		warn.innerHTML = "Please enter you details";
		setTimeout(() => warn.remove(), 3000);
	} else {
		console.log(fname.value, lname.value, email.value);
	}
}

btn.addEventListener("mouseover", discount);

function discount(e) {
	e.preventDefault();
	if (email.value === "") {
		dis.innerHTML = " Enter your email to get notifications";
		setTimeout(() => dis.remove(), 3000);
	}
}
