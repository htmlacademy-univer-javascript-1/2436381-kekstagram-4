//ФУНКЦИЯ №1 ПРОВЕРКА ДЛИНЫ СТРОКИ
const checkStringLength = function(string, length){
  return string.length <= length;
};
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
};
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
};
returnNumber('ХТМЛ Академия 2022');

function EditTime(time) {
  let [hour, minute] = time.split(':');
  hour = hour.padStart(2, '0');
  minute = minute.padStart(2, '0');
  return `${hour}:${minute}`;
}

function CheckWorkingHours(startTime, endTime, meetingStartTime, duration) {
  const meetingEndHour = Math.floor(duration / 60);
  const meetingEndMinute = duration % 60;

  startTime = EditTime(startTime);
  endTime = EditTime(endTime);
  meetingStartTime = EditTime(meetingStartTime);

  let [startHour, startMinute] = startTime.split(':');
  let [endHour, endMinute] = endTime.split(':');
  let [meetingStartHour, meetingStartMinute] = meetingStartTime.split(':');

  startHour = parseInt(startHour,10);
  startMinute = parseInt(startMinute,10);
  endHour = parseInt(endHour,10);
  endMinute = parseInt(endMinute,10);
  meetingStartHour = parseInt(meetingStartHour,10);
  meetingStartMinute = parseInt(meetingStartMinute,10);

  const durationMinute = meetingStartMinute + meetingEndMinute;
  const durationHour = meetingStartHour + meetingEndHour;

  if (meetingStartHour < startHour || (meetingStartHour === startHour && meetingStartMinute < startMinute)) {
    return false;
  }
  else if (meetingStartHour > endHour || (meetingStartHour === endHour &&  durationMinute > endMinute)) {
    return false;
  }
  else if (meetingStartHour + meetingEndHour > endHour || ( durationHour === endHour && durationMinute > endMinute)) {
    return false;
  }
  return true;
}

CheckWorkingHours('08:00', '17:30', '14:00', 90); // true
CheckWorkingHours('8:0', '10:0', '8:0', 120);     // true
CheckWorkingHours('08:00', '14:30', '14:00', 90); // false
CheckWorkingHours('14:00', '17:30', '08:0', 90);  // false
CheckWorkingHours('8:00', '17:30', '08:00', 900); // false
