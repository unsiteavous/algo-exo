# Exercices algorithmiques sur les tableaux et les strings

## Niveau Débutant

1. **Somme d'un tableau** : Écrivez un algorithme qui calcule la somme de tous les éléments d'un tableau de nombres.
   - Exemple : Pour le tableau `[1, 2, 3, 4, 5]`, votre fonction doit retourner `15`.
   - Testez également avec : `[10, -5, 8, 2]` → `15`

2. **Recherche d'élément** : Créez une fonction qui vérifie si un élément spécifique existe dans un tableau et renvoie sa position (ou -1 s'il n'existe pas).
   - Exemple : Pour le tableau `[5, 8, 2, 7, 3]` et l'élément `7`, votre fonction doit retourner `3`.
   - Pour le tableau `[5, 8, 2, 7, 3]` et l'élément `10`, votre fonction doit retourner `-1`.

3. **Inverser un tableau** : Écrivez un algorithme qui inverse l'ordre des éléments d'un tableau sans utiliser de fonction prédéfinie.
   - Exemple : Pour le tableau `[1, 2, 3, 4, 5]`, votre fonction doit retourner `[5, 4, 3, 2, 1]`.
   - Testez également avec : `["a", "b", "c", "d"]` → `["d", "c", "b", "a"]`

4. **Compter les occurrences** : Créez une fonction qui compte combien de fois un élément donné apparaît dans un tableau.
   - Exemple : Pour le tableau `[1, 2, 2, 3, 2, 4, 5]` et l'élément `2`, votre fonction doit retourner `3`.
   - Testez également avec : `["a", "b", "a", "c", "a", "d"]` et l'élément `"a"` → `3`

5. **Tableau de caractères** : Transformez une chaîne de caractères en tableau où chaque élément est un caractère de la chaîne.
   - Exemple : Pour la chaîne `"Bonjour"`, votre fonction doit retourner `["B", "o", "n", "j", "o", "u", "r"]`.
   - Testez également avec : `"JavaScript"` → `["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]`

## Niveau Intermédiaire

6. **Fusion de tableaux triés** : Écrivez un algorithme qui fusionne deux tableaux déjà triés en un seul tableau trié.
   - Exemple : Pour les tableaux `[1, 3, 5]` et `[2, 4, 6]`, votre fonction doit retourner `[1, 2, 3, 4, 5, 6]`.
   - Testez également avec : `[10, 20, 30]` et `[15, 25, 35]` → `[10, 15, 20, 25, 30, 35]`

7. **Filtrer un tableau** : Créez une fonction qui retourne un nouveau tableau contenant uniquement les éléments qui répondent à un critère donné.
   - Exemple : Pour le tableau `[1, 2, 3, 4, 5]` et le critère "nombre pair", votre fonction doit retourner `[2, 4]`.
   - Pour le tableau `[10, 23, 15, 8, 4, 42, 7]` et le critère "nombre supérieur à 10", votre fonction doit retourner `[23, 15, 42]`.

8. **Recherche de sous-chaîne** : Écrivez un algorithme qui vérifie si une chaîne de caractères contient une sous-chaîne spécifique sans utiliser de méthodes prédéfinies.
   - Exemple : Pour la chaîne `"Bonjour monde"` et la sous-chaîne `"monde"`, votre fonction doit retourner `8` (position).
   - Pour la chaîne `"Bonjour monde"` et la sous-chaîne `"xyz"`, votre fonction doit retourner `-1`.

9. **Palindrome** : Vérifiez si une chaîne de caractères est un palindrome (se lit de la même façon dans les deux sens).
   - Exemple : Pour la chaîne `"radar"`, votre fonction doit retourner `true`.
   - Pour la chaîne `"Bonjour"`, votre fonction doit retourner `false`.
   - Pour la chaîne `"A man, a plan, a canal: Panama"` (en ignorant la casse et les caractères non alphanumériques), votre fonction doit retourner `true`.

10. **Anagrammes** : Déterminez si deux chaînes de caractères sont des anagrammes l'une de l'autre.
    - Exemple : Pour les chaînes `"listen"` et `"silent"`, votre fonction doit retourner `true`.
    - Pour les chaînes `"triangle"` et `"integral"`, votre fonction doit retourner `true`.
    - Pour les chaînes `"hello"` et `"world"`, votre fonction doit retourner `false`.

## Niveau Avancé

11. **Tri de tableau** : Implémentez un algorithme de tri (tri par insertion, tri à bulles, tri fusion, etc.) pour trier un tableau de nombres.
    - Exemple : Pour le tableau `[5, 3, 8, 1, 2, 7]`, votre fonction doit retourner `[1, 2, 3, 5, 7, 8]`.
    - Testez également avec : `[42, 13, 7, 25, 3, 50, 19]` → `[3, 7, 13, 19, 25, 42, 50]`

12. **Plus longue sous-séquence croissante** : Trouvez la plus longue sous-séquence croissante dans un tableau d'entiers.
    - Exemple : Pour le tableau `[10, 22, 9, 33, 21, 50, 41, 60]`, votre fonction doit retourner `5` (longueur) ou `[10, 22, 33, 50, 60]` (séquence).
    - Testez également avec : `[3, 4, 5, 1, 2, 3, 4]` → `5` (longueur) ou `[1, 2, 3, 4]` (séquence)

13. **Compression de chaîne** : Implémentez un algorithme simple de compression de chaîne.
    - Exemple : Pour la chaîne `"aaabbc"`, votre fonction doit retourner `"3a2b1c"`.
    - Pour la chaîne `"abcde"`, votre fonction doit retourner `"1a1b1c1d1e"`.
    - Pour la chaîne `"aabcccccaaa"`, votre fonction doit retourner `"2a1b5c3a"`.

14. **Distance de Levenshtein** : Calculez la distance d'édition entre deux chaînes (nombre minimum d'opérations nécessaires pour transformer une chaîne en une autre).
    - Exemple : Pour les chaînes `"kitten"` et `"sitting"`, votre fonction doit retourner `3`.
    - Pour les chaînes `"samedi"` et `"dimanche"`, votre fonction doit retourner `5`.
    - Pour les chaînes `"algorithm"` et `"logarithm"`, votre fonction doit retourner `4`.

15. **Recherche de motif KMP** : Implémentez l'algorithme de Knuth-Morris-Pratt pour rechercher efficacement un motif dans une chaîne.
    - Exemple : Pour la chaîne `"ABABDABACDABABCABAB"` et le motif `"ABABCABAB"`, votre fonction doit retourner `[10]` (position).
    - Pour la chaîne `"AAAAAAAAA"` et le motif `"AAAA"`, votre fonction doit retourner `[0, 1, 2, 3, 4, 5]` (toutes les positions).
    - Pour la chaîne `"La programmation est amusante"` et le motif `"amusante"`, votre fonction doit retourner `[20]`.


## Ressources :  
[1] https://fr.javascript.info/   
[2] https://s632cc8ac71cbd193.jimcontent.com/download/version/1602840178/module/10654377571/name/Cours%20de%20Javascript%20-%20Exercices%20et%20corrections.pdf  
[3] https://fabien-torre.fr/Enseignement/tp/JavaScript/  
[4] https://javascript.developpez.com/exercices/  
[5] https://odyssey.sdlm.be  