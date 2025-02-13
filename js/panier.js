   var shoppingCart={};
    shoppingCart.panier=[];
    shoppingCart.Article= function(nbFilm,titre,prix,qt,pochette) {
        this.nbFilm =nbFilm;
        this.titre =titre;
        this.prix=prix;
        this.qt=Number(qt);
        this.pochette=pochette;
    }
    shoppingCart.ajoutAuPanier = function(formAF) {
        for (var i in shoppingCart.panier) {
        if (shoppingCart.panier[i].nbFilm==formAF.nbFilm.value) {
            shoppingCart.panier[i].qt += Number(formAF.qt.value);
            shoppingCart.enregistrerPanier();
            return;
        }
    }  
    var articleAjout= new shoppingCart.Article;
    articleAjout.nbFilm=formAF.nbFilm.value;
    articleAjout.titre= formAF.titre.value;
    articleAjout.prix= formAF.prix.value;
    articleAjout.qt= Number(formAF.qt.value);
    articleAjout.pochette= formAF.pochette.value;
    
    shoppingCart.panier.push(articleAjout);
	shoppingCart.enregistrerPanier();
	
	console.log(shoppingCart.panier);
	
	console.log(shoppingCart.panier.length);
  

	alert(articleAjout.qt +" unite(s) Film -"+ articleAjout.titre +  "- ajoute a votre panier!");
    }

   shoppingCart.enleverArticle = function(nbFilm)  {
        for (var i in shoppingCart.panier) {
            if (shoppingCart.panier[i].nbFilm==nbFilm) {
               shoppingCart.panier.splice(i,1);
               
            }
        }
       shoppingCart.enregistrerPanier();
	   panierAfficher();
    }

    shoppingCart.viderPanier = function() {
		localStorage.removeItem("shoppingCart");
		shoppingCart.panier=[];
        shoppingCart.enregistrerPanier();
		panierAfficher();
    }
    shoppingCart.compterPanier= function() {
        var sum=0;
		for (var i in shoppingCart.panier) {
		sum += shoppingCart.panier[i]["prix"]*shoppingCart.panier[i]["qt"];
		}
        return sum.toFixed(2);
    }
    
    shoppingCart.enregistrerPanier =function() {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart.panier));
    }
    
    shoppingCart.chargerPanier = function() {
        shoppingCart.panier=JSON.parse(localStorage.getItem("shoppingCart"));
    }
    
	
	
	
function panier()   {
    document.getElementById("nouveauFilm").style.display = 'none';
	document.getElementById("catelogue").style.display = 'none';
	document.getElementById("catagories").style.display = 'none';
	document.getElementById("contact").style.display = 'none';
	document.getElementById("panier").style.display = 'block';

	var dossier = "./images/";
	var film3 = "<h2 style='color:#23ba5d;text-align:center;'>Votre Panier</h2><hr>\n";
	film3 += "<button class='btn2' type='submit' onClick='shoppingCart.viderPanier();' style='position:absolute;top:30%;right:10%;'>Vider le Panier</button>\n";
		
		shoppingCart.chargerPanier();
		console.log(shoppingCart.panier);
	if (shoppingCart.panier.length > 0) {
		var sum = 0;
		film3 += "<table border=0>\n";
		for (i in shoppingCart.panier) {
			film3 += "<tr><td><img src='" + dossier + shoppingCart.panier[i]["pochette"] + "' alt='" + shoppingCart.panier[i]["titre"] + " ' style='width:40%' ></td>\n";
			film3 += "<td>" + shoppingCart.panier[i]["titre"] + "</td><td>" + shoppingCart.panier[i]["qt"] + "</td><td>" + shoppingCart.panier[i]["prix"] + "</td><td>\n";
			film3 += "<button class='btn2' type='submit' onClick='shoppingCart.enleverArticle (" + shoppingCart.panier[i]['nbFilm'] + ");'>Supprimer</button></td></tr>\n";
			sum += shoppingCart.panier[i]["prix"]*shoppingCart.panier[i]["qt"];

		}
		
		var stotal = sum.toFixed(2);
		var TVQ = (sum * 0.09975).toFixed(2);
		var TPS = (sum * 0.05).toFixed(2);
		var total = (sum * 1.14975).toFixed(2);

		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Sous-total:" + stotal + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TVQ:$" + TVQ + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>TPQ:$" + TPS + "</td></tr>\n";
		film3 += "<tr><td> </td><td> </td><td> </td><td> </td><td style='text-align:right'>Total:$" + total + "</td></tr>\n";
		film3 += "<tr><td colspan='4' style='text-align:center'>\n";
		film3 += "<button class='btn1' type='submit'>Commander</button></td><td></td></tr>\n";
		film3 += "</table>\n";
	} else {
		film3 += "<script>alert('Votre panier est vide.')</script>";
		film3 += "<h3 style='text-align:center'>Aucun film dans votre panier.</h3>\n";
	}

	document.getElementById("panier").innerHTML = film3;
}

