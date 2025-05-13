
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const numberExplanations = [
  {
    number: 1,
    title: "Единица - Лидер",
    description: "Число 1 символизирует начало, индивидуальность и силу воли. Люди с этим числом обладают лидерскими качествами, независимостью и амбициями.",
    strengths: "Решительность, оригинальность, целеустремленность, смелость, самостоятельность",
    weaknesses: "Эгоизм, доминирование, нетерпимость, нежелание идти на компромисс",
    icon: "Crown",
    planet: "Солнце",
    element: "Огонь",
    color: "Красный",
    stone: "Рубин, гранат",
    chakra: "Муладхара (корневая)",
    tarot: "Маг",
    keywords: "лидерство, инициатива, самость, начало"
  },
  {
    number: 2,
    title: "Двойка - Дипломат",
    description: "Число 2 представляет баланс, партнерство и чувствительность. Люди с этим числом обладают дипломатическими способностями и высокой интуицией.",
    strengths: "Сотрудничество, интуиция, терпение, гармония, чуткость",
    weaknesses: "Чрезмерная чувствительность, нерешительность, зависимость от мнения других",
    icon: "HeartHandshake",
    planet: "Луна",
    element: "Вода",
    color: "Белый, серебристый",
    stone: "Жемчуг, лунный камень",
    chakra: "Свадхистхана (сакральная)",
    tarot: "Верховная Жрица",
    keywords: "партнерство, дуальность, баланс, интуиция"
  },
  {
    number: 3,
    title: "Тройка - Творец",
    description: "Число 3 символизирует самовыражение, оптимизм и творчество. Люди с этим числом имеют прирожденный талант к коммуникации и искусству.",
    strengths: "Творчество, общительность, оптимизм, экспрессивность, вдохновение",
    weaknesses: "Поверхностность, расточительность, разбросанность, непостоянство",
    icon: "Palette",
    planet: "Юпитер",
    element: "Огонь",
    color: "Желтый, золотой",
    stone: "Цитрин, топаз",
    chakra: "Манипура (солнечное сплетение)",
    tarot: "Императрица",
    keywords: "творчество, радость, общение, экспрессия"
  },
  {
    number: 4,
    title: "Четверка - Строитель",
    description: "Число 4 представляет стабильность, порядок и дисциплину. Люди с этим числом являются надежными, методичными и практичными.",
    strengths: "Организованность, надежность, трудолюбие, практичность, стабильность",
    weaknesses: "Упрямство, негибкость, консерватизм, чрезмерная критичность",
    icon: "Building",
    planet: "Раху (Северный Узел)",
    element: "Земля",
    color: "Зеленый, коричневый",
    stone: "Изумруд, малахит",
    chakra: "Анахата (сердечная)",
    tarot: "Император",
    keywords: "стабильность, структура, порядок, фундамент"
  },
  {
    number: 5,
    title: "Пятерка - Искатель",
    description: "Число 5 символизирует свободу, изменения и приключения. Люди с этим числом обладают адаптивностью, разносторонними интересами и энергичностью.",
    strengths: "Адаптивность, универсальность, любознательность, прогрессивность",
    weaknesses: "Непостоянство, импульсивность, излишний риск, беспокойство",
    icon: "Compass",
    planet: "Меркурий",
    element: "Воздух",
    color: "Голубой, бирюзовый",
    stone: "Аквамарин, бирюза",
    chakra: "Вишудха (горловая)",
    tarot: "Иерофант",
    keywords: "свобода, перемены, путешествия, приключения"
  },
  {
    number: 6,
    title: "Шестерка - Покровитель",
    description: "Число 6 представляет гармонию, ответственность и служение. Люди с этим числом обладают врожденным желанием заботиться о других.",
    strengths: "Забота, ответственность, гармоничность, понимание, хороший семьянин",
    weaknesses: "Самопожертвование, навязчивость, беспокойство, перфекционизм",
    icon: "Home",
    planet: "Венера",
    element: "Вода",
    color: "Розовый, персиковый",
    stone: "Розовый кварц, родонит",
    chakra: "Аджна (третий глаз)",
    tarot: "Влюбленные",
    keywords: "гармония, любовь, ответственность, семья"
  },
  {
    number: 7,
    title: "Семерка - Мыслитель",
    description: "Число 7 символизирует мудрость, анализ и духовность. Люди с этим числом обладают аналитическим умом и склонны к духовным поискам.",
    strengths: "Интеллект, интуиция, духовность, аналитические способности",
    weaknesses: "Отчужденность, скептицизм, отстранённость, критичность",
    icon: "BookOpen",
    planet: "Кету (Южный Узел)",
    element: "Воздух/Эфир",
    color: "Фиолетовый, индиго",
    stone: "Аметист, чароит",
    chakra: "Сахасрара (коронная)",
    tarot: "Колесница",
    keywords: "мудрость, интроспекция, анализ, духовность"
  },
  {
    number: 8,
    title: "Восьмерка - Достигатель",
    description: "Число 8 представляет власть, материальный успех и исполнительность. Люди с этим числом обладают деловой хваткой и организаторскими способностями.",
    strengths: "Амбициозность, практичность, уверенность в себе, организаторские таланты",
    weaknesses: "Материализм, властность, трудоголизм, жесткость",
    icon: "Briefcase",
    planet: "Сатурн",
    element: "Земля",
    color: "Темно-синий, черный",
    stone: "Лазурит, шунгит",
    chakra: "Все чакры (баланс материального и духовного)",
    tarot: "Сила",
    keywords: "власть, достижения, материальный успех, баланс"
  },
  {
    number: 9,
    title: "Девятка - Гуманист",
    description: "Число 9 символизирует завершение, сострадание и идеализм. Люди с этим числом обладают широким взглядом на мир и стремятся к высоким идеалам.",
    strengths: "Сострадание, мудрость, вдохновение, гуманизм, завершение",
    weaknesses: "Непрактичность, самопожертвование, отрешенность, идеализм",
    icon: "Globe",
    planet: "Марс",
    element: "Огонь",
    color: "Красный, золотой",
    stone: "Рубин, гелиодор",
    chakra: "Интеграция всех чакр",
    tarot: "Отшельник",
    keywords: "завершение, гуманизм, сострадание, универсальность"
  },
  {
    number: 11,
    title: "Одиннадцать - Провидец",
    description: "Мастер-число 11 символизирует интуитивное озарение, духовное просветление и вдохновение. Люди с этим числом обладают высокой чувствительностью и особыми способностями.",
    strengths: "Духовное прозрение, высокая интуиция, вдохновение, идеализм",
    weaknesses: "Нервозность, повышенная чувствительность, внутреннее напряжение",
    icon: "Lightbulb",
    planet: "Нептун",
    element: "Свет",
    color: "Белый, серебристый с голубым оттенком",
    stone: "Лабрадорит, селенит",
    chakra: "Третий глаз и коронная",
    tarot: "Правосудие",
    keywords: "озарение, интуиция, духовность, просветление"
  },
  {
    number: 22,
    title: "Двадцать два - Мастер",
    description: "Мастер-число 22 символизирует мастера-строителя, способного воплощать великие идеи в материальную реальность. Люди с этим числом могут реализовывать масштабные проекты.",
    strengths: "Реализация великих идей, практичный визионер, организаторский талант",
    weaknesses: "Сверхнагрузка, высокие требования к себе, ощущение тяжести миссии",
    icon: "Hammer",
    planet: "Уран",
    element: "Земля и Эфир",
    color: "Золотой",
    stone: "Цитрин, золотой топаз",
    chakra: "Все чакры в гармонии",
    tarot: "Мир",
    keywords: "мастер-строитель, проявление, великие дела, трансформация мира"
  },
  {
    number: 33,
    title: "Тридцать три - Учитель",
    description: "Мастер-число 33 символизирует духовного учителя и целителя. Люди с этим редчайшим числом обладают глубоким состраданием и способностью возвышать других.",
    strengths: "Бескорыстное служение, целительство, духовное учительство, любовь",
    weaknesses: "Самопожертвование, чрезмерная эмоциональность, высокая нагрузка",
    icon: "Heart",
    planet: "Плутон",
    element: "Божественная любовь",
    color: "Розово-золотой",
    stone: "Розовый турмалин, кунцит",
    chakra: "Единение со вселенной",
    tarot: "Вселенная",
    keywords: "учитель, целитель, сострадание, высшая любовь"
  }
];

