/*
 * SOLUTIONS - EXERCICES ALGORITHMIQUES SUR LES TABLEAUX ET LES STRINGS
 * Du niveau débutant au niveau avancé
 */

// ===================== NIVEAU DÉBUTANT =====================

// 1. Somme d'un tableau
function sommeTableau(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

// Alternative avec reduce
function sommeTableauReduce(tableau) {
  return tableau.reduce((acc, valeur) => acc + valeur, 0);
}

// Test
console.log("Somme du tableau [1, 2, 3, 4, 5]:", sommeTableau([1, 2, 3, 4, 5])); // 15

// 2. Recherche d'élément
function rechercheElement(tableau, element) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === element) {
      return i;
    }
  }
  return -1;
}

// Test
console.log("Position de 3 dans [1, 2, 3, 4, 5]:", rechercheElement([1, 2, 3, 4, 5], 3)); // 2
console.log("Position de 6 dans [1, 2, 3, 4, 5]:", rechercheElement([1, 2, 3, 4, 5], 6)); // -1

// 3. Inverser un tableau
function inverserTableau(tableau) {
  const resultat = [];
  for (let i = tableau.length - 1; i >= 0; i--) {
    resultat.push(tableau[i]);
  }
  return resultat;
}

// Alternative en place
function inverserTableauEnPlace(tableau) {
  let debut = 0;
  let fin = tableau.length - 1;
  
  while (debut < fin) {
    // Échanger les éléments
    const temp = tableau[debut];
    tableau[debut] = tableau[fin];
    tableau[fin] = temp;
    
    debut++;
    fin--;
  }
  
  return tableau;
}

