/*
* Auteurs: Yifei Zhang - IFT1147 -A2107 - DESI - Udem
*/





var clock=function () {
    var d = new Date();
    var n = d.toLocaleString();
   document.querySelectorAll(".clock")[0].innerHTML = n;
}
setInterval(clock, 1000);

function nouveauFilm()   {

          document.getElementById("catelogue").style.display = 'none';
          document.getElementById("catagories").style.display = 'none';
          document.getElementById("panier").style.display = 'none';
          document.getElementById("contact").style.display = 'none';
		  document.getElementById("facture").style.display = 'none';
		  document.getElementById("nouveauFilm").style.display = 'block';
       
           
            var dossier="./images/";
           
            var film = "<h2 style='color:#23ba5d;text-align:center;'>Nouveautes</h2><hr>";
            
           
            
            for (var i in tabFilms){ 
           
            	 for (var j in tabNouveautes) { 
                         
            if ( tabFilms[i].nbFilm ==tabNouveautes[j] ) {
            film +="  <div class='filmCard' id='card_" + tabFilms[i].nbFilm + "'>\n";
            film +="   <img onclick=\"apercu('"+ tabFilms[i].nbFilm+ "_video')\" src='" + dossier + tabFilms[i].pochette+ "' alt='Film_"+ tabFilms[i].titre+ " ' class='imgCard' id='img_" + tabFilms[i].nbFilm + "'>\n";
            film +="   <div class='infoCard'>\n";
            film +="     <h3>"+ tabFilms[i].titre+ "</h3>\n";
            film +="      <p>"+ tabFilms[i].realisateur+ "</p>\n";
            film +="      <p>"+ tabFilms[i].categorie+ "</p>\n";
            film +="      <p>"+ tabFilms[i].prix+ "</p>\n";
            film +="   </div>\n";
            film +="   <div class='infoShop'>\n";
            film +="      <form id='formAjoutFilm_" + tabFilms[i].nbFilm + "' action='#' method='POST'   onsubmit='shoppingCart.ajoutAuPanier(this)'>\n";
            film +="         <input type='number' style='width:2em;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); border-style: hidden;' name='qt' maxlength='1'  min='1' max='9' value='1'>\n";
            film +="    <br> <input type='hidden' name='nbFilm' value='" + tabFilms[i].nbFilm + "'>\n";
            film +="		 <input type='hidden' name='titre' value='"+ tabFilms[i].titre+ "'>\n";
            film +="		 <input type='hidden' name='prix' value='"+ tabFilms[i].prix+ "'>\n";
            film +="		 <input type='hidden' name='pochette' value='"+ tabFilms[i].pochette+ "'>\n";
            film +="		 <input type='hidden' name='ajoutFilm' value='ajoutFilm'>\n";
            film +="     	 <button class='btn1'  type='submit'>\n";
            film +="      <i class='fa fa-shopping-cart'>Ajouter</i></button>\n";
            film +="      </form></div></div>\n";
            
            film +="   <div id='"+ tabFilms[i].nbFilm+ "_video' class='nbFilm_video'><div style='width:100%; height:auto;'>\n";
            film +="   <div class='video'><h2 class='titre'>"+ tabFilms[i].titre + "</h2>\n";
            film +="   <iframe id='"+ tabFilms[i].nbFilm+ "_iframe' width='747' height='420' \n";
            film +="   src='https://www.youtube.com/embed/" + tabFilms[i].youtubeID + "?rel=0' frameborder='0' \n";
            film +="   allowfullscreen='true' allowscriptaccess='always'></iframe>\n";
            film +="   <input type='button' value='Quiter'  class='btn3' onClick=\"quiter('"+ tabFilms[i].nbFilm+ "_video','"+ tabFilms[i].nbFilm+ "_iframe')\"></div></div></div>\n";
            
                 }
                 }

            }
         document.getElementById("nouveauFilm").innerHTML = film;
        }  
        
        
