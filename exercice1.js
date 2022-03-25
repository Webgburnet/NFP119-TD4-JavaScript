//Exercice 1
//Question1
var lesElements = document.getElementsByTagName("div");
lesElements[0];
lesElements[0].style.fontWeight = "bold";
//Reponse : Les élèment contenue dans le div sont passés en gras

//Question 2
var tousVerts = function mettreEnVert(balise){
	var lesElements = document.getElementsByTagName(balise);
	for(var i=0; i < lesElements.length;i++){
		lesElements[i];
		lesElements[i].style.color = "green";
		}
};
tousVerts("em");
tousVerts("a");

//Question 3
var gr34 = document.getElementById("gr34");
var lesElements = gr34.getElementsByTagName("em");
lesElements[0].style.color = "blue";

//Question 4
var tousVerts = function mettreEnVert(balise, noeud){
	var noeud = document.getElementById(noeud);
	var lesElements = noeud.getElementsByTagName(balise);
	for(var i=0; i < lesElements.length;i++){
		lesElements[i];
		lesElements[i].style.color = "green";
		}
};
tousVerts("em","gr34");
tousVerts("a","intro");

//Question 5*
var tousVerts = function mettreEnVert(balise, noeud){
	if(noeud ==""){
		var lesElements = document.getElementsByTagName(balise);
	}
	else{
		var noeud = document.getElementById(noeud);
		var lesElements = noeud.getElementsByTagName(balise);
	}

	for(var i=0; i < lesElements.length;i++){
		lesElements[i];
		lesElements[i].style.color = "green";
		}
};
tousVerts("em","");
tousVerts("a","intro");

