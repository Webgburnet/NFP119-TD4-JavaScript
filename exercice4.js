//Exercice 4
//Question 1

//Question 2
var lesElements = document.querySelectorAll("div#ajoncs div.par");
lesElements.length;
lesElements[1].style.backgroundColor = "rgba(0,128,0,0.5)";

//Question 3
//1.
//2.
//3.
var lesElements = document.querySelectorAll("div.par p:nth-of-type(1)");
lesElements.length;
for (i=0;lesElements.length;i++){
	lesElements[i].style.backgroundColor = "rgba(0,128,0,0.5)";
}

//Question 4
var lesElements = document.querySelectorAll("div.par img.droite");
lesElements.length;
var premiere = document.querySelector("div.par img.droite");
premiere.style.width = "50%";