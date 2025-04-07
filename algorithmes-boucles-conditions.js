// NIVEAU 1 : DÉBUTANT

// Exercice 1.1 : Vérificateur d'âge
function verifierAge(age) {
  if (age >= 18) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}

// Exemple d'utilisation:
console.log(verifierAge(16)); // "Accès refusé"
console.log(verifierAge(21)); // "Accès autorisé"

// Exercice 1.2 : Somme des nombres
function sommeJusquaN(n) {
  let somme = 0;
  for (let i = 1; i <= n; i++) {
    somme += i;
  }
  return somme;
}

// Exemple d'utilisation:
console.log(sommeJusquaN(5)); // 15 (1+2+3+4+5)
console.log(sommeJusquaN(10)); // 55

// Exercice 1.3 : Compteur de voyelles
function compterVoyelles(texte) {
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'à', 'â', 'é', 'è', 'ê', 'ë', 'î', 'ï', 'ô', 'ù', 'û', 'ü'];
  let compteur = 0;
  
  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i].toLowerCase())) {
      compteur++;
    }
  }
  
  return compteur;
}

// Exemple d'utilisation:
console.log(compterVoyelles("Bonjour")); // 3
console.log(compterVoyelles("Algorithme")); // 4

// NIVEAU 2 : INTERMÉDIAIRE DÉBUTANT

// Exercice 2.1 : Calculatrice de facture
function calculerFacture(prixPlats) {
  let total = 0;
  
  for (const prix of prixPlats) {
    total += prix;
  }
  
  if (total > 50) {
    total = total * 0.9; // Réduction de 10%
  }
  
  return total;
}

// Exemple d'utilisation avec une interface console:
function calculerFactureInteractive() {
  const prixPlats = [];
  let saisie;
  
  // Dans un environnement réel, on utiliserait prompt() ou un autre moyen de saisie utilisateur
  do {
    saisie = parseFloat(prompt("Entrez le prix d'un plat (0 pour terminer):"));
    if (saisie !== 0 && !isNaN(saisie)) {
      prixPlats.push(saisie);
    }
  } while (saisie !== 0);
  
  const total = calculerFacture(prixPlats);
  return `Total à payer: ${total.toFixed(2)}€`;
}

// Pour tester sans interface:
console.log(calculerFacture([12.50, 24.90, 8.75])); // 46.15€ (pas de réduction)
console.log(calculerFacture([25.90, 32.50, 12.60])); // 63.9€ (avec réduction de 10%)

// Exercice 2.2 : Jeu de devinette
function jeuDevinette() {
  const nombreSecret = Math.floor(Math.random() * 100) + 1;
  let tentative;
  let nombreEssais = 0;
  let message = "";
  
  do {
    // Dans un environnement réel, on utiliserait prompt()
    tentative = parseInt(prompt("Devinez le nombre entre 1 et 100:"));
    nombreEssais++;
    
    if (tentative < nombreSecret) {
      message = "Plus grand!";
    } else if (tentative > nombreSecret) {
      message = "Plus petit!";
    } else {
      message = `Bravo! Vous avez trouvé ${nombreSecret} en ${nombreEssais} essais.`;
    }
    
    console.log(message);
  } while (tentative !== nombreSecret);
  
  return nombreEssais;
}

// Version simplifiée pour tester la logique:
function simulerJeuDevinette(nombreSecret, tentatives) {
  let nombreEssais = 0;
  let resultat = [];
  
  for (const tentative of tentatives) {
    nombreEssais++;
    
    if (tentative < nombreSecret) {
      resultat.push("Plus grand!");
    } else if (tentative > nombreSecret) {
      resultat.push("Plus petit!");
    } else {
      resultat.push(`Bravo! Vous avez trouvé ${nombreSecret} en ${nombreEssais} essais.`);
      break;
    }
  }
  
  return resultat;
}

// Exemple d'utilisation:
console.log(simulerJeuDevinette(42, [50, 30, 40, 45, 42]));

// Exercice 2.3 : Tableau de multiplication
function tableauMultiplication(n) {
  const resultat = [];
  
  for (let i = 1; i <= 10; i++) {
    // On saute les multiples de 3
    if (i % 3 === 0) {
      continue;
    }
    resultat.push(`${n} × ${i} = ${n * i}`);
  }
  
  return resultat;
}

// Exemple d'utilisation:
console.log(tableauMultiplication(7));
// Affiche: ["7 × 1 = 7", "7 × 2 = 14", "7 × 4 = 28", "7 × 5 = 35", "7 × 7 = 49", "7 × 8 = 56", "7 × 10 = 70"]

// NIVEAU 3 : INTERMÉDIAIRE

// Exercice 3.1 : Gestion d'inventaire
class GestionInventaire {
  constructor() {
    this.inventaire = {}; // Structure: {nomProduit: {quantite: x, seuilAlerte: y}}
  }
  
  ajouterProduit(nom, quantite, seuilAlerte = 5) {
    if (this.inventaire[nom]) {
      this.inventaire[nom].quantite += quantite;
    } else {
      this.inventaire[nom] = { quantite, seuilAlerte };
    }
    return `${quantite} ${nom}(s) ajouté(s) à l'inventaire.`;
  }
  
