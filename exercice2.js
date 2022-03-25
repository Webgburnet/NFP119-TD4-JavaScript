//Exercice 2
//Question 1 + 2
var saveimg="";
var setupListeners = function(){
	var img = document.getElementsByTagName("img");
	for(var i=0;img.length;i++){
		img[i];
		img[i].addEventListener("mouseover",changeImg);
		img[i].addEventListener("mouseout",changeImg2);
	}
};
window.addEventListener("load",setupListeners);
var changeImg = function (){
	saveimg=this.src;
	// console.log(saveimg);
	this.src ="images/intrus.jpg";
};
var changeImg2 = function (){
	this.src =saveimg;
};