function catelogue(page)   {
         
          document.getElementById("nouveauFilm").style.display = 'none';
          document.getElementById("catagories").style.display = 'none';
          document.getElementById("panier").style.display = 'none';
          document.getElementById("contact").style.display = 'none';
		  document.getElementById("facture").style.display = 'none';
          document.getElementById("catelogue").style.display = 'block';
            var page;

            var dossier="./images/";
           
            var film1 = "<h2 style='color:#23ba5d;text-align:center;'>Catelogue des films</h2><hr>";
            var filmTotal=tabFilms.length;
            var pagesize = 12;
            var offset= pagesize*(page-1);
            var maxi =pagesize*page;
            var pageTotal= Math.ceil(filmTotal/pagesize);
            			var debut=1;
				var avant=page-1;
				var apres= page+1;
				var fin= pageTotal;
				film1 +=" <div class='pageNum'>";
                                
                                if (page>1)
				{				
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + debut + ")'><i class='fa fa-fast-backward' aria-hidden='true'>&nbsp;</i></a>";
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + avant + ")'><i class='fa fa-backward' aria-hidden='true'>&nbsp;</i></a>";
				}
				film1 +="Total " + pageTotal + " page(s)-Page " + page;
				if (page<pageTotal)
				{
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + apres + ")'><i class='fa fa-forward' aria-hidden='true'>&nbsp;</i></a>";
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + fin + ")'><i class='fa fa-fast-forward' aria-hidden='true'>&nbsp;</i></a>";
				}
				film1 +="<div>";
            
            for (var i in tabFilms)   {
            	 
                     if ( i >= offset && i< maxi) {
            film1 +="  <div class='filmCard' id='card_" + tabFilms[i].nbFilm + "'>\n";
            film1 +="   <img onclick=\"apercu('"+ tabFilms[i].nbFilm+ "_video')\" src='" + dossier + tabFilms[i].pochette+ "' alt='Film_"+ tabFilms[i].titre+ " ' class='imgCard' id='img_" + tabFilms[i].nbFilm + "'>\n";
            film1 +="   <div class='infoCard'>\n";
            film1 +="     <h3>"+ tabFilms[i].titre+ "</h3>\n";
            film1 +="      <p>"+ tabFilms[i].realisateur+ "</p>\n";
            film1 +="      <p>"+ tabFilms[i].categorie+ "</p>\n";
            film1 +="      <p>"+ tabFilms[i].prix+ "</p>\n";
            film1 +="   </div>\n";
            film1 +="   <div class='infoShop'>\n";
            film1 +="      <form id='formAjoutFilm_" + tabFilms[i].nbFilm + "' action='#' method='POST'  onsubmit='shoppingCart.ajoutAuPanier(this)'>\n";
            film1 +="         <input type='number' style='width:2em;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); border-style: hidden;' name='qt' maxlength='1'  min='1' max='9' value='1'>\n";
            film1 +="    <br> <input type='hidden' name='nbFilm' value='" + tabFilms[i].nbFilm + "'>\n";
            film1 +="		 <input type='hidden' name='titre' value='"+ tabFilms[i].titre+ "'>\n";
            film1 +="		 <input type='hidden' name='prix' value='"+ tabFilms[i].prix+ "'>\n";
            film1 +="		 <input type='hidden' name='pochette' value='"+ tabFilms[i].pochette+ "'>\n";
            film1 +="		 <input type='hidden' name='ajoutFilm' value='ajoutFilm'>\n";
            film1 +="     	 <button class='btn1'  type='submit'>\n";
            film1 +="      <i class='fa fa-shopping-cart'>Ajouter</i></button>\n";
            film1 +="      </form></div></div>\n";
            
            film1 +="   <div id='"+ tabFilms[i].nbFilm+ "_video' class='nbFilm_video'><div style='width:100%; height:auto;'>\n";
            film1 +="   <div class='video'><h2 class='titre'>"+ tabFilms[i].titre + "</h2>\n";
            film1 +="   <iframe id='"+ tabFilms[i].nbFilm+ "_iframe' width='747' height='420' \n";
            film1 +="   src='https://www.youtube.com/embed/" + tabFilms[i].youtubeID + "?rel=0' frameborder='0' \n";
            film1 +="   allowfullscreen='true' allowscriptaccess='always'></iframe>\n";
            film1 +="   <input type='button' value='Quiter'  class='btn3' onClick=\"quiter('"+ tabFilms[i].nbFilm+ "_video','"+ tabFilms[i].nbFilm+ "_iframe')\"></div></div></div>\n";
            
                 }


            }
            
             	film1 +=" <div class='pageNum'>";
          
                                if (page>1)
				{				
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + debut + ")'><i class='fa fa-fast-backward' aria-hidden='true'>&nbsp;</i></a>";
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + avant + ")'><i class='fa fa-backward' aria-hidden='true'>&nbsp;</i></a>";
				}
				film1 +="Total " + pageTotal + " page(s)-Page " + page;
				if (page<pageTotal)
				{
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + apres + ")'><i class='fa fa-forward' aria-hidden='true'>&nbsp;</i></a>";
				film1 +="&nbsp;<a href='#' onClick='catelogue(" + fin + ")'><i class='fa fa-fast-forward' aria-hidden='true'>&nbsp;</i></a>";
				}
				film1 +="<div>";
         document.getElementById("catelogue").innerHTML = film1;
        }  


