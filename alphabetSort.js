function sortFunc(string) {
    // Split each character in an array
    return string.split('')
  
      // Sort the array in alphabetical order
      .sort(
        (a, b) =>
          // Local Compare will take care of the capital letters in the sort
          a.localeCompare(b)
  
      )
      // Will join the array back in into string form
      .join('')
      // gets rid of special characters in a string
      .replace(/[^A-Za-z0-9]/g, '')
      // gets rid of numbers in a string
      .replace(/[0-9]/g, '')
      // gets rid of whitespace in a string
      .trim();
  }
  
  console.log(sortFunc('VirginiaTech'));
  
  console.log(sortFunc('3 Blind Mice'));
  
  console.log(sortFunc("hey they're partner"));
  
