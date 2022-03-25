//Exercice 3
//Question 1
var d = function(){
	var droite = document.getElementsByClassName("droite");
	for (i=0;droite.length;i++){
		droite[i];
		droite[i].style.padding="20px";
	}
};

//Question 2
var border = function (){
	//"border" de valeur solid 1px blue.
	var ajoncs = document.getElementById("ajoncs");
	var par = ajoncs.getElementsByClassName("par");
	for(var i=0;par.length;i++){
		par[i];
		par[i].style.border="solid 1px blue";
	}
};

//Question 3
var cache = function (){
	var cache = document.getElementsByClassName("cache");
	for(var i=0;cache.length;i++){
		cache[i];
		cache[i].style.display = "none";
	}
};

//Question 4
var devoile = function(){
	var cache = document.getElementsByClassName("cache");
	for(var i=0;cache.length;i++){
		cache[i];
		cache[i].style.display = "";
	} 
};
