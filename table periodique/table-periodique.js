/* fonctions pour l'exercice sur la table périodique */
//Question 1

//Question 2
var setupListeners = function(){
	var elementChimique = document.getElementsByClassName("elementChimique");
	for(var i=0;elementChimique.length;i++){
		console.log(elementChimique[i]);
		elementChimique[i];
		elementChimique[i].addEventListener("mouseover",changeElem);
	}
};

window.addEventListener("load",setupListeners);

var changeElem = function(){
	//console.log(this);
	//console.log(this.classList);
	//console.log(this.innerHTML);
	var Focus = document.getElementById("focus");
	Focus.classList =this.classList;
	Focus.innerHTML = this.innerHTML;

	//console.log(Focus);
	//console.log("Transmit");
};

//Question 3
//1.Quel sélecteur permet d'obtenir les éléments <div> de classe elementChimique 
// situées dans un élément <div> de classe ligne ?
//div.ligne div.elementChimique

//2.
var premier_chargement = function (){
	var lesElements = document.querySelector("div.ligne div.elementChimique");
	var Focus = document.getElementById("focus");
	Focus.classList =lesElements.classList;
	Focus.innerHTML = lesElements.innerHTML;
	console.log("Ok");
};
//Comment faire pour que cette action soit réalisée au chargement du document ?
window.addEventListener("load",premier_chargement);

//Question 4
//1.style.display
//2. pensez à ajouter oneclick au fichier html


var change = function(){
	var Focus = document.getElementById("focus");
	var checkFocus = document.getElementById("checkFocus");
	// checked=checkFocus.checked
	//console.log(checkFocus.checked);
	if (checkFocus.checked == true){
		// console.log("True");
		Focus.style.display="";
	}
	else {
		// console.log("False");
		Focus.style.display="none";
	}
};
window.addEventListener("load",change);


//Question 5
//1.div.ligne div.masseatomique
//2.
/*var masseAtomique = function(){
	var checkMasse = document.getElementById("checkMasse");
	var displayMasse = document.querySelectorAll("div.ligne div.masseatomique");
	//console.log(checkMasse);
	//console.log(displayMasse);
	//console.log(checkMasse.checked);
	if (checkMasse.checked == true){
		for (i=0;displayMasse.length;i++){
			//console.log("True");
			displayMasse[i].style.display="";
		}
	}
	else {
		for (i=0;displayMasse.length;i++){
			//console.log("False");
			displayMasse[i].style.display="none";
		}
	}
};
window.addEventListener("load",masseAtomique);*/

//3.

//Question 6
/*var couchesElectrons = function(){
	var checkCouches = document.getElementById("checkCouches");
	var displayCouches = document.querySelectorAll("div.ligne div.coucheselectrons");
	if (checkCouches.checked == true){
		for (i=0;displayCouches.length;i++){
			displayCouches[i].style.display="";
		}
	}
	else {
		for (i=0;displayCouches.length;i++){
			displayCouches[i].style.display="none";
		}
	}
};
window.addEventListener("load",couchesElectrons);*/

/*var electronegativite = function(){
	var checkElectro = document.getElementById("checkElectro");
	var displayElectronegativite = document.querySelectorAll("div.ligne div.electronegativite");
	if (checkElectro.checked == true){
		for (i=0;displayElectronegativite.length;i++){
			displayElectronegativite[i].style.display="";
		}
	}
	else {
		for (i=0;displayElectronegativite.length;i++){
			displayElectronegativite[i].style.display="none";
		}
	}
};
window.addEventListener("load",electronegativite);*/

var affichage = function(check_elem,display_elem){
	var checkElem = document.getElementById(check_elem);
	var displayElem = document.querySelectorAll(display_elem);
	if (checkElem.checked == true){
		for (i=0;displayElem.length;i++){
			displayElem[i].style.display="";
		}
	}
	else {
		for (i=0;displayElem.length;i++){
			displayElem[i].style.display="none";
		}
	}
	
};

var masseAtomique = function(){
	var checkMasse = "checkMasse";
	var displayMasse = "div.ligne div.masseatomique";
	affichage (checkMasse,displayMasse);
};

var couchesElectrons = function(){
	var checkCouches = "checkCouches";
	var displayCouches = "div.ligne div.coucheselectrons";
	affichage (checkCouches,displayCouches);
};

var electronegativite = function(){
	var checkElectro = "checkElectro";
	var displayElectronegativite = "div.ligne div.electronegativite";
	affichage (checkElectro,displayElectronegativite);
};

//Question 7
//L'element masqué ne s'affiche pas dans focus
// 


//Question 8
//1.
//2.
function selectionTous(){
	//electronegativite ();
	console.log("selectiontous");
	
};

document.getElementById("tous").onclick=selectionTous;

var selectionAucun = function(){
	//electronegativite ();
	console.log("selectionAucun");
	
};
document.getElementById("aucun").onclick=selectionAucun;