// Дополнительная таблица соответствий
const additionalCorrespondences = {
  title: "Эзотерические соответствия чисел",
  description: "Каждое число имеет свои уникальные вибрации и соответствия в различных эзотерических системах:",
  tables: [
    {
      title: "Основные соответствия",
      columns: ["Число", "Планета", "Стихия", "Цвет", "Камень"],
      data: [
        ["1", "Солнце", "Огонь", "Красный, золотой", "Рубин, гелиодор"],
        ["2", "Луна", "Вода", "Серебристый, белый", "Жемчуг, лунный камень"],
        ["3", "Юпитер", "Огонь", "Желтый, золотой", "Цитрин, топаз"],
        ["4", "Раху", "Земля", "Зеленый, коричневый", "Изумруд, малахит"],
        ["5", "Меркурий", "Воздух", "Голубой, бирюзовый", "Аквамарин, бирюза"],
        ["6", "Венера", "Вода", "Розовый, персиковый", "Розовый кварц, родонит"],
        ["7", "Кету", "Воздух/Эфир", "Фиолетовый, индиго", "Аметист, чароит"],
        ["8", "Сатурн", "Земля", "Темно-синий, черный", "Лазурит, шунгит"],
        ["9", "Марс", "Огонь", "Красный, золотой", "Рубин, гранат"]
      ]
    },
    {
      title: "Духовные соответствия",
      columns: ["Число", "Архетип", "Чакра", "Карта Таро", "Ключевые слова"],
      data: [
        ["1", "Воин", "Муладхара", "Маг", "начало, инициатива, самость"],
        ["2", "Жрица", "Свадхистхана", "Верховная Жрица", "дуальность, интуиция, баланс"],
        ["3", "Творец", "Манипура", "Императрица", "творчество, радость, экспрессия"],
        ["4", "Строитель", "Анахата", "Император", "структура, порядок, фундамент"],
        ["5", "Искатель", "Вишудха", "Иерофант", "свобода, перемены, приключения"],
        ["6", "Хранитель", "Аджна", "Влюбленные", "гармония, любовь, семья"],
        ["7", "Мудрец", "Сахасрара", "Колесница", "мудрость, анализ, духовность"],
        ["8", "Правитель", "Все чакры", "Сила", "власть, достижения, материализация"],
        ["9", "Целитель", "Интеграция чакр", "Отшельник", "завершение, сострадание, служение"]
      ]
    }
  ]
};

