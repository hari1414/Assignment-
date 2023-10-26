function reverseWordsInSentence(sentence) {
    // Initialize variables to keep track of words and the reversed sentence
    let word = '';
    let reversedSentence = '';
    let isWhitespace = true;

    // Iterate through the characters in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Check if the current character is a whitespace
        if (char === ' ' || char === '\t' || char === '\n' || char === '\r' || char === '\f' || char === '\v') {
            isWhitespace = true;
            reversedSentence += char;
        } else {
            // If the current character is not a whitespace, add it to the current word
            if (isWhitespace) {
                // If it's the start of a new word, reverse the previous word and add it to the reversed sentence
                reversedSentence += reverseWord(word);
                word = '';
            }
            isWhitespace = false;
            word += char;
        }
    }

    // Reverse and append the last word
    reversedSentence += reverseWord(word);

    return reversedSentence;
}

function reverseWord(word) {
    // Reverse the characters in the word manually
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