function catagories()   {
         
          document.getElementById("nouveauFilm").style.display = 'none';
          document.getElementById("catelogue").style.display = 'none';
          document.getElementById("catagories").style.display = 'block';
          document.getElementById("panier").style.display = 'none';
		  document.getElementById("facture").style.display = 'none';
          document.getElementById("contact").style.display = 'none';
        
            var catagorie = document.getElementById("selCtgr").value;
            var dossier="./images/";
           
            var film2 = "<h2 style='color:#23ba5d;text-align:center;'>Liste des films de categorie: " + catagorie + "</h2><hr>";
 
            
            for (var i in tabFilms)
           
            	 { if ( tabFilms[i].categorie == catagorie) {
            film2 +="  <div class='filmCard' id='card_" + tabFilms[i].nbFilm + "'>\n";
            film2 +="   <img onclick=\"apercu('"+ tabFilms[i].nbFilm+ "_video')\" src='" + dossier + tabFilms[i].pochette+ "' alt='Film_"+ tabFilms[i].titre+ " ' class='imgCard' id='img_" + tabFilms[i].nbFilm + "'>\n";
            film2 +="   <div class='infoCard'>\n";
            film2 +="     <h3>"+ tabFilms[i].titre+ "</h3>\n";
            film2 +="      <p>"+ tabFilms[i].realisateur+ "</p>\n";
            film2 +="      <p>"+ tabFilms[i].categorie+ "</p>\n";
            film2 +="      <p>"+ tabFilms[i].prix+ "</p>\n";
            film2 +="   </div>\n";
            film2 +="   <div class='infoShop'>\n";
            film2 +="      <form id='formAjoutFilm_" + tabFilms[i].nbFilm + "' action='#' method='POST'  onsubmit='shoppingCart.ajoutAuPanier(this)'>\n";
            film2 +="         <input type='number' style='width:2em;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); border-style: hidden;' name='qt' maxlength='1'  min='1' max='9' value='1'>\n";
            film2 +="    <br> <input type='hidden' name='nbFilm' value='" + tabFilms[i].nbFilm + "'>\n";
            film2 +="		 <input type='hidden' name='titre' value='"+ tabFilms[i].titre+ "'>\n";
            film2 +="		 <input type='hidden' name='prix' value='"+ tabFilms[i].prix+ "'>\n";
            film2 +="		 <input type='hidden' name='pochette' value='"+ tabFilms[i].pochette+ "'>\n";
            film2 +="		 <input type='hidden' name='ajoutFilm' value='ajoutFilm'>\n";
            film2 +="     	 <button class='btn1'  type='submit'>\n";
            film2 +="      <i class='fa fa-shopping-cart'>Ajouter</i></button>\n";
            film2 +="      </form></div></div>\n";
            
            film2 +="   <div id='"+ tabFilms[i].nbFilm+ "_video' class='nbFilm_video'><div style='width:100%; height:auto;'>\n";
            film2 +="   <div class='video'><h2 class='titre'>"+ tabFilms[i].titre + "</h2>\n";
            film2 +="   <iframe id='"+ tabFilms[i].nbFilm+ "_iframe' width='747' height='420' \n";
            film2 +="   src='https://www.youtube.com/embed/" + tabFilms[i].youtubeID + "?rel=0' frameborder='0' \n";
            film2 +="   allowfullscreen='true' allowscriptaccess='always'></iframe>\n";
            film2 +="   <input type='button' value='Quiter'  class='btn3' onClick=\"quiter('"+ tabFilms[i].nbFilm+ "_video','"+ tabFilms[i].nbFilm+ "_iframe')\"></div></div></div>\n";
            
                 }
            

            }
         document.getElementById("catagories").innerHTML = film2;
        } 


