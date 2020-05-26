var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
//gradient is id of the body

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	//it says put body.style.background text, inside the css.textContent
	//section, which is inside h3, you can use innerHTML as well
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);