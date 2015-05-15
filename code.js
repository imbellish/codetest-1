var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        var hello = "Hello World!"
        return hello;
    },

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        
        var sentence = sentence.split(' ');

        for (var i = offset; i < sentence.length; i += n) {
            
            var splitWord;
            var capitalizedLetter;
            var capitalizedWord;

            splitWord = sentence[i].split('');
            capitalizedLetter = splitWord[0].toUpperCase();

            splitWord[0] = capitalizedLetter;
            capitalizedWord = splitWord.join('');

            sentence[i] = capitalizedWord;
        };

        return sentence.join(' ');
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        if (n < 1){
            return false
        } else if (n === 1){
            return false
        } else if (n === 2){
            return true
        } else if (n % n === 0 & n % 3 !== 0 & n % 2 !== 0){
            return true
        } else {
            return false
        };
    },
    
    // Calculate the golden ratio.
    // Given two numbers, a and b, the ratio is a / b. 
    // Let c = a + b, then the ratio b / c is closer to the golden ratio.
    // Let d = b + c, then the ratio c / d is closer to the golden ratio. 
    // Let e = c + d, then the ratio d / e is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        var ratio;
        var ratioCatch = [ ];
        var n;

        ratioCatch.push(a);
        ratioCatch.push(b);
        
        while(ratio < 0.61800 && ratio > 0.61806){
            n = ratioCatch.length;
            c = ratioCatch[n-1] + ratioCatch[n-2]
            ratio = ratioCatch[n-1] / c;
            ratioCatch.push(c);
        }
        return ratio
    },

    // Give the nth Fibionacci number
    // Starting with 1 and 1, a Fibionacci number is the sum of the previous two.
    fibionacci: function(n) {
        if (n === 0){
            return 0;
        } else if (n <= 2){
            return 1;
        } else {
            return this.fibionacci(n-1) + this.fibionacci(n-2);
        }        
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        var guess = 2;
        var divided,
            sum,
            average;
        // for floating point precision : risk infinite loop otherwise
        var plus = n + 0.001
        var minus = n - 0.001 

        while(guess * guess > plus || guess * guess < minus){
            divided = n / guess;
            sum = divided + guess;
            average = sum / 2;
            guess = parseFloat(average.toPrecision(12));

        }
        return parseFloat(guess.toPrecision(4));
    }
};
module.exports = code;