function panierAfficher() {
	document.getElementById("nouveauFilm").style.display = 'none';
	document.getElementById("catelogue").style.display = 'none';
	document.getElementById("catagories").style.display = 'none';
	document.getElementById("contact").style.display = 'none';
	document.getElementById("facture").style.display = 'none';
	document.getElementById("panier").style.display = 'block';

	var dossier = "./images/";
	var film3 = "<h2 style='color:#23ba5d;text-align:center;'>Votre Panier</h2><hr>\n";
	film3 += "<button class='btn2' type='submit' onClick='shoppingCart.viderPanier();' style='position:absolute;top:30%;right:10%;'>Vider le Panier</button>\n";
		
		shoppingCart.chargerPanier();
		console.log(shoppingCart.panier);
	if (shoppingCart.panier.length > 0) {
		var sum = 0;
		film3 += "<table border=0>\n";
		for (var i in shoppingCart.panier) {
			film3 += "<tr><td><img src='" + dossier + shoppingCart.panier[i]["pochette"] + "' alt='" + shoppingCart.panier[i]["titre"] + " ' style='width:40%' ></td>\n";
			film3 += "<td>" + shoppingCart.panier[i]["titre"] + "</td><td>" + shoppingCart.panier[i]["qt"] + "</td><td>$" + shoppingCart.panier[i]["prix"] + "</td><td>\n";
			film3 += "<button class='btn2' type='submit' onClick='shoppingCart.enleverArticle (" + shoppingCart.panier[i]['nbFilm'] + ");'>Supprimer</button></td></tr>\n";
			sum += shoppingCart.panier[i]["prix"]*shoppingCart.panier[i]["qt"];

		}
		
		var stotal = sum.toFixed(2);
		var TVQ = (sum * 0.09975).toFixed(2);
		var TPS = (sum * 0.05).toFixed(2);
		var total = (sum * 1.14975).toFixed(2);

		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Sous-total:$" + stotal + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TVQ:$" + TVQ + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TPQ:$" + TPS + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Total:$" + total + "</td></tr>\n";
		film3 += "<tr><td colspan='4' style='text-align:center'>\n";
		film3 += "<button class='btn1' type='submit' onClick='payerInfo();'>Payer</button></td><td></td></tr>\n";
		film3 += "</table>\n";
	} else {
		film3 += "<script>alert('Votre panier est vide.')</script>";
		film3 += "<h3 style='text-align:center'>Aucun film dans votre panier.</h3>\n";
	}

	document.getElementById("panier").innerHTML = film3;
}


