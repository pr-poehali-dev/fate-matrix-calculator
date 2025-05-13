
/**
 * Библиотека для расчетов матрицы судьбы
 */

// Функция для суммирования цифр числа до однозначного числа
export const sumToSingleDigit = (num: number | string): number => {
  const strNum = String(num);
  
  // Если число уже однозначное, возвращаем его
  if (strNum.length === 1) return parseInt(strNum, 10);
  
  // Суммируем цифры
  const sum = strNum
    .split('')
    .map(digit => parseInt(digit, 10))
    .reduce((acc, val) => acc + val, 0);
  
  // Рекурсивно вызываем функцию, пока не получим однозначное число
  return sumToSingleDigit(sum);
};

// Функция для расчета числа судьбы
export const calculateDestinyNumber = (day: string, month: string, year: string): number => {
  const fullDate = day + month + year;
  return sumToSingleDigit(fullDate);
};

// Функция для расчета числа души
export const calculateSoulNumber = (day: string): number => {
  return sumToSingleDigit(day);
};

// Функция для расчета числа имени
export const calculateNameNumber = (name: string): number => {
  // Таблица соответствия букв и чисел (упрощенная)
  const letterValues: {[key: string]: number} = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9,
    'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9,
    'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9,
    'ъ': 1, 'ы': 2, 'ь': 3, 'э': 4, 'ю': 5, 'я': 6,
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };
  
  // Если имя не задано, возвращаем 0
  if (!name || name.trim() === '') return 0;
  
  // Преобразуем имя в нижний регистр и вычисляем сумму значений букв
  const sum = name
    .toLowerCase()
    .split('')
    .filter(char => letterValues[char] !== undefined)
    .reduce((acc, char) => acc + letterValues[char], 0);
  
  return sumToSingleDigit(sum);
};

// Функция для расчета внешнего числа
export const calculateExternalNumber = (month: string, year: string): number => {
  return sumToSingleDigit(month + year);
};

// Функция для получения описания числа
export const getNumberDescription = (num: number): string => {
  const descriptions: {[key: number]: string} = {
    1: "Лидерство, независимость, оригинальность, целеустремленность.",
    2: "Дипломатия, сотрудничество, интуиция, чувствительность.",
    3: "Творчество, самовыражение, оптимизм, коммуникабельность.",
    4: "Стабильность, организованность, практичность, надежность.",
    5: "Свобода, приключения, адаптивность, разносторонность.",
    6: "Забота, ответственность, гармония, служение другим.",
    7: "Аналитический ум, мудрость, интроспекция, духовность.",
    8: "Амбиции, власть, материальный успех, организаторские способности.",
    9: "Гуманизм, сострадание, завершенность, высшие идеалы."
  };
  
  return descriptions[num] || "Недоступно для этого числа.";
};

// Расчет всей матрицы судьбы
export const calculateDestinyMatrix = (day: string, month: string, year: string, name: string = '') => {
  const destinyNumber = calculateDestinyNumber(day, month, year);
  const soulNumber = calculateSoulNumber(day);
  const nameNumber = calculateNameNumber(name);
  const externalNumber = calculateExternalNumber(month, year);
  
  // Энергия дня рождения (просто для дополнительной информации)
  const birthDayEnergy = parseInt(day, 10);
  
  // Расчет личных годовых циклов
  const currentYear = new Date().getFullYear();
  const personalYear = sumToSingleDigit(birthDayEnergy + parseInt(month, 10) + currentYear);
  
  return {
    destinyNumber,
    soulNumber,
    nameNumber: nameNumber || null, // null если имя не задано
    externalNumber,
    birthDayEnergy,
    personalYear,
    descriptions: {
      destiny: getNumberDescription(destinyNumber),
      soul: getNumberDescription(soulNumber),
      name: nameNumber ? getNumberDescription(nameNumber) : null,
      external: getNumberDescription(externalNumber),
      personalYear: getNumberDescription(personalYear)
    }
  };
};
