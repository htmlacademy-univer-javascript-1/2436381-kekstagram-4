//ФУНКЦИЯ №1 ПРОВЕРКА ДЛИНЫ СТРОКИ
const checkStringLength = function(string, length){
  return string.length <= length;
}
checkStringLength('Ярик внатуре машина', 20);

//ФУНКЦИЯ №2 ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ
const isPalindrome = function(string){
  let reversedString = '';
  const cleanString = string.replaceAll(' ', '').toLowerCase();
  for (let i = cleanString.length - 1; i >= 0; i--){
    reversedString += cleanString[i];
  }
  if (reversedString === cleanString){
    return true;
  }
  return false;
}
isPalindrome('Шалаш');
isPalindrome('Лёша на полке клопа нашёл');

//ФУНКЦИЯ №3 ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ
const returnNumber = function(string){
  let numbers = '';
  for (let i = 0; i <= string.length; i++){
    if (Number(string[i]) || string[i] === '0'){
      numbers += string[i];
    }
    if (numbers === ''){
      return NaN;
    }
    return Number(numbers);
  }
}
returnNumber('ХТМЛ Академия 2022');
