object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        val s = "Hello World!";
        return s;
    }

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    def capitalizeEveryNthWord(sentence:String, offset:Integer, n:Integer) {
        val words : Array[String] = sentence.split(" ");
        
    }
    
    // Determine if a number is prime
    def isPrime(n:Integer) : Boolean = {
        throw new Exception("Not Implemented");
    }
    
    // Calculate the golden ratio.
    // Given two numbers, a and b, the ratio is a / b. 
    // Let c = a + b, then the ratio b / c is closer to the golden ratio.
    // Let d = b + c, then the ratio c / d is closer to the golden ratio. 
    // Let e = c + d, then the ratio d / e is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    def goldenRatio(a:Double, b:Double) : Double = {
        throw new Exception("Not Implemented");
    }

    // Give the nth Fibionacci number
    // Starting with 1 and 1, a Fibionacci number is the sum of the previous two.
    def fibionacci(n:Integer) : Integer = {
        throw new Exception("Not Implemented");
    }
    
    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    def squareRoot(n:Double) : Double = {
        throw new Exception("Not Implemented");
    }
}