// Write a function palindrome(string) that meets the following description.
// A palindrome is a word or phrase that reads the same way forwards and backwards. 
//Identify whether the provided string is a palindrome and return true if so or false if not. 
//You can ignore all spaces.

// Examples:
// palindrome("'abba'") returns true
// palindrome("'frog'") returns false
// palindrome("'bat tab'") returns true 


  function palindrome(string) {

    let palindrome = true;

    for (let i = 0; i < string.length; i++) {
      // if the first and last index don't match, palindrome is false 
      if (string[i] !== string[string.length - i - 1]) {
        palindrome = false;
      }
      // console.log(palindrome);
    }
  };

// palindrome('abba');
// palindrome('frog');
// palindrome('bat tab');

