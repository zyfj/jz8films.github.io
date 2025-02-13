function obtenirFormFilms(provenance){
	var strVar="";
	strVar += "<form id=\"formEnreg\" name=\"formEnreg\">";
	strVar += "			<div id=\"divNum\" style=\"display:none;\">Numero : <input type=\"text\" id=\"num\" name=\"num\" readonly></div>";
	strVar += "			Titre : <input type=\"text\" id=\"titre\" name=\"titre\"><br>";
	strVar += "			Duree : <input type=\"text\" id=\"duree\" name=\"duree\"><br>";
	strVar += "			Pochette : <input type=\"file\" id=\"pochette\" name=\"pochette\"><br>";
	if (provenance=="enregistrer")
		strVar += "			<input type=\"button\" value=\"Enregistrer\" onClick=\"requetesServeurFilms('enregistrer');\">";
	else
		if (provenance=="dossier"){
			strVar += "			<input type=\"hidden\" name=\"code\" value=\"maj\">";
			strVar += "			<input type=\"button\" value=\"Modifier\" onClick=\"requetesServeurFilms('maj');\">";
	    }
	strVar += "	<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}
function obtenirFormEnleverFilm(){
	var strVar="";
	strVar += "<form id=\"formEnl\" name=\"formEnl\">";
	strVar += "			Numero : <input type=\"text\" id=\"num\" name=\"num\">";
	strVar += "			<input type=\"button\" value=\"Enlever\" onClick=\"requetesServeurFilms('enlever');\">";
	strVar += "		<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}
function obtenirFormModifierFilm(){
	var strVar="";
	strVar += "<form id=\"formMod\" name=\"formMod\">";
	strVar += "			Numero : <input type=\"text\" id=\"numM\" name=\"numM\">";
	strVar += "			<input type=\"hidden\" name=\"action\" value=\"modifier\">";
	strVar += "			<input type=\"hidden\" name=\"code\" value=\"obtenirDossier\">";
	strVar += "		<input type=\"button\" value=\"Dossier\" onClick=\"requetesServeurFilms('dossier');\">";
	strVar += "		<\/form>";
	$('#contenu').html(strVar);
	$('#fenetre').show();
}

function listerFilms(xmlFilms){
	var res,tabFilms,taille,i,num,titre,duree,pochette;
	res="<h3>LISTE DES FILMS</h3>";
	res+="<table border=1>";
	res+="<tr><td>POCHETTE</td><td>NUMERO</td><td>TITRE</td><td>DUREE</td></tr>";
	tabFilms=xmlFilms.getElementsByTagName("film");
	taille=tabFilms.length;
	for (i=0; i<taille;i++){
		num=tabFilms[i].getElementsByTagName("num")[0].firstChild.nodeValue;
		titre=tabFilms[i].getElementsByTagName("titre")[0].firstChild.nodeValue;
		duree=tabFilms[i].getElementsByTagName("duree")[0].firstChild.nodeValue;
		pochette=tabFilms[i].getElementsByTagName("pochette")[0].firstChild.nodeValue;
		res+="<tr><td><img src='pochettes/"+pochette+"'></td><td>"+num+"</td><td>"+titre+"</td><td>"+duree+"</td></tr>";
	}
	res+="</table>";
	//document.getElementById('contenu').innerHTML=res;
	$('#contenu').html(res);
	$('#fenetre').show();
}

function montrerMessage(xmlMessages){
	var msg=xmlMessages.getElementsByTagName("msg")[0].firstChild.nodeValue;
	$('#message').html(msg);
}
function montrerForm(formFilms){
	$('#contenu').html(obtenirFormFilms('dossier'));
	num=formFilms.getElementsByTagName("num")[0].firstChild.nodeValue;
	titre=formFilms.getElementsByTagName("titre")[0].firstChild.nodeValue;
	duree=formFilms.getElementsByTagName("duree")[0].firstChild.nodeValue;
	$('#num').val(num);
	$('#titre').val(titre);
	$('#duree').val(duree);
	$('#divNum').show();
}

//Controleur de View
 var gestionViewFilms = function (donnees,action){
	switch(action){
		case 'lister' :
		    listerFilms(donnees);
		break;
		case 'enlever' :
		case 'maj' :
		case 'enregistrer' :
		    montrerMessage(donnees);
		break;
		case 'dossier' :
		    montrerForm(donnees);
		break;
	}	
}