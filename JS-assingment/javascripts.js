function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(character) {
    if(character.length != 1)
        return "Given invalid character input";

    return ("aeiouAEIOU".indexOf(character) != -1);
}

function sum(numArray) {
    return numArray.reduce((num1, num2) => num1 + num2, 0);
}

function multiplies(numArray) {
    if(numArray.length == 0)
        return 0;

    return numArray.reduce((num1, num2) => num1 * num2);
}

function reverse(str) {
    if (str === "")
        return "";
    return reverse(str.substr(1)) + str.charAt(0);
}

function findLongestWord(wordArray) {
    let longest = wordArray[0];
    for (ele of wordArray) {
      if (longest.length < ele.length) {
        longest = ele;
      }
    }
    return longest;
}

function  filterLongWords(workArray, length)  {
    return workArray.filter((word) => word.length > length).toString();
}