//FONCTIONS DE MANIPULATION DE CHAÎNES :

//Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.
// Demande à l'utilisateur d'entrer une chaîne de caractères
let inputString = prompt("Saisissez une série de caractères à inverser :");

// Fonction qui inverse la chaîne de caractères
function inverseString(str) {
    // La méthode split() sépare la chaîne en un tableau de caractères,
    // reverse() inverse l'ordre des caractères dans le tableau,
    // et join() recrée la chaîne à partir des caractères inversés.
    return str.split('').reverse().join('');
}

// Affiche la chaîne inversée dans la console
console.log(inverseString(inputString));


//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.
// Demande à l'utilisateur d'entrer une chaîne de texte
let inputStrings = prompt("Veuillez entrer une chaîne de texte afin de connaître le total de caractères qu'elle comprend :");

// Fonction pour compter le nombre de caractères dans la chaîne
function compterCharacters(strs) {
    // La propriété length retourne le nombre de caractères de la chaîne
    return strs.length;
}

// Affiche le total de caractères de la chaîne entrée dans la console
console.log(compterCharacters(inputStrings));


//Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
// Demande à l'utilisateur de saisir une phrase en lettres minuscules
let sentence = prompt("Saisissez une phrase en lettres minuscules pour obtenir la première lettre de chaque mot en majuscules :");

// Fonction pour mettre en majuscule la première lettre de chaque mot de la phrase
function capitalizeWords(sentence) {
    return sentence.split(' ') // Sépare la phrase en mots
        .map(word => word.charAt(0).toUpperCase() + word.slice(1) // Met en majuscule la première lettre de chaque mot
        )
        .join(' '); // Rejoint les mots pour reformer la phrase
}

// Affiche la phrase avec la première lettre de chaque mot en majuscules
console.log(capitalizeWords(sentence));


//FONCTIONS DE TABLEAU :

//Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
//Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.
//Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.

//FONCTIONS MATHÉMATIQUES :