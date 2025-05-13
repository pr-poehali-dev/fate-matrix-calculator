
/**
 * Библиотека для расчетов матрицы судьбы
 */

// Функция для суммирования цифр числа до однозначного числа
export const sumToSingleDigit = (num: number | string): number => {
  const strNum = String(num);
  
  // Если число уже однозначное, возвращаем его (кроме особых чисел)
  if (strNum.length === 1) return parseInt(strNum, 10);
  
  // Проверяем на мастер-числа (11, 22, 33)
  if (['11', '22', '33'].includes(strNum) && strNum.length === 2) {
    return parseInt(strNum, 10);
  }
  
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
  const result = sumToSingleDigit(fullDate);
  
  // Проверяем, было ли мастер-число перед финальным суммированием
  const intermediateSum = fullDate
    .split('')
    .map(digit => parseInt(digit, 10))
    .reduce((acc, val) => acc + val, 0);
    
  // Если промежуточная сумма была мастер-числом, возвращаем его
  if ([11, 22, 33].includes(intermediateSum)) {
    return intermediateSum;
  }
  
  return result;
};

// Функция для расчета числа души
export const calculateSoulNumber = (day: string): number => {
  const dayNum = parseInt(day, 10);
  return dayNum > 9 ? sumToSingleDigit(day) : dayNum;
};

