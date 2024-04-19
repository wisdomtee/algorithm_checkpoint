function sentenceAnalysis(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = "aeiouAEIOU";

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment sentence length counter
        sentenceLength++;

        // Check if the character is a letter
        if (sentence[i].match(/[a-zA-Z]/)) {
            // Increment word count if the previous character was a space or it's the first character
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }

            // Check if the character is a vowel
            if (vowels.includes(sentence[i])) {
                vowelCount++;
            }
        }
    }

    // Output the results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage
const sentence = "This is a sample sentence.";
sentenceAnalysis(sentence);
