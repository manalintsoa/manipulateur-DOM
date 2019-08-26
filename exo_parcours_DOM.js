//Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
var nbr = document.getElementsByTagName("p").length;
console.log(nbr);

//Quel est le contenu texte de l'élément portant l'id "coucou" ? Imprime-le dans la console.
let contenu = document.getElementById("coucou").textContent;
console.log(contenu);

//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console
var url = document.getElementsByTagName("a")[2].href;
console.log(url);

//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
var nbrelement = document.getElementsByClassName("compte-moi").length;
console.log(nbrelement);

//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.

var nbrli = console.log(document.querySelectorAll("li.compte-moi").length);
console.log(nbrli);

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
var NbrliOrd = document.querySelectorAll("ol li.compte-moi").length;
console.log(NbrliOrd);

/* La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, 
le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
 Affiche-le dans la console.*/

 var recuperation = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0];
 console.log(recuperation);