function payerInfo() {
	document.getElementById("nouveauFilm").style.display = 'none';
	document.getElementById("catelogue").style.display = 'none';
	document.getElementById("catagories").style.display = 'none';
	document.getElementById("panier").style.display = 'none';
	document.getElementById("facture").style.display = 'none';
	document.getElementById("contact").style.display = 'block';

	var dossier = "./images/";
	var film4 = "<h2 style='color:#23ba5d;text-align:center;'>Votre commande</h2><hr><br><br>\n";
	film4 += "<button class='btn2' type='submit' onClick='panierAfficher();' style='position:absolute;top:30%;right:10%;'>Annuler le commande</button>\n";
		
		shoppingCart.chargerPanier();
		console.log(shoppingCart.panier);
	if (shoppingCart.panier.length == 0) {
		film4 += "<h3 style='text-align:center'>Aucun film dans votre panier.</h3>\n";
		film4 += "<br><br><script  type='text/javascript'>nouveauFilm(); </script><br><br>";
	}
	else
	{
	
	
		var sum = 0;
		film4 += "<table border=0>\n";
		film4 += "<tr><th>no</th><th>ProduitID</th><th>Titre</th><th>Quantite</th><th>Prix</th><th style='text-align:right'>Montant</th></tr>";
		for (var i in shoppingCart.panier) {
			var n = Number(i)+1;
			film4 += "<tr><td>Article-" + n +     "</td><td>nbFilm-" + shoppingCart.panier[i]["nbFilm"] + "</td>\n";
			film4 += "<td>"+ shoppingCart.panier[i]["titre"]+"</td><td>"+ shoppingCart.panier[i]["qt"]+"</td><td>$"+ shoppingCart.panier[i]["prix"]+"</td><td>";
			film4 += "</td></tr>";
			sum += shoppingCart.panier[i]["prix"]*shoppingCart.panier[i]["qt"];

		}
		
		var stotal = sum.toFixed(2);
		var TVQ = (sum * 0.09975).toFixed(2);
		var TPS = (sum * 0.05).toFixed(2);
		var total = (sum * 1.14975).toFixed(2);

		film4 += "<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Sous-total:" + stotal + "</td></tr>\n";
		film4 += "<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TVQ:$" + TVQ + "</td></tr>\n";
		film4 += "<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TPQ:$" + TPS + "</td></tr>\n";
		film4 += "<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Total:$" + total + "</td></tr>\n";
		
		film4 += "<form id='formComm' name='formComm' ENCTYPE='multipart/form-data' action='#' method='post' onsubmit='facture();'>\n";

		film4 += "<tr><td colspan='5' style='text-align:center'><h3 style='color:#23ba5d;'>Les information du destinaire</h3></td></tr>\n";
		film4 += "<tr><td> </td><td>Nom du destinaire:</td><td colspan='3' style='text-align:left'><input type='text' size='50' style='width:360px;' id='nomDesti' name='nomDesti' placeholder='Nom Prenom'  required/><i  id='i1' name='i1' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Adresse:</td><td colspan='3' style='text-align:left'><textarea type='text' rows='3' cols='50' style='width:360px;' id='adresseDesti' name='adresseDesti'  required/></textarea><i  id='i2' name='i2' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Telephone:</td><td colspan='3' style='text-align:left'><input type='tel' size='50' style='width:360px;' id='teleDesti' name='teleDesti' placeholder='5141234567'  required/ ><i id='i3' name='i3' class= 'fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Courriel:</td><td colspan='3' style='text-align:left'><input type='email' size='50' style='width:360px;' id='emialDesti' name='emialDesti'  required/><i  id='i4' name='i4' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Remarques:</td><td colspan='3' style='text-align:left'><textarea type='text' rows='5' cols='50' style='width:360px;' id='noteDesti' name='noteDesti'/></textarea><i class='fa fa-commenting-o' aria-hidden='true'></i></td></tr>\n";
	
		film4 += "<tr><td colspan='5' style='text-align:center'><h3 style='color:#23ba5d;'>Les information du payment</h3></td></tr>\n";
		film4 += "<tr><td> </td><td>Payement mothed:</td><td colspan='3' style='text-align:left'><input type='text' size='50' style='width:360px;' id='typeCarte' name='typeCarte' placeholder='Mastercard, VISAcard etc'  required/><i  id='i5' name='i5' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Payement Carte numero:</td><td colspan='3' style='text-align:left'><input type='text' size='50' style='width:360px;' id='nbCarte' name='nbCarte'  required/><i  id='i6' name='i6' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Date Expiration:</td><td colspan='3' style='text-align:left'><input type='text' size='50' style='width:360px;' id='expCarte' name='expCarte' placeholder='MM/AA ou MM/AAAA'  required/><i  id='i7' name='i7' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Pin Code</td><td colspan='3' style='text-align:left'><input type='password' size='50' style='width:360px;' id='pinCarte' name='pinCarte'  required/><i  id='i8' name='i8' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";
		film4 += "<tr><td> </td><td>Nom du porteur:</td><td colspan='3' style='text-align:left'><input type='text' size='50' style='width:360px;' id='nomCarte' name='nomCarte'  required/><i  id='i9' name='i9' class='fa fa-pencil' aria-hidden='true'></i></td></tr>\n";

		film4 += "<tr><td> </td><td> </td><td> </td><td colspan='2' style='text-align:center'>\n";
		film4 += "<input type='hidden' id='action' name='action' value='passer'/>\n";
			
		
		film4 += "<button class='btn1' type='submit' onClick='validerFormComm(document.formComm);' >Passer la commande</button></td><td></td></tr>\n";
		film4 += "</td></tr></form></table>\n";
	} 

	document.getElementById("contact").innerHTML = film4;

}

