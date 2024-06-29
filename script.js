function firstWord(str) {
 
    str = str.trim();
    const spaceIndex = str.indexOf(' ');

   
    if (spaceIndex === -1) {
        return str;
    } else {

        return str.substring(0, spaceIndex);
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
