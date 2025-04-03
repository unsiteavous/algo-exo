# Exercices algorithmiques sur les tableaux et les strings

## Niveau Débutant

1. **Maximum et minimum d'un tableau** : Écrivez une fonction qui trouve la valeur maximale et minimale dans un tableau de nombres.
   - Exemple : Pour le tableau `[4, 2, 9, 5, 1, 7]`, votre fonction doit retourner `{max: 9, min: 1}`.
   - Testez également avec : `[-3, -10, -5, -8]` → `{max: -3, min: -10}`

2. **Moyenne d'un tableau** : Écrivez une fonction qui calcule la moyenne de tous les nombres dans un tableau.
   - Exemple : Pour le tableau `[2, 4, 6, 8, 10]`, votre fonction doit retourner `6`.
   - Testez également avec : `[1, 3, 5, 7, 9]` → `5`

3. **Nombres pairs et impairs** : Écrivez une fonction qui sépare les nombres pairs et impairs d'un tableau en deux tableaux distincts.
   - Exemple : Pour le tableau `[1, 2, 3, 4, 5, 6]`, votre fonction doit retourner `{pairs: [2, 4, 6], impairs: [1, 3, 5]}`.
   - Testez également avec : `[11, 22, 33, 44, 55]` → `{pairs: [22, 44], impairs: [11, 33, 55]}`

4. **Compter les mots** : Écrivez une fonction qui compte le nombre de mots dans une chaîne de caractères.
   - Exemple : Pour la chaîne `"Bonjour tout le monde"`, votre fonction doit retourner `4`.
   - Testez également avec : `"La vie est belle !"` → `4`

5. **Majuscules et minuscules** : Écrivez une fonction qui transforme une chaîne de caractères pour que chaque mot commence par une majuscule.
   - Exemple : Pour la chaîne `"bonjour tout le monde"`, votre fonction doit retourner `"Bonjour Tout Le Monde"`.
   - Testez également avec : `"javascript est un langage de programmation"` → `"Javascript Est Un Langage De Programmation"`

## Niveau Intermédiaire

6. **Union et intersection** : Écrivez deux fonctions qui trouvent l'union et l'intersection de deux tableaux.
   - Exemple : Pour les tableaux `[1, 2, 3, 4]` et `[3, 4, 5, 6]` :
     - Union : `[1, 2, 3, 4, 5, 6]` (tous les éléments sans doublons)
     - Intersection : `[3, 4]` (éléments présents dans les deux tableaux)
   - Testez également avec : `["a", "b", "c"]` et `["b", "c", "d"]` → Union : `["a", "b", "c", "d"]`, Intersection : `["b", "c"]`

7. **Rotation de tableau** : Écrivez une fonction qui effectue une rotation de k positions vers la droite sur un tableau.
   - Exemple : Pour le tableau `[1, 2, 3, 4, 5]` et k = 2, votre fonction doit retourner `[4, 5, 1, 2, 3]`.
   - Testez également avec : `["a", "b", "c", "d"]` et k = 1 → `["d", "a", "b", "c"]`

8. **Fréquence des caractères** : Écrivez une fonction qui calcule la fréquence de chaque caractère dans une chaîne.
   - Exemple : Pour la chaîne `"bonjour"`, votre fonction doit retourner `{b: 1, o: 2, n: 1, j: 1, u: 1, r: 1}`.
   - Testez également avec : `"banana"` → `{b: 1, a: 3, n: 2}`

9. **Suppression des doublons** : Écrivez une fonction qui supprime tous les éléments dupliqués d'un tableau.
   - Exemple : Pour le tableau `[1, 2, 2, 3, 4, 4, 5]`, votre fonction doit retourner `[1, 2, 3, 4, 5]`.
   - Testez également avec : `["a", "b", "a", "c", "b"]` → `["a", "b", "c"]`

10. **Camel Case** : Écrivez une fonction qui convertit une phrase en camelCase (premier mot en minuscules, les autres commençant par une majuscule, sans espaces).
    - Exemple : Pour la chaîne `"hello world javascript"`, votre fonction doit retourner `"helloWorldJavascript"`.
    - Testez également avec : `"convert to camel case"` → `"convertToCamelCase"`

## Niveau Avancé