function facture() {
	
				Email.send("jz8films@gmail.com",
					"jz8@live.cn",
					"La commande subject",
					"La commande est envoyie au JZ8FILmS Inc XXXX",
					{
					token: "02a1d170-ce93-4a09-891a-63bc9bc7b9d5",
					callback: function done(message) { alert("La commande est envoyie au JZ8FILmS Inc")}
					} 
					);


	
	Email.send("jz8films@gmail.com",
				"jz8@live.cn",
				"La facture",
				"La facture vous est envoyiee en courriel.XXX",
				 "www.videotron.com",
				"jz8films@gmail.com",
				"jz8@films",
				function done(message) { alert("La facture vous est envoyiee en courriel.") }  
				
				);

  //   Outgoing Mail (SMTP) Server: smtp.gmail.com
    // Use Authentication: Yes
   //  Use Secure Connection: Yes (TLS or SSL depending on your mail client/website SMTP plugin)
    // Username: your Gmail account (e.g. user@gmail.com)
     //Password: your Gmail password
     //Port: 465 (SSL required) or 587 (TLS required)
	
	
 //Your security token is 9a41465a-3d47-4e50-bf6f-4f664e930d2e

 //jz8films@gmail.com
 //jz8@films

 //02a1d170-ce93-4a09-891a-63bc9bc7b9d5
 //smtpjs.com/
 //Autre method: var nodemailer = require('nodemailer');

	
	
		
		var nomDesti = document.getElementById("nomDesti").value;
	sessionStorage.setItem("nomDesti", nomDesti);
	
		var adresseDesti = document.getElementById("adresseDesti").value;
	sessionStorage.setItem("adresseDesti", adresseDesti);
		var teleDesti = document.getElementById("teleDesti").value;
	sessionStorage.setItem("teleDesti", teleDesti);
		var emialDesti = document.getElementById("emialDesti").value;
	sessionStorage.setItem("emialDesti", emialDesti);
		var typeCarte = document.getElementById("typeCarte").value;
	sessionStorage.setItem("typeCarte", typeCarte);
		var nbCarte = document.getElementById("nbCarte").value;
	sessionStorage.setItem("nbCarte", nbCarte);
		var expCarte = document.getElementById("expCarte").value;
	sessionStorage.setItem("expCarte", expCarte);
		var nomCarte = document.getElementById("nomCarte").value;
	sessionStorage.setItem("nomCarte", nomCarte);
		var pinCarte = document.getElementById("pinCarte").value;
	sessionStorage.setItem("pinCarte", pinCarte);

	document.getElementById("nouveauFilm").style.display = 'none';
	document.getElementById("catelogue").style.display = 'none';
	document.getElementById("catagories").style.display = 'none';
	document.getElementById("panier").style.display = 'none';
	document.getElementById("contact").style.display = 'none';
	document.getElementById("facture").style.display = 'block';
	
	
	var dossier = "./images/";
	var film5 = "<h2 style='color:#23ba5d;text-align:center;'>Votre facture</h2><hr><br><br>\n";
	film5 += "<button class='btn1' onclick='window.print()' style='position:absolute;top:30%;right:20%;'>Imprimer</button>\n";
		
		shoppingCart.chargerPanier();
		console.log(shoppingCart.panier);
	if (shoppingCart.panier.length == 0) {
		film5 += "<h3 style='text-align:center'>Aucun film dans votre panier.</h3>\n";
		film5 += "<br><br><script  type='text/javascript'>nouveauFilm(); </script><br><br>";
	}
	else
	{
	
	
		var sum = 0;
		film5 += "<table border=0>\n";
		film5 += "<tr><th>no</th><th>ProduitID</th><th>Titre</th><th>Quantite</th><th>Prix</th><th style='text-align:right'>Montant</th></tr>";
		for (var i in shoppingCart.panier) {
			var n=Numer(i)+1;
			film5 += "<tr><td>Article-" + n + "</td><td>nbFilm-" + shoppingCart.panier[i]["nbFilm"] +"</td>\n";
			film5 += "<td>"+ shoppingCart.panier[i]["titre"]+"</td><td>"+ shoppingCart.panier[i]["qt"]+"</td><td>$"+ shoppingCart.panier[i]["prix"]+"</td><td>";
			film5 += "</td></tr>";
			sum += shoppingCart.panier[i]["prix"]*shoppingCart.panier[i]["qt"];

		}
		
		var stotal = sum.toFixed(2);
		var TVQ = (sum * 0.09975).toFixed(2);
		var TPS = (sum * 0.05).toFixed(2);
		var total = (sum * 1.14975).toFixed(2);
		var date = new Date();
		var nbCom = date.toJSON(); 
		sessionStorage.getItem("nomDesti")
		
		film5 += "<tr><td> </td><td> </td<td> </td><td> </td><td> </td><td style='text-align:right'>Sous-total:" + stotal + "</td></tr>\n";
		film5 += "<tr><td> </td><td> </td<td> </td><td> </td><td> </td><td style='text-align:right'>TVQ:$" + TVQ + "</td></tr>\n";
		film5 += "<tr><td> </td><td> </td<td> </td><td> </td><td> </td><td style='text-align:right'>TPQ:$" + TPS + "</td></tr>\n";
		film5 += "<tr><td> </td><td> </td<td> </td><td> </td><td> </td><td style='text-align:right'>Total:$" + total + "</td></tr>\n";
		film5 += "<tr><td colspan='5' style='text-align:center'><h3 style='color:#23ba5d;'>Les information du destinaire</h3></td></tr>\n";
		film5 += "<tr><td> </td><td>Nom du destinaire:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("nomDesti") + "</td></tr>\n";
		film5 += "<tr><td> </td><td>Adresse:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("adresseDesti") + "</textarea></td></tr>\n";
		film5 += "<tr><td> </td><td>Telephone:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("teleDesti") + "</td></tr>\n";
		film5 += "<tr><td> </td><td>Courriel:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("emialDesti") + "</td></tr>\n";
					
		film5 += "<tr><td colspan='5' style='text-align:center'><h3 style='color:#23ba5d;'>Les information du payment</h3></td></tr>\n";
		film5 += "<tr><td> </td><td>Payement mothed:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("typeCarte") + "</td></tr>\n";
		film5 += "<tr><td> </td><td>Payement Carte numero:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("nbCarte")+ "</td></tr>\n";
		film5 += "<tr><td> </td><td>Date Expiration:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("expCarte") + "</td></tr>\n";
		film5 += "<tr><td> </td><td>Pin Code:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("pinCarte") + "</td></tr>\n";
		film5 += "<tr><td> </td><td>Nom du porteur:</td><td colspan='3' style='text-align:left'>" + sessionStorage.getItem("nomCarte") + "</td></tr>\n";
					
		film5 += "</td></tr>\n";
				
		film5 += "<tr><td> </td><td colspan='2' >Date de commande<br>(No. de Facture) </td><td colspan='3' ><h3>" + nbCom + "</h3></td></tr>\n";
					
		film5 += "<tr></td><td><td>Facturee par</td><td colspan='3' style='text-align:left'><p> JZ8 Films inc.<br>\n"; 
		film5 += " XXX Sherbrooke Street Nord, Montreal, Quebec, Canada H3A 0G4<br> Tele:514-123-1234 <br> Email:sales@jz8films.com </p></td></tr>\n";
					
		film5 += "</table>\n";
	} 

	document.getElementById("facture").innerHTML = film5;
	

}




