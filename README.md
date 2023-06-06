# PALI E DISPARI

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## STEPS

<HR>

### **Palindrome**

1. Read user input;
1. Check if palindrome;
    - Iterate through the given word;
    - At every step push the current char into a new string;
    - Compare the new string to the user string;
    - **IF** they are equal:
        - Word is _palindrome_;
    - **ELSE**
        - Word is _not_ palidnrome;
1. Output the result;

<br>

### **Even or odd**

1. Read user number;
1. Read user choice (even or odd);
1. Generate a random number;
1. Add the numbers togheter;
1. Check if sum is even or odd;
1. **IF** result is same as user choiche:
    - user wins;
- **ELSE**:
    - user loses;
- Print output;