// Пифагорейское учение о числах
const pythagoreanTeachings = {
  title: "Пифагорейское учение о числах",
  description: "Пифагор и его последователи рассматривали числа как основополагающие принципы мироздания и ключи к пониманию космического порядка:",
  sections: [
    {
      title: "Монада (1)",
      content: "Единица - это начало всех чисел, символ Бога, неделимости, единства и чистого бытия. Это активный принцип, дающий начало всему сущему."
    },
    {
      title: "Диада (2)",
      content: "Двойка - принцип двойственности, полярности и противоположностей. Начало разделения, появления пар: свет-тьма, мужское-женское, активное-пассивное."
    },
    {
      title: "Триада (3)",
      content: "Тройка - совершенное число, символизирующее гармонию между противоположностями, примирение двойственности через создание третьего элемента. Символ триединства мира."
    },
    {
      title: "Тетрада (4)",
      content: "Четверка - символ материального мира, четырех стихий и сторон света. Число справедливости, устойчивости и порядка в космосе."
    },
    {
      title: "Пентада (5)",
      content: "Пятерка - число человека (четыре конечности и голова), соединение первого женского (2) и мужского (3) чисел. Символизирует жизнь, любовь и гармонию."
    },
    {
      title: "Гексада (6)",
      content: "Шестерка - первое совершенное число (сумма его делителей равна самому числу). Символ равновесия, творческого начала и союза противоположностей."
    },
    {
      title: "Гептада (7)",
      content: "Семерка - священное число, состоящее из 3 (духа) и 4 (материи). Число мистических циклов, связанное с духовной трансформацией и мудростью."
    },
    {
      title: "Огдоада (8)",
      content: "Восьмерка - символ гармонии и космического равновесия. Число справедливости, совершенства и цикличности бытия."
    },
    {
      title: "Эннеада (9)",
      content: "Девятка - граница всех однозначных чисел, символизирующая завершенность. Число высшей мудрости и преодоления всех испытаний."
    }
  ]
};