function validerFormComm(formulaire) {
	var valide = true;
	var nomDesti = document.getElementById("nomDesti").value;

	var adresseDesti = document.getElementById("adresseDesti").value;
	
	var teleDesti = document.getElementById("teleDesti").value;
	
	var emialDesti = document.getElementById("emialDesti").value;

	var typeCarte = document.getElementById("typeCarte").value;
	
	var nbCarte = document.getElementById("nbCarte").value;
	
	var expCarte = document.getElementById("expCarte").value;
	
	var nomCarte = document.getElementById("nomCarte").value;
	
	var pinCarte = document.getElementById("pinCarte").value;
	

	var expReg_nomDesti=/[a-zA-Z]{2,30}$/;
	var expReg_adresseDesti= /\w]{10,100}$/;
	var expReg_teleDesti=/[0-9]{10}$/;
	var expReg_emialDesti=/[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
	var expReg_typeCarte=/[a-zA-Z]{4,20}$/;
	var expReg_nbCarte=/[0-9]{15,16}$/;
	var expReg_expCarte=/[0-9]{2}[.-/,][0-9]{2,4}$/;
	var expReg_nomCarte=/[a-zA-Z]{2,30}$/;
	var expReg_pinCarte=/[0-9]{3,6}$/;

	
	
		if (!expReg_nomDesti.test(nomDesti)) {
		document.getElementById("i1").className = "fa fa-times";
		alert("Verifier votre nom et prenom,SVP!");
		valide = false;
		
		
	} else {
		document.getElementById("i1").className ="fa fa-check";
		sessionStorage.setItem("nomDesti", nomDesti);
	}
	
	
		if (adresseDesti=="" && !expReg_nomDesti.test(adresseDesti)) {
		alert("L'adresse doit etre en chiffres et lettres seulement,SVP!");
		valide = false;
		document.getElementById("i2").className ="fa fa-times";
		
	} else {
		document.getElementById("i2").className ="fa fa-check";
		sessionStorage.setItem("adresseDesti", adresseDesti);
	}
	
			if (!expReg_teleDesti.test(teleDesti)) {
		alert("tele doit etre 10 chiffres,SVP!");
		valide = false;
		document.getElementById("i3").className="fa fa-times";
		
	} else {
		document.getElementById("i3").className="fa fa-check";
		sessionStorage.setItem("teleDesti", teleDesti);
	}		
	
	if (!expReg_emialDesti.test(emialDesti)) {
		alert("Verifier courriel,SVP!");
		valide = false;
		document.getElementById("i4").className="fa fa-times";
		
	} else {
		document.getElementById("i4").className="fa fa-check";
		sessionStorage.setItem("emialDesti", emialDesti);
	}
	
			if (!expReg_typeCarte.test(typeCarte)) {
		alert("Verifier le type de votre carte,SVP!");
		valide = false;
		document.getElementById("i5").className="fa fa-times";
		
	} else {
		document.getElementById("i5").className="fa fa-check";
		sessionStorage.setItem("typeCarte", typeCarte);
	}
	
		if (!expReg_nbCarte.test(nbCarte)) {
		alert("Le numero doit etre 15 ou 16 chiffres ,SVP!");
		valide = false;
		document.getElementById("i6").className="fa fa-times";
		
	} else {
		document.getElementById("i6").className="fa fa-check";
		sessionStorage.setItem("nbCarte", nbCarte);
	}
	
			if (!expReg_expCarte.test(expCarte)) {
		alert("Verifier l'expiration de votre carte,SVP!");
		valide = false;
		ocument.getElementById("i7").className="fa fa-times";		
		
	} else {
		document.getElementById("i7").className ="fa fa-check";
		sessionStorage.setItem("expCarte", expCarte);
	}
	
	
	if (!expReg_pinCarte.test(pinCarte)) {
		alert("Le pin doit etre entre 3 et 6 chiffres,SVP!");
		valide = false;
		document.getElementById("i8").className ="fa fa-times";
		
	} else {
		document.getElementById("i8").className ="fa fa-check";
		sessionStorage.setItem("pinCarte", pinCarte);
	}
	
	
	
	if (!expReg_nomCarte.test(nomCarte)) {
		alert("Verifier le no sur votre carte,SVP!");
		valide = false;
		document.getElementById("i9").className ="fa fa-times";
		
	} else {
		document.getElementById("i9").className ="fa fa-check";
		sessionStorage.setItem("nomCarte", nomCarte);
	}
	


	if (valide) {
		facture();

	}
}

function apercu(elem) {
	document.getElementById(elem).style.display = 'block';
}

function quiter(elem1, elem2) {
	document.getElementById(elem1).style.display = 'none';
	var iframe = document.getElementById(elem2);
	iframe.src = iframe.src;
}

/*
 * Fin de Javascript    2017-11-11 ZYF
 */