// Test
console.log("Tableau [1, 2, 3, 4, 5] inversé:", inverserTableau([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 4. Compter les occurrences
function compterOccurrences(tableau, element) {
  let compteur = 0;
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === element) {
      compteur++;
    }
  }
  return compteur;
}

// Test
console.log("Nombre de 2 dans [1, 2, 2, 3, 2, 4, 5]:", compterOccurrences([1, 2, 2, 3, 2, 4, 5], 2)); // 3

// 5. Tableau de caractères
function chaineEnTableau(chaine) {
  const tableau = [];
  for (let i = 0; i < chaine.length; i++) {
    tableau.push(chaine[i]);
  }
  return tableau;
}

// Alternative avec spread
function chaineEnTableauSpread(chaine) {
  return [...chaine];
}

// Test
console.log("'Bonjour' en tableau:", chaineEnTableau("Bonjour")); // ['B', 'o', 'n', 'j', 'o', 'u', 'r']

// ===================== NIVEAU INTERMÉDIAIRE =====================

// 6. Fusion de tableaux triés
function fusionTableauxTries(tableau1, tableau2) {
  const resultat = [];
  let i = 0;
  let j = 0;
  
  while (i < tableau1.length && j < tableau2.length) {
    if (tableau1[i] <= tableau2[j]) {
      resultat.push(tableau1[i]);
      i++;
    } else {
      resultat.push(tableau2[j]);
      j++;
    }
  }
  
  // Ajouter les éléments restants
  while (i < tableau1.length) {
    resultat.push(tableau1[i]);
    i++;
  }
  
  while (j < tableau2.length) {
    resultat.push(tableau2[j]);
    j++;
  }
  
  return resultat;
}

// Test
console.log("Fusion de [1, 3, 5] et [2, 4, 6]:", fusionTableauxTries([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// 7. Filtrer un tableau
function filtrerTableau(tableau, condition) {
  const resultat = [];
  for (let i = 0; i < tableau.length; i++) {
    if (condition(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }
  return resultat;
}

// Alternative avec filter
function filtrerTableauFilter(tableau, condition) {
  return tableau.filter(condition);
}

// Test
console.log("Nombres pairs dans [1, 2, 3, 4, 5]:", 
  filtrerTableau([1, 2, 3, 4, 5], (n) => n % 2 === 0)); // [2, 4]

// 8. Recherche de sous-chaîne
function rechercherSousChaine(chaine, sousChaine) {
  if (sousChaine === "") return 0;
  
  for (let i = 0; i <= chaine.length - sousChaine.length; i++) {
    let trouve = true;
    
    for (let j = 0; j < sousChaine.length; j++) {
      if (chaine[i + j] !== sousChaine[j]) {
        trouve = false;
        break;
      }
    }
    
    if (trouve) {
      return i;
    }
  }
  
  return -1;
}

// Test
console.log("Position de 'monde' dans 'Bonjour monde':", rechercherSousChaine("Bonjour monde", "monde")); // 8
console.log("Position de 'xyz' dans 'Bonjour monde':", rechercherSousChaine("Bonjour monde", "xyz")); // -1

// 9. Palindrome
function estPalindrome(chaine) {
  chaine = chaine.toLowerCase().replace(/[^a-z0-9]/g, '');
  let debut = 0;
  let fin = chaine.length - 1;
  
  while (debut < fin) {
    if (chaine[debut] !== chaine[fin]) {
      return false;
    }
    debut++;
    fin--;
  }
  
  return true;
}

// Test
console.log("'radar' est un palindrome:", estPalindrome("radar")); // true
console.log("'Bonjour' est un palindrome:", estPalindrome("Bonjour")); // false
console.log("'A man, a plan, a canal: Panama' est un palindrome:", estPalindrome("A man, a plan, a canal: Panama")); // true

// 10. Anagrammes
function sontAnagrammes(chaine1, chaine2) {
  // Normalisation des chaînes
  chaine1 = chaine1.toLowerCase().replace(/\s/g, '');
  chaine2 = chaine2.toLowerCase().replace(/\s/g, '');
  
  // Vérification rapide de la longueur
  if (chaine1.length !== chaine2.length) {
    return false;
  }
  
  // Méthode de comptage des caractères
  const compteur = {};
  
  for (let i = 0; i < chaine1.length; i++) {
    const char = chaine1[i];
    compteur[char] = (compteur[char] || 0) + 1;
  }
  
  for (let i = 0; i < chaine2.length; i++) {
    const char = chaine2[i];
    if (!compteur[char]) {
      return false;
    }
    compteur[char]--;
  }
  
  return true;
}

// Test
console.log("'listen' et 'silent' sont anagrammes:", sontAnagrammes("listen", "silent")); // true
console.log("'triangle' et 'integral' sont anagrammes:", sontAnagrammes("triangle", "integral")); // true
console.log("'hello' et 'world' sont anagrammes:", sontAnagrammes("hello", "world")); // false

// ===================== NIVEAU AVANCÉ =====================

// 11. Tri de tableau (tri fusion)
function triFusion(tableau) {
  if (tableau.length <= 1) {
    return tableau;
  }
  
  const milieu = Math.floor(tableau.length / 2);
  const gauche = tableau.slice(0, milieu);
  const droite = tableau.slice(milieu);
  
  return fusionTableauxTries(triFusion(gauche), triFusion(droite));
}

// Test
console.log("Tri fusion de [5, 3, 8, 1, 2, 7]:", triFusion([5, 3, 8, 1, 2, 7])); // [1, 2, 3, 5, 7, 8]

// 12. Plus longue sous-séquence croissante
function plusLongueSousSequenceCroissante(tableau) {
  if (tableau.length === 0) return 0;
  
  // longueurs[i] contient la longueur de la plus longue sous-séquence se terminant à l'indice i
  const longueurs = Array(tableau.length).fill(1);
  
  for (let i = 1; i < tableau.length; i++) {
    for (let j = 0; j < i; j++) {
      if (tableau[i] > tableau[j]) {
        longueurs[i] = Math.max(longueurs[i], longueurs[j] + 1);
      }
    }
  }
  
  return Math.max(...longueurs);
}

// Version qui retourne la séquence elle-même
function plusLongueSousSequenceCroissanteSequence(tableau) {
  if (tableau.length === 0) return [];
  
  const n = tableau.length;
  const longueurs = Array(n).fill(1);
  const predecesseurs = Array(n).fill(-1);
  let maxIndex = 0;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (tableau[i] > tableau[j] && longueurs[i] < longueurs[j] + 1) {
        longueurs[i] = longueurs[j] + 1;
        predecesseurs[i] = j;
      }
    }
    
    if (longueurs[i] > longueurs[maxIndex]) {
      maxIndex = i;
    }
  }
  
  // Reconstruire la séquence
  const sequence = [];
  for (let i = maxIndex; i !== -1; i = predecesseurs[i]) {
    sequence.unshift(tableau[i]);
  }
  
  return sequence;
}

// Test
console.log("Longueur PLSC de [10, 22, 9, 33, 21, 50, 41, 60]:", 
  plusLongueSousSequenceCroissante([10, 22, 9, 33, 21, 50, 41, 60])); // 5
console.log("PLSC de [10, 22, 9, 33, 21, 50, 41, 60]:", 
  plusLongueSousSequenceCroissanteSequence([10, 22, 9, 33, 21, 50, 41, 60])); // [10, 22, 33, 50, 60]

// 13. Compression de chaîne
function compresserChaine(chaine) {
  if (!chaine) return "";
  
  let resultat = "";
  let compteur = 1;
  let caractereActuel = chaine[0];
  
  for (let i = 1; i <= chaine.length; i++) {
    if (i === chaine.length || chaine[i] !== caractereActuel) {
      resultat += compteur + caractereActuel;
      if (i < chaine.length) {
        compteur = 1;
        caractereActuel = chaine[i];
      }
    } else {
      compteur++;
    }
  }
  
  return resultat;
}

// Test
console.log("Compression de 'aaabbc':", compresserChaine("aaabbc")); // 3a2b1c
console.log("Compression de 'abcde':", compresserChaine("abcde")); // 1a1b1c1d1e

// 14. Distance de Levenshtein
function distanceLevenshtein(chaine1, chaine2) {
  const m = chaine1.length;
  const n = chaine2.length;
  
  // Créer une matrice (m+1) x (n+1)
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Initialiser la première colonne et la première ligne
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  
  // Remplir la matrice
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cout = chaine1[i - 1] === chaine2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // suppression
        dp[i][j - 1] + 1, // insertion
        dp[i - 1][j - 1] + cout // substitution
      );
    }
  }
  
  return dp[m][n];
}

// Test
console.log("Distance de Levenshtein entre 'kitten' et 'sitting':", distanceLevenshtein("kitten", "sitting")); // 3
console.log("Distance de Levenshtein entre 'samedi' et 'dimanche':", distanceLevenshtein("samedi", "dimanche")); // 5

// 15. Recherche de motif KMP (Knuth-Morris-Pratt)
function calculerTablePrefixe(motif) {
  const m = motif.length;
  const table = Array(m).fill(0);
  
  let longueur = 0;
  let i = 1;
  
  while (i < m) {
    if (motif[i] === motif[longueur]) {
      longueur++;
      table[i] = longueur;
      i++;
    } else {
      if (longueur !== 0) {
        longueur = table[longueur - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }
  
  return table;
}

function rechercheKMP(texte, motif) {
  if (motif === "") return 0;
  
  const n = texte.length;
  const m = motif.length;
  const resultats = [];
  
  // Calculer la table de préfixe
  const table = calculerTablePrefixe(motif);
  
  let i = 0; // Index pour le texte
  let j = 0; // Index pour le motif
  
  while (i < n) {
    if (motif[j] === texte[i]) {
      i++;
      j++;
    }
    
    if (j === m) {
      // Motif trouvé à l'index i-j
      resultats.push(i - j);
      j = table[j - 1];
    } else if (i < n && motif[j] !== texte[i]) {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return resultats;
}

// Test
console.log("KMP: Positions de 'ABABCABAB' dans 'ABABDABACDABABCABAB':", 
  rechercheKMP("ABABDABACDABABCABAB", "ABABCABAB")); // [10]
console.log("KMP: Positions de 'AAAA' dans 'AAAAAAAAA':", 
  rechercheKMP("AAAAAAAAA", "AAAA")); // [0, 1, 2, 3, 4, 5]
