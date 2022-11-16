const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const spanishAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const valencianAlphabet = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// DECODER

const caesarCipher = (function() {

  const decoder = (encodedStr, positions) => {
    encodedStr = encodedStr.toLowerCase();
    let decoded = [];
    for (let char of encodedStr) {
      if (char === " ") {
        decoded.push(" ");
      } else {
        let charIndex = alphabet.indexOf(char);
        decoded.push(alphabet[charIndex + positions]);
      }
    }
   console.log(decoded.join(""));
   decoded.splice(0);
  }

  const printAll = (encodedStr) => {
    const englishLength = 25;
    const spanishLength = 26;

    for (let i = 0; i <= 25; i++) {
      console.log(`${i} positions: `);
      decoder(encodedStr, i);
    }
  }

  return {
    decoder,
    printAll
  };
})();


// PRINT RESULT TO DOM

// TAKE PARAMETERS FROM DOM
    // ALPHABET, ENCODED STRING, POSITION

// CALL DECODER