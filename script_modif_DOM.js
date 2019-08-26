//Modification 1
/*Écris une fonction changeTitles() qui va :

   1- Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
    2 -  Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, 
    en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous,
     pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et 
     outils du web n'auront plus de secret pour vous !"
*/

function changetitle(){
	var tag = document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP";

	var tags = document.getElementsByClassName("lead")[0];
	
	tags.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

//Modification 2
/* Ecris une fonction changeCallToActions() qui va:

   1- Changer le texte du bouton "Main call to action" en "OK je veux tester !"
    2- Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
    3- Changer le texte du bouton "Secondary action" en "Non Merci"
    4 -Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
*/

function changeCallToActions(){

			var bouton = document.querySelectorAll("p a.btn-primary")[0];
			var urlbouton = document.querySelectorAll("p a")[0];
			var bouton1 = document.querySelectorAll("p a.btn-secondary")[0];
			var urlbouton1 = document.querySelectorAll("p a.btn-secondary")[0];
			bouton.textContent = "OK je veux tester !";
			urlbouton.href = " http://www.thehackingproject.org ";
			bouton1.innerHTML = "Non Merci";
			urlbouton1.href = "https://www.pole-emploi.fr/accueil/";
}

//Modification 3
/*Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

    1 - Change "Album" par "The THP Experience" ;
    2 - Change la taille du texte pour le passer en 2em.;
*/
function changeLogoName(){

			var change = document.getElementsByTagName("strong")[0];
			change.innerHTML = "The THP Experience";
			change.style.fontSize = "2em";
}

//Modification 4
/*Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :*/
function populateImages(){

			let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
			for (image in imagesArray){
				document.getElementsByTagName("img")[image].src = imagesArray[image];
			}
}

// Modification 5
/*Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle.

 Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire*/
function deleteLastCards()
{

			var imag = document.getElementsByClassName("card-img-top");
			let i = imag.length-1;
			while(i>=6){
				if (imag[imag.length-1].parentNode) 
					{
					  imag[imag.length-1].parentNode.remove(imag[imag.length-1]);
					}	
					i--;
			}
			
				
			
					

}

//Modification 6
/*Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :

    Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
    Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
    Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

*/
function changeCardsText()
{
	var carte = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
	"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
	"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	let classecarte = document.getElementsByClassName("card-text");
	for(text in carte)
	{
		classecarte[text].innerHTML = carte[text];
	}
}

//Modification n°7

/*Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. 
En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. 
Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !*/
function changeViewButtons()
{
		boutton = document.querySelectorAll("div.btn-group button.btn-outline-secondary:nth-of-type(1)");
    	for(let i=0; i<boutton.length;i++)
    	{
        	boutton[i].classList.remove('btn-outline-secondary');
        	boutton[i].classList.add('btn-success');
   		 }

}
//Modification 8
/*Allez, on finit sur une modification un peu tordue :

    Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
    Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
*/
function deplace3emversla2em()
{
	let container = document.querySelectorAll(".album .container")[0];
	newDiv = document.createElement("div")
	newDiv.classList.add("row");
	let cards = document.getElementsByClassName("col-md-4");
	newDiv.appendChild(cards[2]);
	container.appendChild(newDiv)
}

changetitle();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();