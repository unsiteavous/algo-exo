# Solutions énoncés 2

## Niveau Débutant

### 1. Maximum et minimum d'un tableau
```javascript
function maxMinArray(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Exemple :
console.log(maxMinArray([4, 2, 9, 5, 1, 7])); // { max: 9, min: 1 }
console.log(maxMinArray([-3, -10, -5, -8])); // { max: -3, min: -10 }
```

### 2. Moyenne d'un tableau
```javascript
function averageArray(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

// Exemple :
console.log(averageArray([2, 4, 6, 8, 10])); // 6
console.log(averageArray([1, 3, 5, 7, 9])); // 5
```

### 3. Nombres pairs et impairs
```javascript
function separateEvenOdd(arr) {
    const pairs = arr.filter(num => num % 2 === 0);
    const impairs = arr.filter(num => num % 2 !== 0);
    return { pairs, impairs };
}

// Exemple :
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6])); // { pairs: [2, 4, 6], impairs: [1, 3, 5] }
console.log(separateEvenOdd([11, 22, 33, 44, 55])); // { pairs: [22, 44], impairs: [11, 33, 55] }
```

### 4. Compter les mots
```javascript
function countWords(str) {
    return str.split(' ').length;
}

// Exemple :
console.log(countWords("Bonjour tout le monde")); // 4
console.log(countWords("La vie est belle !")); // 4
```

### 5. Majuscules et minuscules
```javascript
function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Exemple :
console.log(capitalizeWords("bonjour tout le monde")); // "Bonjour Tout Le Monde"
console.log(capitalizeWords("javascript est un langage de programmation")); // "Javascript Est Un Langage De Programmation"
```

## Niveau intermédiaire

### 6. Union et intersection
```javascript
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// Exemple :
console.log(union([1, 2, 3, 4], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(union(["a", "b", "c"], ["b", "c", "d"])); // ["a", "b", "c", "d"]
console.log(intersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
```

### 7. Rotation de tableau
```javascript
function rotateArray(arr, k) {
    k = k % arr.length; // Pour éviter des rotations inutiles
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Exemple :
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(["a", "b", "c", "d"], 1)); // ["d", "a", "b", "c"]
```

### 8. Fréquence des caractères
```javascript
function charFrequency(str) {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

// Exemple :
console.log(charFrequency("bonjour")); // { b: 1, o: 2, n: 1, j: 1, u: 1, r: 1 }
console.log(charFrequency("banana")); // { b: 1, a: 3, n: 2 }
```

### 9. Suppression des doublons
```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Exemple :
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
```

### 10. Camel Case
```javascript
function toCamelCase(str) {
    const words = str.split(' ');
    return words.map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}

// Exemple :
console.log(toCamelCase("hello world javascript")); // "helloWorldJavascript"
console.log(toCamelCase("convert to camel case")); // "convertToCamelCase"
```


## Niveau avancé

### 11. Sous-tableau de somme maximale
Utilisation de l'algorithme de **Kadane** pour trouver le sous-tableau avec la somme maximale :
```javascript
function maxSubArraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i  a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

// Exemple :
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8])); // 4.5
```

---

### 13. Expression régulière simplifiée
Vérification d'une chaîne par rapport à un motif avec `*` et `?` :
```javascript
function isMatch(str, pattern) {
    const regex = new RegExp("^" + pattern.replace(/\*/g, ".*").replace(/\?/g, ".") + "$");
    return regex.test(str);
}

// Exemple :
console.log(isMatch("abcdef", "a*ef")); // true
console.log(isMatch("abcdef", "a?c")); // false
console.log(isMatch("abcdef", "a?c?ef")); // true
```

---

### 14. Parenthèses équilibrées
Utilisation d'une pile pour vérifier l'équilibre des parenthèses :
```javascript
function isBalanced(expression) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (const char of expression) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Exemple :
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("([]{})")); // true
```

---

### 15. Plus petit élément manquant
Trouver le plus petit entier positif manquant dans un tableau non trié :
```javascript
function smallestMissingPositive(arr) {
    const set = new Set(arr);
    let i = 1;

    while (set.has(i)) {
        i++;
    }

    return i;
}

// Exemple :
console.log(smallestMissingPositive([3, 4, -1, 1])); // 2
console.log(smallestMissingPositive([1, 2, 0])); // 3
console.log(smallestMissingPositive([7, 8, 9, 11, 12])); // 1
```

---

### 16. Recherche dans un tableau trié et pivoté
Utilisation d'une recherche binaire modifiée pour un tableau pivoté :
```javascript
function searchInRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left = arr[left] && target  arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Exemple :
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchInRotatedArray([1,3 ,5 ,7 ,9 ,0],9)); //4 
```

---

### 17 Permutations d'une chaine

```js 
function generatePermutations(str){
if(str.length===0){
return[""]
}
const result=[]
for(let i=0;i<str.length;i++){
const remaining=str.slice(0,i)+str.slice(i+1)
for(const perm of generatePermutations(remaining)){
result.push(str[i]+perm)
}
}
return result

}
//exemple 
console.log(generatePermutations("abc"))//["abc","acb","bac","bca","cab","cba"]
```


## Ressources :  
[1] https://fr.javascript.info/   
[2] https://s632cc8ac71cbd193.jimcontent.com/download/version/1602840178/module/10654377571/name/Cours%20de%20Javascript%20-%20Exercices%20et%20corrections.pdf  
[3] https://fabien-torre.fr/Enseignement/tp/JavaScript/  
[4] https://javascript.developpez.com/exercices/  
[5] https://odyssey.sdlm.be  