// Практические применения нумерологии
const practicalApplications = {
  title: "Практические применения нумерологии",
  description: "Нумерология предлагает различные инструменты для самопознания и гармонизации жизни:",
  applications: [
    {
      title: "Выбор благоприятных дат",
      content: "Для важных событий (свадьба, подписание контрактов, начало проектов) можно выбирать даты, вибрации которых соответствуют целям мероприятия.",
      icon: "Calendar"
    },
    {
      title: "Совместимость в отношениях",
      content: "Сравнение чисел судьбы, души и имени позволяет оценить совместимость партнеров и выявить потенциальные области гармонии или конфликтов.",
      icon: "Heart"
    },
    {
      title: "Выбор имени",
      content: "Нумерологический анализ имени помогает выбрать имя с энергетикой, способствующей развитию желаемых качеств и достижению целей.",
      icon: "User"
    },
    {
      title: "Выбор места жительства",
      content: "Анализ числового кода адреса может помочь выбрать место, энергетически соответствующее вашим целям и потребностям.",
      icon: "Home"
    },
    {
      title: "Планирование карьеры",
      content: "Нумерология может подсказать наиболее благоприятные сферы деятельности и периоды для карьерных изменений.",
      icon: "Briefcase"
    },
    {
      title: "Медитации на числа",
      content: "Целенаправленное созерцание определенных чисел может помочь активировать соответствующие качества в вашей жизни и гармонизировать энергетику.",
      icon: "Sparkles"
    }
  ]
};