// Функция для расчета числа имени
export const calculateNameNumber = (name: string): number => {
  // Таблица соответствия букв и чисел по нумерологической системе
  const letterValues: {[key: string]: number} = {
    // Русский алфавит
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9,
    'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9,
    'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9,
    'ъ': 1, 'ы': 2, 'ь': 3, 'э': 4, 'ю': 5, 'я': 6,
    // Английский алфавит
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
  
  // Проверяем, является ли сумма мастер-числом
  if ([11, 22, 33].includes(sum)) {
    return sum;
  }
  
  return sumToSingleDigit(sum);
};

// Функция для расчета внешнего числа
export const calculateExternalNumber = (month: string, year: string): number => {
  return sumToSingleDigit(month + year);
};

// Расчет матрицы судьбы 3x3
export const calculateMatrix = (day: string, month: string, year: string): number[][] => {
  // Создаем пустую матрицу 3x3
  const matrix: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  // Расчет значений для матрицы
  const d1 = parseInt(day[0] || '0', 10);
  const d2 = parseInt(day[1] || '0', 10);
  const m1 = parseInt(month[0] || '0', 10);
  const m2 = parseInt(month[1] || '0', 10);
  const y1 = parseInt(year[0] || '0', 10);
  const y2 = parseInt(year[1] || '0', 10);
  const y3 = parseInt(year[2] || '0', 10);
  const y4 = parseInt(year[3] || '0', 10);
  
  // Заполняем матрицу на основе даты рождения
  // Первая строка - день и месяц
  matrix[0][0] = d1;
  matrix[0][1] = d2;
  matrix[0][2] = sumToSingleDigit(d1 + d2);
  
  // Вторая строка - месяц и первая половина года
  matrix[1][0] = m1;
  matrix[1][1] = m2;
  matrix[1][2] = sumToSingleDigit(m1 + m2);
  
  // Третья строка - вторая половина года
  matrix[2][0] = y1;
  matrix[2][1] = y2;
  matrix[2][2] = sumToSingleDigit(y1 + y2);
  
  return matrix;
};

// Функция для получения сильных и слабых сторон числа
export const getNumberStrengthsWeaknesses = (num: number): { strengths: string, weaknesses: string } => {
  const attributes: {[key: number]: { strengths: string, weaknesses: string }} = {
    1: {
      strengths: "Лидерство, независимость, оригинальность, решительность, смелость, первопроходец.",
      weaknesses: "Эгоизм, доминирование, нетерпимость, агрессивность, поспешность в решениях."
    },
    2: {
      strengths: "Дипломатия, сотрудничество, интуиция, чувствительность, гармония, уравновешенность.",
      weaknesses: "Чрезмерная чувствительность, нерешительность, зависимость от мнения других, пассивность."
    },
    3: {
      strengths: "Творчество, самовыражение, оптимизм, коммуникабельность, вдохновение, радость жизни.",
      weaknesses: "Поверхностность, расточительность, рассеянность, непостоянство, склонность к преувеличениям."
    },
    4: {
      strengths: "Стабильность, организованность, практичность, надежность, последовательность, трудолюбие.",
      weaknesses: "Упрямство, консерватизм, негибкость, недостаток воображения, сопротивление переменам."
    },
    5: {
      strengths: "Свобода, приключения, адаптивность, разносторонность, изобретательность, прогрессивность.",
      weaknesses: "Непостоянство, импульсивность, нетерпеливость, склонность к рискам, поверхностность."
    },
    6: {
      strengths: "Забота, ответственность, гармония, служение другим, творчество, домашний очаг.",
      weaknesses: "Самопожертвование, навязчивость, чрезмерная забота, перфекционизм, беспокойство."
    },
    7: {
      strengths: "Аналитический ум, мудрость, интроспекция, духовность, интуиция, стремление к истине.",
      weaknesses: "Отчужденность, скептицизм, чрезмерная критичность, подозрительность, отстранённость."
    },
    8: {
      strengths: "Амбиции, власть, материальный успех, организаторские способности, ответственность, авторитет.",
      weaknesses: "Материализм, властность, трудоголизм, жесткость, жажда контроля, чрезмерный перфекционизм."
    },
    9: {
      strengths: "Гуманизм, сострадание, завершенность, высшие идеалы, всеохватность, мудрость и щедрость.",
      weaknesses: "Непрактичность, самопожертвование, отрешенность, идеализм, эмоциональная разочарованность."
    },
    11: {
      strengths: "Интуиция, вдохновение, духовное прозрение, высокая чувствительность, лидерство, идеализм.",
      weaknesses: "Нервозность, чрезмерная чувствительность, непрактичность, внутреннее напряжение."
    },
    22: {
      strengths: "Практичный визионер, строительство великих дел, организаторские способности, реализация масштабных идей.",
      weaknesses: "Чрезмерное напряжение, нереалистичные ожидания, слишком большая ответственность."
    },
    33: {
      strengths: "Целительство, духовное учительство, бескорыстное служение, великая мудрость, сострадание.",
      weaknesses: "Самопожертвование, чрезмерная эмоциональность, высокая нагрузка, идеализм."
    }
  };
  
  return attributes[num] || { 
    strengths: "Индивидуальные сильные стороны", 
    weaknesses: "Индивидуальные слабые стороны" 
  };
};

// Функция для получения описания числа
export const getNumberDescription = (num: number): string => {
  const descriptions: {[key: number]: string} = {
    1: "Число 1 символизирует начало, индивидуальность и силу воли. Люди с этим числом обладают лидерскими качествами, независимостью и амбициями. Это число первопроходцев, оригинальных мыслителей и тех, кто стремится прокладывать свой собственный путь.",
    2: "Число 2 представляет баланс, партнерство и чувствительность. Люди с этим числом обладают дипломатическими способностями, высокой интуицией и стремлением к гармонии. Они прирожденные миротворцы и сотрудники, способные находить компромиссы.",
    3: "Число 3 символизирует самовыражение, оптимизм и творчество. Люди с этим числом имеют прирожденный талант к коммуникации, артистизм и способность вдохновлять других. Они излучают радость, энтузиазм и креативность.",
    4: "Число 4 представляет стабильность, порядок и дисциплину. Люди с этим числом являются надежными, методичными и практичными. Они создают прочные основы для всего, что делают, и ценят точность, последовательность и традиции.",
    5: "Число 5 символизирует свободу, изменения и приключения. Люди с этим числом обладают адаптивностью, разносторонними интересами и энергичностью. Они жаждут новых впечатлений, избегают рутины и стремятся к разнообразию во всем.",
    6: "Число 6 представляет гармонию, ответственность и служение. Люди с этим числом обладают врожденным желанием заботиться о других, создавать уют и решать проблемы. Они высоко ценят семью, домашний очаг и стремятся к созданию гармоничной среды.",
    7: "Число 7 символизирует мудрость, анализ и духовность. Люди с этим числом обладают аналитическим умом, интуицией и склонны к духовным поискам. Они стремятся к истине, знаниям и глубокому пониманию тайн мироздания.",
    8: "Число 8 представляет власть, материальный успех и исполнительность. Люди с этим числом обладают деловой хваткой, организаторскими способностями и стремлением к достижению целей. Они понимают законы материального мира и умеют добиваться успеха.",
    9: "Число 9 символизирует завершение, сострадание и идеализм. Люди с этим числом обладают широким взглядом на мир, гуманизмом и стремлением к высоким идеалам. Это число мудрости, завершенности циклов и универсальной любви.",
    11: "Мастер-число 11 — число интуитивного прозрения, духовности и вдохновения. Люди с этим числом обладают высокоразвитой интуицией, духовными способностями и часто служат проводниками высших идей. Они способны вдохновлять других и видеть то, что недоступно большинству.",
    22: "Мастер-число 22 — число мастера-строителя. Люди с этим числом обладают необычайной способностью воплощать большие идеи в материальную реальность. Они могут реализовывать масштабные проекты, которые приносят пользу многим поколениям.",
    33: "Мастер-число 33 — число духовного учителя и целителя. Люди с этим редким числом обладают глубоким состраданием, мудростью и способностью исцелять других на всех уровнях. Это высшее число альтруизма и бескорыстного служения человечеству."
  };
  
  return descriptions[num] || "Это число имеет свои уникальные вибрации и значение в вашей жизни.";
};

// Функция для получения кармических уроков
export const getKarmicLessons = (day: string, month: string, year: string): number[] => {
  // Соединяем все цифры даты рождения
  const allDigits = (day + month + year).split('').map(d => parseInt(d, 10));
  
  // Создаем массив от 1 до 9
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Находим числа, которые отсутствуют в дате рождения
  return allNumbers.filter(num => !allDigits.includes(num));
};

// Функция для получения жизненных циклов
export const getLifeCycles = (day: string, month: string, year: string): { 
  firstCycle: { number: number, age: number },
  secondCycle: { number: number, age: number },
  thirdCycle: { number: number, age: number }
} => {
  const dayNum = sumToSingleDigit(day);
  const monthNum = sumToSingleDigit(month);
  const yearNum = sumToSingleDigit(year);
  
  // Первый цикл: от рождения до 28-35 лет (число месяца)
  // Второй цикл: от 28-35 до 56-63 лет (число дня)
  // Третий цикл: от 56-63 до конца жизни (число года)
  
  return {
    firstCycle: { number: monthNum, age: 28 },
    secondCycle: { number: dayNum, age: 56 },
    thirdCycle: { number: yearNum, age: 84 }
  };
};

// Функция для получения года реализации
export const getRealizationYear = (destinyNumber: number, birthYear: string): number => {
  const birthYearNum = parseInt(birthYear, 10);
  return birthYearNum + 36 + destinyNumber; // Примерная формула для года реализации
};

// Расчет всей матрицы судьбы
export const calculateDestinyMatrix = (day: string, month: string, year: string, name: string = '') => {
  const destinyNumber = calculateDestinyNumber(day, month, year);
  const soulNumber = calculateSoulNumber(day);
  const nameNumber = calculateNameNumber(name);
  const externalNumber = calculateExternalNumber(month, year);
  
  // Матрица 3x3
  const matrix = calculateMatrix(day, month, year);
  
  // Энергия дня рождения
  const birthDayEnergy = parseInt(day, 10);
  
  // Кармические уроки
  const karmicLessons = getKarmicLessons(day, month, year);
  
  // Жизненные циклы
  const lifeCycles = getLifeCycles(day, month, year);
  
  // Год реализации
  const realizationYear = getRealizationYear(destinyNumber, year);
  
  // Расчет личных годовых циклов
  const currentYear = new Date().getFullYear();
  const personalYear = sumToSingleDigit(birthDayEnergy + parseInt(month, 10) + currentYear);
  
  // Расчет планетарных влияний (упрощенно)
  // В нумерологии каждое число связано с определенной планетой
  const planetaryInfluences = {
    1: "Солнце",
    2: "Луна",
    3: "Юпитер",
    4: "Раху",
    5: "Меркурий",
    6: "Венера",
    7: "Кету",
    8: "Сатурн",
    9: "Марс"
  };
  
  // Получение атрибутов чисел
  const destinyAttributes = getNumberStrengthsWeaknesses(destinyNumber);
  const soulAttributes = getNumberStrengthsWeaknesses(soulNumber);
  const nameAttributes = nameNumber ? getNumberStrengthsWeaknesses(nameNumber) : { strengths: "", weaknesses: "" };
  const externalAttributes = getNumberStrengthsWeaknesses(externalNumber);
  
  return {
    destinyNumber,
    soulNumber,
    nameNumber: nameNumber || null, // null если имя не задано
    externalNumber,
    birthDayEnergy,
    personalYear,
    matrix,
    karmicLessons,
    lifeCycles,
    realizationYear,
    planetaryInfluence: planetaryInfluences[destinyNumber as keyof typeof planetaryInfluences] || "Смешанное влияние",
    attributes: {
      destiny: destinyAttributes,
      soul: soulAttributes,
      name: nameNumber ? nameAttributes : null,
      external: externalAttributes,
    },
    descriptions: {
      destiny: getNumberDescription(destinyNumber),
      soul: getNumberDescription(soulNumber),
      name: nameNumber ? getNumberDescription(nameNumber) : null,
      external: getNumberDescription(externalNumber),
      personalYear: getNumberDescription(personalYear)
    }
  };
};