  retirerProduit(nom, quantite) {
    if (!this.inventaire[nom]) {
      return `Erreur: ${nom} n'existe pas dans l'inventaire.`;
    }
    
    if (this.inventaire[nom].quantite < quantite) {
      return `Erreur: stock insuffisant. Il reste ${this.inventaire[nom].quantite} ${nom}(s).`;
    }
    
    this.inventaire[nom].quantite -= quantite;
    
    // Alerte si stock sous le seuil
    if (this.inventaire[nom].quantite < this.inventaire[nom].seuilAlerte) {
      return `${quantite} ${nom}(s) retiré(s). ALERTE: Stock bas (${this.inventaire[nom].quantite}).`;
    }
    
    return `${quantite} ${nom}(s) retiré(s) de l'inventaire.`;
  }
  
  afficherInventaire() {
    const resultat = [];
    for (const [produit, details] of Object.entries(this.inventaire)) {
      resultat.push(`${produit}: ${details.quantite} en stock (seuil d'alerte: ${details.seuilAlerte})`);
    }
    return resultat.length > 0 ? resultat : ["L'inventaire est vide."];
  }
}

// Exemple d'utilisation:
const inventaire = new GestionInventaire();
console.log(inventaire.ajouterProduit("Ordinateur", 10, 3));
console.log(inventaire.ajouterProduit("Clavier", 15, 5));
console.log(inventaire.afficherInventaire());
console.log(inventaire.retirerProduit("Ordinateur", 8)); // Alerte stock bas
console.log(inventaire.retirerProduit("Clavier", 20)); // Erreur: stock insuffisant

// Exercice 3.2 : Vérificateur de nombre premier
function estNombrePremier(nombre) {
  // Cas particuliers
  if (nombre <= 1) return false;
  if (nombre <= 3) return true;
  if (nombre % 2 === 0 || nombre % 3 === 0) return false;
  
  // On vérifie seulement jusqu'à la racine carrée du nombre
  // Et on optimise en vérifiant uniquement les nombres de la forme 6k±1
  const limite = Math.sqrt(nombre);
  for (let i = 5; i <= limite; i += 6) {
    if (nombre % i === 0 || nombre % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

// Exemple d'utilisation:
for (const n of [2, 3, 17, 20, 97, 100]) {
  console.log(`${n} est${estNombrePremier(n) ? '' : ' non'} premier.`);
}

// Exercice 3.3 : Simulateur de distributeur automatique
class DistributeurAutomatique {
  constructor() {
    // Initialisation des produits: [nom, prix]
    this.produits = {
      A1: { nom: "Eau minérale", prix: 1.20 },
      A2: { nom: "Soda", prix: 1.80 },
      A3: { nom: "Jus de fruits", prix: 2.10 },
      B1: { nom: "Chocolat", prix: 1.50 },
      B2: { nom: "Chips", prix: 1.70 },
      B3: { nom: "Barre énergétique", prix: 2.30 }
    };
    
    // Types de pièces/billets acceptés
    this.monnaies = [0.10, 0.20, 0.50, 1, 2, 5, 10];
    
    this.montantInsere = 0;
  }
  
  afficherProduits() {
    const liste = [];
    for (const [code, info] of Object.entries(this.produits)) {
      liste.push(`${code}: ${info.nom} - ${info.prix.toFixed(2)}€`);
    }
    return liste;
  }
  
  insererArgent(montant) {
    if (this.monnaies.includes(montant)) {
      this.montantInsere += montant;
      return `Montant inséré: ${montant}€. Total: ${this.montantInsere.toFixed(2)}€`;
    } else {
      return `Monnaie non acceptée. Veuillez insérer: ${this.monnaies.join('€, ')}€`;
    }
  }
  
  selectionnerProduit(code) {
    if (!this.produits[code]) {
      return "Code produit invalide.";
    }
    
    const produit = this.produits[code];
    
    if (this.montantInsere < produit.prix) {
      return `Montant insuffisant. Il manque ${(produit.prix - this.montantInsere).toFixed(2)}€`;
    }
    
    // Calcul de la monnaie à rendre
    let monnaieARendre = this.montantInsere - produit.prix;
    const detailMonnaie = [];
    
    // On commence par les plus grandes valeurs
    for (let i = this.monnaies.length - 1; i >= 0; i--) {
      const valeur = this.monnaies[i];
      while (monnaieARendre >= valeur) {
        detailMonnaie.push(valeur);
        monnaieARendre = parseFloat((monnaieARendre - valeur).toFixed(2)); // Eviter les erreurs d'arrondi
      }
    }
    
    const rendu = this.montantInsere - produit.prix;
    this.montantInsere = 0;
    
    return {
      message: `Voici votre ${produit.nom}. Merci de votre achat!`,
      monnaieRendue: rendu.toFixed(2),
      detailMonnaie: detailMonnaie
    };
  }
  
  annulerOperation() {
    const montantRendu = this.montantInsere;
    this.montantInsere = 0;
    return `Opération annulée. ${montantRendu.toFixed(2)}€ vous ont été rendus.`;
  }
}

// Exemple d'utilisation:
const distributeur = new DistributeurAutomatique();
console.log(distributeur.afficherProduits());
console.log(distributeur.insererArgent(2));
console.log(distributeur.insererArgent(1));
console.log(distributeur.selectionnerProduit("A2")); // Achat d'un soda à 1.80€
console.log(distributeur.insererArgent(5));
console.log(distributeur.annulerOperation()); // Annulation et remboursement