const NumberExplanation = () => {
  return (
    <Card className="matrix-card w-full max-w-4xl animate-fade-in aura-border">
      <div className="mystic-circle w-40 h-40 -right-6 -top-6 opacity-30"></div>
      <div className="mystic-circle w-52 h-52 -left-10 -bottom-10 opacity-20"></div>
      <div className="constellation"></div>
      
      <CardHeader>
        <CardTitle className="text-center text-2xl text-indigo dark:text-lavender glow-text">
          Сакральное значение чисел
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="numbers" className="w-full">
          <TabsList className="grid grid-cols-3 w-full bg-white/50 dark:bg-mystic-light/30 mb-6 rounded-lg">
            <TabsTrigger value="numbers" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Hash" className="mr-1 h-4 w-4" />
              Значения чисел
            </TabsTrigger>
            <TabsTrigger value="correspondences" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Table" className="mr-1 h-4 w-4" />
              Соответствия
            </TabsTrigger>
            <TabsTrigger value="applications" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Lightbulb" className="mr-1 h-4 w-4" />
              Применение
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="numbers" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              {numberExplanations.map((item) => (
                <AccordionItem key={item.number} value={`item-${item.number}`}>
                  <AccordionTrigger className="hover:text-indigo dark:hover:text-lavender">
                    <span className="flex items-center">
                      <div className="mr-3 flex items-center justify-center rounded-full bg-lavender dark:bg-indigo/30 w-8 h-8 shrink-0 text-indigo dark:text-lavender">
                        <Icon name={item.icon} size={16} />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                      {(item.number === 11 || item.number === 22 || item.number === 33) && (
                        <Badge className="ml-2 bg-accent-purple/20 dark:bg-accent-purple/30 text-indigo dark:text-lavender border-none">
                          Мастер-число
                        </Badge>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-11 space-y-4 text-muted-foreground">
                      <p>{item.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-1 text-indigo dark:text-lavender">Сильные стороны</h4>
                          <p className="text-sm">{item.strengths}</p>
                        </div>
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-1 text-indigo dark:text-lavender">Слабые стороны</h4>
                          <p className="text-sm">{item.weaknesses}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <Icon name={getPlanetIcon(item.planet)} className="mr-1 h-4 w-4 text-indigo dark:text-lavender" />
                            <h5 className="text-xs font-medium text-indigo dark:text-lavender">Планета</h5>
                          </div>
                          <p className="text-xs">{item.planet}</p>
                        </div>
                        
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <Icon name={getElementIcon(item.element)} className="mr-1 h-4 w-4 text-indigo dark:text-lavender" />
                            <h5 className="text-xs font-medium text-indigo dark:text-lavender">Стихия</h5>
                          </div>
                          <p className="text-xs">{item.element}</p>
                        </div>
                        
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <Icon name="Palette" className="mr-1 h-4 w-4 text-indigo dark:text-lavender" />
                            <h5 className="text-xs font-medium text-indigo dark:text-lavender">Цвет</h5>
                          </div>
                          <p className="text-xs">{item.color}</p>
                        </div>
                        
                        <div className="bg-white/50 dark:bg-mystic-light/30 p-2 rounded-md">
                          <div className="flex items-center mb-1">
                            <Icon name="Diamond" className="mr-1 h-4 w-4 text-indigo dark:text-lavender" />
                            <h5 className="text-xs font-medium text-indigo dark:text-lavender">Камень</h5>
                          </div>
                          <p className="text-xs">{item.stone}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/50 dark:bg-mystic-light/30 p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-1 text-indigo dark:text-lavender">Ключевые слова</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.keywords.split(', ').map((keyword, idx) => (
                            <Badge key={idx} variant="outline" className="bg-indigo/10 dark:bg-accent-purple/10 text-indigo dark:text-lavender border-indigo/20 dark:border-lavender/20">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="correspondences" className="mt-0">
            <div className="space-y-6">
              <div className="bg-white/50 dark:bg-mystic-light/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo dark:text-lavender mb-2">{additionalCorrespondences.title}</h3>
                <p className="text-muted-foreground mb-4">{additionalCorrespondences.description}</p>
                
                <div className="space-y-6">
                  {additionalCorrespondences.tables.map((table, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-medium text-indigo dark:text-lavender mb-3">{table.title}</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                          <thead>
                            <tr>
                              {table.columns.map((col, colIdx) => (
                                <th key={colIdx} className="bg-indigo/10 dark:bg-accent-purple/20 text-indigo dark:text-lavender px-3 py-2 text-xs text-left">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.data.map((row, rowIdx) => (
                              <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/30 dark:bg-mystic/20' : 'bg-white/10 dark:bg-mystic/10'}>
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx} className="px-3 py-2 text-xs border-t border-lavender/10 dark:border-indigo/10">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/50 dark:bg-mystic-light/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo dark:text-lavender mb-2">{pythagoreanTeachings.title}</h3>
                <p className="text-muted-foreground mb-4">{pythagoreanTeachings.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pythagoreanTeachings.sections.map((section, idx) => (
                    <div key={idx} className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                      <h4 className="text-sm font-medium text-indigo dark:text-lavender mb-1">{section.title}</h4>
                      <p className="text-xs text-muted-foreground">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-0">
            <div className="bg-white/50 dark:bg-mystic-light/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo dark:text-lavender mb-2">{practicalApplications.title}</h3>
              <p className="text-muted-foreground mb-4">{practicalApplications.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practicalApplications.applications.map((app, idx) => (
                  <div key={idx} className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                    <div className="flex items-start mb-2">
                      <div className="flex items-center justify-center rounded-full bg-indigo/20 dark:bg-accent-purple/20 w-8 h-8 shrink-0 text-indigo dark:text-lavender mr-2">
                        <Icon name={app.icon} size={15} />
                      </div>
                      <h4 className="text-sm font-medium text-indigo dark:text-lavender pt-1.5">{app.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{app.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/50 dark:bg-mystic-light/30 p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-indigo dark:text-lavender mb-2">Медитации на числа</h3>
              <p className="text-muted-foreground mb-4">Созерцание числовых вибраций может помочь активировать соответствующие качества в вашей жизни:</p>
              
              <div className="space-y-4">
                <div className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-indigo dark:text-lavender mb-2">Как проводить медитацию на число</h4>
                  <ol className="text-xs text-muted-foreground space-y-2 list-decimal pl-4">
                    <li>Сядьте в удобной позе и расслабьтесь, сделайте несколько глубоких вдохов.</li>
                    <li>Визуализируйте выбранное число, представляя его в своем уме или глядя на его изображение.</li>
                    <li>Сосредоточьтесь на качествах, которые символизирует это число, и повторяйте соответствующие аффирмации.</li>
                    <li>Позвольте энергии числа наполнить вас, почувствуйте, как его вибрации резонируют с вашим существом.</li>
                    <li>Завершите медитацию, выразив благодарность и сделав несколько глубоких вдохов.</li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                    <div className="flex justify-center mb-2">
                      <Badge className="bg-indigo/20 dark:bg-accent-purple/20 text-indigo dark:text-lavender border-none px-3 py-1">
                        <span className="text-lg">1</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      «Я — уникальная личность, творец своей судьбы. Я уверенно иду своим путем, проявляя лидерские качества и силу воли.»
                    </p>
                  </div>
                  
                  <div className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                    <div className="flex justify-center mb-2">
                      <Badge className="bg-indigo/20 dark:bg-accent-purple/20 text-indigo dark:text-lavender border-none px-3 py-1">
                        <span className="text-lg">7</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      «Я соединяюсь с глубинной мудростью внутри себя. Мой разум ясен, а интуиция безошибочна. Я познаю истину и открываюсь духовному росту.»
                    </p>
                  </div>
                  
                  <div className="bg-white/40 dark:bg-mystic/30 p-3 rounded-md">
                    <div className="flex justify-center mb-2">
                      <Badge className="bg-indigo/20 dark:bg-accent-purple/20 text-indigo dark:text-lavender border-none px-3 py-1">
                        <span className="text-lg">9</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      «Я завершаю старые циклы и открываюсь новым возможностям. Мое сердце наполнено состраданием и любовью ко всему миру. Я служу высшему благу.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-6 text-xs text-muted-foreground italic">
          «Числа правят вселенной» — Пифагор
        </div>
      </CardContent>
    </Card>
  );
};

// Вспомогательные функции для получения иконок
function getPlanetIcon(planet: string): string {
  const icons: {[key: string]: string} = {
    "Солнце": "SunMedium",
    "Луна": "Moon",
    "Марс": "Flame",
    "Меркурий": "MessageCircle",
    "Юпитер": "Zap",
    "Венера": "Heart",
    "Сатурн": "Clock",
    "Раху": "CloudFog",
    "Кету": "CloudLightning",
    "Нептун": "Droplets",
    "Уран": "Bolt",
    "Плутон": "Asterisk"
  };
  
  return icons[planet] || "Planet";
}

function getElementIcon(element: string): string {
  const icons: {[key: string]: string} = {
    "Огонь": "Flame",
    "Вода": "Droplets",
    "Воздух": "Wind",
    "Земля": "Mountain",
    "Эфир": "Sparkles",
    "Свет": "Sun",
    "Божественная любовь": "Heart"
  };
  
  return icons[element] || "Sparkles";
}

export default NumberExplanation;
