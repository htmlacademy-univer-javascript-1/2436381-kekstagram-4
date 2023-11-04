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

//ДЗ 5.16 ФУНКЦИЯ "ДЕЛУ - ВРЕМЯ"
function isMeetingWithinWorkingHours(startTime, endTime, meetingStartTime, meetingDuration) {

  const workingHoursStart = startTime.split(':');
  const workingHoursEnd = endTime.split(':');
  const meetingStart = meetingStartTime.split(':');

  const workingHoursStartHours = parseInt(workingHoursStart[0]);
  const workingHoursStartMinutes = parseInt(workingHoursStart[1]);
  const workingHoursEndHours = parseInt(workingHoursEnd[0]);
  const workingHoursEndMinutes = parseInt(workingHoursEnd[1]);
  const meetingStartHours = parseInt(meetingStart[0]);
  const meetingStartMinutes = parseInt(meetingStart[1]);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  if (meetingStartHours < workingHoursStartHours || meetingEndMinutes > (workingHoursEndHours * 60 + workingHoursEndMinutes)) {
    return false;
  }

  return true;
}

console.log(isMeetingWithinWorkingHours('8:00', '17:00', '10:30', 90)); // true
console.log(isMeetingWithinWorkingHours('9:00', '15:30', '16:00', 60)); // false