11. **Sous-tableau de somme maximale** : Trouvez le sous-tableau contigu ayant la plus grande somme.
    - Exemple : Pour le tableau `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, votre fonction doit retourner `6` (somme du sous-tableau `[4, -1, 2, 1]`).
    - Testez également avec : `[1, -3, 2, 1, -1, 4, -2, 3]` → `7` (somme du sous-tableau `[1, -1, 4, -2, 3]` ou `[2, 1, -1, 4, -2, 3]`)

12. **Médiane de deux tableaux triés** : Écrivez une fonction qui trouve la médiane de deux tableaux triés de même taille.
    - Exemple : Pour les tableaux `[1, 3, 5]` et `[2, 4, 6]`, votre fonction doit retourner `3.5` (moyenne de 3 et 4).
    - Testez également avec : `[1, 2, 3, 4]` et `[5, 6, 7, 8]` → `4.5` (moyenne de 4 et 5)

13. **Expression régulière simplifiée** : Implémentez une fonction qui vérifie si une chaîne correspond à un motif où '*' correspond à zéro ou plusieurs caractères et '?' correspond à exactement un caractère.
    - Exemple : Pour la chaîne `"abcdef"` et le motif `"a*ef"`, votre fonction doit retourner `true`.
    - Pour la chaîne `"abcdef"` et le motif `"a?c"`, votre fonction doit retourner `false`.
    - Pour la chaîne `"abcdef"` et le motif `"a?c?ef"`, votre fonction doit retourner `true`.

14. **Parenthèses équilibrées** : Vérifiez si une expression contenant des parenthèses `()`, des crochets `[]` et des accolades `{}` est correctement équilibrée.
    - Exemple : Pour l'expression `"{[()]}"`, votre fonction doit retourner `true`.
    - Pour l'expression `"([)]"`, votre fonction doit retourner `false`.
    - Pour l'expression `"([]{})"`, votre fonction doit retourner `true`.

15. **Plus petit élément manquant** : Trouvez le plus petit entier positif manquant dans un tableau non trié.
    - Exemple : Pour le tableau `[3, 4, -1, 1]`, votre fonction doit retourner `2`.
    - Pour le tableau `[1, 2, 0]`, votre fonction doit retourner `3`.
    - Pour le tableau `[7, 8, 9, 11, 12]`, votre fonction doit retourner `1`.

16. **Recherche dans un tableau trié et pivoté** : Trouvez un élément dans un tableau trié qui a été pivoté à un point inconnu.
    - Exemple : Pour le tableau `[4, 5, 6, 7, 0, 1, 2]` et la cible `0`, votre fonction doit retourner `4` (indice).
    - Pour le tableau `[4, 5, 6, 7, 0, 1, 2]` et la cible `3`, votre fonction doit retourner `-1` (non trouvé).
    - Pour le tableau `[1, 3, 5, 7, 9, 0]` et la cible `9`, votre fonction doit retourner `4` (indice).

17. **Génération de toutes les permutations** : Écrivez une fonction qui génère toutes les permutations possibles d'une chaîne sans caractères répétés.
    - Exemple : Pour la chaîne `"abc"`, votre fonction doit retourner `["abc", "acb", "bac", "bca", "cab", "cba"]`.
    - Pour la chaîne `"ab"`, votre fonction doit retourner `["ab", "ba"]`.

18. **Mot le plus long sans caractères répétés** : Trouvez la longueur du plus long sous-mot dans une chaîne qui ne contient pas de caractères répétés.
    - Exemple : Pour la chaîne `"abcabcbb"`, votre fonction doit retourner `3` (`"abc"`).
    - Pour la chaîne `"bbbbb"`, votre fonction doit retourner `1` (`"b"`).
    - Pour la chaîne `"pwwkew"`, votre fonction doit retourner `3` (`"wke"`).



## Ressources :  
[1] https://fr.javascript.info/   
[2] https://s632cc8ac71cbd193.jimcontent.com/download/version/1602840178/module/10654377571/name/Cours%20de%20Javascript%20-%20Exercices%20et%20corrections.pdf  
[3] https://fabien-torre.fr/Enseignement/tp/JavaScript/  
[4] https://javascript.developpez.com/exercices/  
[5] https://odyssey.sdlm.be  