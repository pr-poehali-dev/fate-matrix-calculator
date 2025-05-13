
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface ResultCardProps {
  matrix: {
    destinyNumber: number;
    soulNumber: number;
    nameNumber: number | null;
    externalNumber: number;
    personalYear: number;
    birthDayEnergy: number;
    matrix: number[][];
    karmicLessons: number[];
    lifeCycles: {
      firstCycle: { number: number, age: number };
      secondCycle: { number: number, age: number };
      thirdCycle: { number: number, age: number };
    };
    realizationYear: number;
    planetaryInfluence: string;
    attributes: {
      destiny: { strengths: string, weaknesses: string };
      soul: { strengths: string, weaknesses: string };
      name: { strengths: string, weaknesses: string } | null;
      external: { strengths: string, weaknesses: string };
    };
    descriptions: {
      destiny: string;
      soul: string;
      name: string | null;
      external: string;
      personalYear: string;
    };
  } | null;
}

const NumberResult = ({ 
  number, 
  title, 
  description, 
  iconName,
  colorClass = "bg-primary",
  strengths,
  weaknesses
}: { 
  number: number; 
  title: string; 
  description: string;
  iconName: string;
  colorClass?: string;
  strengths: string;
  weaknesses: string;
}) => (
  <div className="flex flex-col space-y-3 p-4 rounded-lg bg-white/50 dark:bg-mystic-light/20 backdrop-blur-sm relative overflow-hidden">
    <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-indigo-light/20 to-transparent rounded-full"></div>
    
    <div className="flex items-start space-x-4">
      <div className={`flex items-center justify-center rounded-full ${colorClass} w-12 h-12 text-white shrink-0 shadow-lg`}>
        <Icon name={iconName} size={22} />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-bold text-base text-indigo dark:text-lavender">{title}</h3>
          <Badge variant="outline" className="ml-2 bg-white/70 dark:bg-mystic/70 border-indigo/30 dark:border-accent-purple/30">
            {number}
          </Badge>
        </div>
        <p className="text-sm mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-2 mt-2 text-sm">
      <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2.5">
        <div className="flex items-center text-indigo dark:text-lavender font-medium mb-1">
          <Icon name="ThumbsUp" size={14} className="mr-1" />
          <span>Сильные стороны:</span>
        </div>
        <p className="text-muted-foreground text-xs">{strengths}</p>
      </div>
      
      <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2.5">
        <div className="flex items-center text-indigo dark:text-lavender font-medium mb-1">
          <Icon name="ThumbsDown" size={14} className="mr-1" />
          <span>Слабые стороны:</span>
        </div>
        <p className="text-muted-foreground text-xs">{weaknesses}</p>
      </div>
    </div>
  </div>
);

const LifeMatrix = ({ matrix }: { matrix: number[][] }) => (
  <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
    <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Матрица жизни</h3>
    <div className="matrix-grid">
      {matrix.flat().map((num, idx) => (
        <div key={idx} className="matrix-cell">
          {num}
        </div>
      ))}
    </div>
    <div className="mt-4 text-xs text-center text-muted-foreground">
      <p>Матрица показывает распределение энергий в вашей жизни</p>
    </div>
  </div>
);

const LifeCycles = ({ 
  cycles 
}: { 
  cycles: {
    firstCycle: { number: number, age: number };
    secondCycle: { number: number, age: number };
    thirdCycle: { number: number, age: number };
  } 
}) => (
  <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
    <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Жизненные циклы</h3>
    
    <div className="relative h-3 bg-white/70 dark:bg-mystic/40 rounded-full mb-6 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-indigo-light/60 dark:bg-accent-purple/60"></div>
      <div className="absolute left-1/3 top-0 h-full w-1/3 bg-accent-purple/60"></div>
      <div className="absolute left-2/3 top-0 h-full w-1/3 bg-accent-pink/60"></div>
    </div>
    
    <div className="grid grid-cols-3 gap-2">
      <div className="text-center">
        <div className="flex justify-center">
          <Badge variant="outline" className="bg-indigo-light/30 dark:bg-accent-purple/30 border-indigo/30 dark:border-accent-purple/30">
            {cycles.firstCycle.number}
          </Badge>
        </div>
        <p className="text-xs mt-1 text-muted-foreground">До {cycles.firstCycle.age} лет</p>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center">
          <Badge variant="outline" className="bg-accent-purple/30 border-indigo/30 dark:border-accent-purple/30">
            {cycles.secondCycle.number}
          </Badge>
        </div>
        <p className="text-xs mt-1 text-muted-foreground">{cycles.firstCycle.age}-{cycles.secondCycle.age} лет</p>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center">
          <Badge variant="outline" className="bg-accent-pink/30 border-indigo/30 dark:border-accent-purple/30">
            {cycles.thirdCycle.number}
          </Badge>
        </div>
        <p className="text-xs mt-1 text-muted-foreground">От {cycles.secondCycle.age} лет</p>
      </div>
    </div>
    
    <div className="mt-4 text-xs text-center text-muted-foreground">
      <p>Каждый цикл приносит новые энергии и уроки</p>
    </div>
  </div>
);

const KarmicLessons = ({ lessons }: { lessons: number[] }) => (
  <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
    <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Кармические уроки</h3>
    
    {lessons.length > 0 ? (
      <>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {lessons.map(lesson => (
            <Badge key={lesson} className="bg-accent-purple/20 text-indigo dark:text-lavender border-indigo/30">
              {lesson}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-center text-muted-foreground">
          Числа, отсутствующие в дате рождения, указывают на качества, которые нужно развить в этой жизни
        </p>
      </>
    ) : (
      <p className="text-sm text-center text-muted-foreground">
        У вас нет явных кармических уроков в этой жизни
      </p>
    )}
  </div>
);

const PlanetaryInfluence = ({ 
  influence, 
  realizationYear 
}: { 
  influence: string, 
  realizationYear: number 
}) => (
  <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
    <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Мистические влияния</h3>
    
    <div className="mb-4">
      <p className="text-center text-sm mb-1">Планетарное влияние:</p>
      <div className="flex justify-center">
        <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30">
          {influence}
        </Badge>
      </div>
    </div>
    
    <div>
      <p className="text-center text-sm mb-1">Год реализации:</p>
      <div className="flex justify-center">
        <Badge className="bg-accent-purple/20 text-indigo dark:text-lavender border-indigo/30">
          {realizationYear}
        </Badge>
      </div>
    </div>
    
    <div className="mt-4 text-xs text-center text-muted-foreground">
      <p>Год реализации — время максимального раскрытия вашего потенциала</p>
    </div>
  </div>
);

const ResultCard = ({ matrix }: ResultCardProps) => {
  if (!matrix) return null;

  return (
    <Card className="matrix-card w-full max-w-4xl animate-fade-in aura-border">
      <div className="mystic-circle w-48 h-48 -right-12 -top-12 opacity-30"></div>
      <div className="mystic-circle w-64 h-64 -left-16 -bottom-16 opacity-20"></div>
      <div className="constellation"></div>
      
      <CardHeader>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <div className="talisman"></div>
        </div>
        <CardTitle className="text-center text-2xl text-indigo dark:text-lavender mt-12 glow-text">
          Ваша матрица судьбы
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-white/50 dark:bg-mystic-light/30 mb-6 rounded-lg">
            <TabsTrigger value="main" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Star" className="mr-1 h-4 w-4" />
              Основные числа
            </TabsTrigger>
            <TabsTrigger value="matrix" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Grid" className="mr-1 h-4 w-4" />
              Матрица
            </TabsTrigger>
            <TabsTrigger value="cycles" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Circle" className="mr-1 h-4 w-4" />
              Циклы жизни
            </TabsTrigger>
            <TabsTrigger value="cosmic" className="data-[state=active]:bg-indigo-light data-[state=active]:text-white dark:data-[state=active]:bg-accent-purple">
              <Icon name="Moon" className="mr-1 h-4 w-4" />
              Космические влияния
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="main" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NumberResult 
                number={matrix.destinyNumber} 
                title="Число судьбы" 
                description={matrix.descriptions.destiny.substring(0, 100) + "..."}
                iconName="Star"
                colorClass="bg-accent-purple"
                strengths={matrix.attributes.destiny.strengths}
                weaknesses={matrix.attributes.destiny.weaknesses}
              />
              
              <NumberResult 
                number={matrix.soulNumber} 
                title="Число души" 
                description={matrix.descriptions.soul.substring(0, 100) + "..."}
                iconName="Heart"
                colorClass="bg-indigo"
                strengths={matrix.attributes.soul.strengths}
                weaknesses={matrix.attributes.soul.weaknesses}
              />
              
              <NumberResult 
                number={matrix.externalNumber} 
                title="Внешнее число" 
                description={matrix.descriptions.external.substring(0, 100) + "..."}
                iconName="Eye"
                colorClass="bg-indigo-light"
                strengths={matrix.attributes.external.strengths}
                weaknesses={matrix.attributes.external.weaknesses}
              />
              
              <NumberResult 
                number={matrix.personalYear} 
                title="Личный год" 
                description={matrix.descriptions.personalYear.substring(0, 100) + "..."}
                iconName="Calendar"
                colorClass="bg-accent-pink"
                strengths={getGenericStrengths(matrix.personalYear)}
                weaknesses={getGenericWeaknesses(matrix.personalYear)}
              />
            </div>
            
            {matrix.nameNumber && (
              <div className="mt-4">
                <NumberResult 
                  number={matrix.nameNumber} 
                  title="Число имени" 
                  description={matrix.descriptions.name?.substring(0, 100) + "..." || ""}
                  iconName="User"
                  colorClass="bg-accent-pink/80"
                  strengths={matrix.attributes.name?.strengths || ""}
                  weaknesses={matrix.attributes.name?.weaknesses || ""}
                />
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="matrix" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LifeMatrix matrix={matrix.matrix} />
              <KarmicLessons lessons={matrix.karmicLessons} />
            </div>
            
            <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg mt-4 backdrop-blur-sm">
              <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Энергия дня рождения</h3>
              <div className="flex justify-center mb-3">
                <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30 text-lg py-1 px-4">
                  {matrix.birthDayEnergy}
                </Badge>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Это число определяет ваши врожденные таланты и особенности характера
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="cycles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LifeCycles cycles={matrix.lifeCycles} />
              
              <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Переходные годы</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-center mb-1">Первый переход</p>
                    <div className="flex justify-center">
                      <Badge className="bg-indigo-light/30 text-indigo dark:text-lavender border-indigo/30">
                        {matrix.lifeCycles.firstCycle.age} лет
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-center mb-1">Второй переход</p>
                    <div className="flex justify-center">
                      <Badge className="bg-accent-purple/30 text-indigo dark:text-lavender border-indigo/30">
                        {matrix.lifeCycles.secondCycle.age} лет
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-center text-muted-foreground">
                      Переходные годы — это периоды трансформации, когда меняется энергетический фон жизни
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">
                Значение циклов
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-3">
                  <div className="flex items-center text-indigo dark:text-lavender font-medium mb-1">
                    <Badge className="bg-indigo-light/30 mr-2">
                      {matrix.lifeCycles.firstCycle.number}
                    </Badge>
                    <span>Первый цикл</span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {getCycleDescription(matrix.lifeCycles.firstCycle.number, 1)}
                  </p>
                </div>
                
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-3">
                  <div className="flex items-center text-indigo dark:text-lavender font-medium mb-1">
                    <Badge className="bg-accent-purple/30 mr-2">
                      {matrix.lifeCycles.secondCycle.number}
                    </Badge>
                    <span>Второй цикл</span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {getCycleDescription(matrix.lifeCycles.secondCycle.number, 2)}
                  </p>
                </div>
                
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-3">
                  <div className="flex items-center text-indigo dark:text-lavender font-medium mb-1">
                    <Badge className="bg-accent-pink/30 mr-2">
                      {matrix.lifeCycles.thirdCycle.number}
                    </Badge>
                    <span>Третий цикл</span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {getCycleDescription(matrix.lifeCycles.thirdCycle.number, 3)}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cosmic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlanetaryInfluence 
                influence={matrix.planetaryInfluence} 
                realizationYear={matrix.realizationYear}
              />
              
              <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">Планетарное влияние</h3>
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-3 mb-3">
                  <div className="flex items-center text-indigo dark:text-lavender font-medium mb-2">
                    <Icon name={getPlanetIcon(matrix.planetaryInfluence)} size={16} className="mr-2" />
                    <span>{matrix.planetaryInfluence}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {getPlanetDescription(matrix.planetaryInfluence)}
                  </p>
                </div>
                
                <div className="text-xs text-center text-muted-foreground">
                  <p>Планета оказывает влияние на вашу энергетику и судьбу</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-center font-bold text-indigo dark:text-lavender mb-3">
                Космические соответствия
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Стихия</p>
                  <div className="flex justify-center">
                    <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30">
                      {getElement(matrix.destinyNumber)}
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Камень</p>
                  <div className="flex justify-center">
                    <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30">
                      {getStone(matrix.destinyNumber)}
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Цвет</p>
                  <div className="flex justify-center">
                    <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30">
                      {getColor(matrix.destinyNumber)}
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-white/70 dark:bg-mystic/30 rounded-md p-2 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Архетип</p>
                  <div className="flex justify-center">
                    <Badge className="bg-indigo/20 text-indigo dark:text-lavender border-indigo/30">
                      {getArchetype(matrix.destinyNumber)}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-center text-muted-foreground">
                <p>Эти соответствия могут быть использованы для гармонизации вашей энергии</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator className="my-6 bg-indigo/10" />
        
        <div className="text-center text-xs text-muted-foreground">
          <p className="italic">«В мире нет ничего более могущественного, чем идея, время которой пришло» — Виктор Гюго</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Вспомогательные функции для дополнительной информации
function getGenericStrengths(num: number): string {
  const strengths: {[key: number]: string} = {
    1: "Лидерство, инициатива, решительность, независимость",
    2: "Дипломатия, интуиция, сотрудничество, миротворчество",
    3: "Творчество, оптимизм, самовыражение, коммуникабельность",
    4: "Организованность, практичность, надежность, стабильность",
    5: "Адаптивность, свобода, универсальность, прогрессивность",
    6: "Забота, гармония, ответственность, баланс",
    7: "Аналитика, мудрость, духовность, исследование",
    8: "Власть, организаторские способности, материальный успех",
    9: "Гуманизм, сострадание, мудрость, завершенность",
    11: "Интуиция, вдохновение, духовное лидерство",
    22: "Строительство великих проектов, реализация идей",
    33: "Целительство, забота, духовное учительство"
  };
  return strengths[num] || "Индивидуальные сильные стороны";
}

function getGenericWeaknesses(num: number): string {
  const weaknesses: {[key: number]: string} = {
    1: "Эгоизм, доминирование, нетерпимость, агрессивность",
    2: "Нерешительность, сверхчувствительность, зависимость",
    3: "Поверхностность, расточительность, разбросанность",
    4: "Ригидность, консерватизм, негибкость, критичность",
    5: "Беспокойство, непостоянство, импульсивность",
    6: "Беспокойство, перфекционизм, навязчивая забота",
    7: "Отчужденность, холодность, скептицизм, критичность",
    8: "Материализм, трудоголизм, жесткость, контроль",
    9: "Непрактичность, идеализм, отстраненность",
    11: "Нервозность, чрезмерная чувствительность",
    22: "Напряжение, нереалистичные ожидания, перегрузка",
    33: "Самопожертвование, идеализм, чрезмерная нагрузка"
  };
  return weaknesses[num] || "Индивидуальные слабые стороны";
}

function getCycleDescription(num: number, cycleNumber: number): string {
  const phases: { [key: number]: { [key: number]: string } } = {
    1: {
      1: "Цикл становления личности, развития лидерских качеств и самостоятельности. Важно научиться отстаивать себя и свою позицию.",
      2: "Время реализации лидерских амбиций, достижения независимости и проявления индивидуальности на новом уровне.",
      3: "Возможность передать свою мудрость и опыт другим, стать ментором и вдохновителем для молодого поколения."
    },
    2: {
      1: "Период развития интуиции, чувствительности и умения сотрудничать. Важно научиться гармоничному взаимодействию.",
      2: "Время дипломатии, партнерства и глубоких отношений. Период, когда интуиция и чувствительность достигают расцвета.",
      3: "Возможность стать мудрым советчиком, развивать эмпатию на высоком уровне и достичь внутренней гармонии."
    },
    3: {
      1: "Цикл творческого самовыражения, развития коммуникативных навыков и оптимистичного взгляда на мир.",
      2: "Время расцвета творчества, самореализации через искусство, ораторское мастерство или любой другой вид самовыражения.",
      3: "Период передачи творческой мудрости, вдохновения других и наслаждения плодами своего таланта."
    },
    4: {
      1: "Период формирования дисциплины, практичности и организованности. Закладка фундамента для будущих достижений.",
      2: "Время строительства стабильной жизни, достижения надежности и последовательности в своих действиях.",
      3: "Возможность наслаждаться плодами своего труда, стабильностью и передавать практическую мудрость другим."
    },
    5: {
      1: "Цикл развития адаптивности, любознательности и стремления к свободе. Время экспериментов и поиска себя.",
      2: "Период активных перемен, путешествий и приключений. Время разнообразного опыта и расширения горизонтов.",
      3: "Возможность интегрировать разнообразный жизненный опыт, найти свободу внутри себя и делиться мудростью странника."
    },
    6: {
      1: "Период развития ответственности, заботы о других и стремления к гармонии в отношениях и окружающей среде.",
      2: "Время создания гармоничной семьи, заботы о близких и реализации в домашней сфере или профессиях, связанных с заботой.",
      3: "Возможность стать мудрым советчиком в вопросах семьи, гармонии и заботы, наслаждаться плодами своей любви."
    },
    7: {
      1: "Цикл развития аналитического мышления, духовности и стремления к глубокому пониманию себя и мира.",
      2: "Период глубокого анализа, духовных поисков и специализации в определенной области знания или мудрости.",
      3: "Возможность достичь высокого уровня мудрости, делиться глубокими знаниями и достичь духовного просветления."
    },
    8: {
      1: "Период развития организаторских способностей, амбиций и понимания законов материального мира.",
      2: "Время достижения материального успеха, власти и влияния. Период реализации крупных проектов и целей.",
      3: "Возможность мудро использовать накопленные ресурсы, влияние и опыт для благотворительности и наставничества."
    },
    9: {
      1: "Цикл развития гуманизма, сострадания и универсального мышления. Время учиться отпускать и завершать циклы.",
      2: "Период служения высоким идеалам, реализации гуманистических проектов и развития глобального видения.",
      3: "Возможность достичь глубокой мудрости, внутреннего покоя и делиться универсальным состраданием и любовью."
    }
  };
  
  return phases[num]?.[cycleNumber] || "Этот цикл принесет новые энергии и возможности для развития.";
}

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
    "Кету": "CloudLightning"
  };
  
  return icons[planet] || "Planet";
}

function getPlanetDescription(planet: string): string {
  const descriptions: {[key: string]: string} = {
    "Солнце": "Символизирует жизненную силу, власть, креативность, эго и самовыражение. Влияет на вашу сущность и творческий потенциал.",
    "Луна": "Представляет эмоции, интуицию, подсознание и материнскую энергию. Влияет на ваш эмоциональный мир и адаптивность.",
    "Марс": "Символизирует энергию, страсть, мужество, решительность и действие. Влияет на вашу силу воли и способность преодолевать препятствия.",
    "Меркурий": "Представляет коммуникацию, интеллект, обучение и адаптивность. Влияет на ваши ментальные способности и манеру общения.",
    "Юпитер": "Символизирует расширение, изобилие, мудрость и удачу. Влияет на ваш рост, процветание и философское мировоззрение.",
    "Венера": "Представляет любовь, красоту, гармонию и ценности. Влияет на ваши отношения и эстетическое восприятие.",
    "Сатурн": "Символизирует ограничения, дисциплину, ответственность и время. Влияет на вашу структуру жизни и кармические уроки.",
    "Раху": "Представляет иллюзии, амбиции, материальные желания и нестандартный путь. Влияет на ваше стремление к социальному признанию.",
    "Кету": "Символизирует духовность, освобождение, отрешенность и прошлые жизни. Влияет на ваш духовный рост и кармические связи."
  };
  
  return descriptions[planet] || "Эта планета оказывает уникальное влияние на вашу жизнь и судьбу.";
}

function getElement(num: number): string {
  const elements: {[key: number]: string} = {
    1: "Огонь",
    2: "Вода",
    3: "Огонь",
    4: "Земля",
    5: "Воздух",
    6: "Вода",
    7: "Воздух",
    8: "Земля",
    9: "Огонь",
    11: "Воздух",
    22: "Земля",
    33: "Вода"
  };
  
  return elements[num] || "Эфир";
}

function getStone(num: number): string {
  const stones: {[key: number]: string} = {
    1: "Рубин",
    2: "Жемчуг",
    3: "Желтый сапфир",
    4: "Изумруд",
    5: "Алмаз",
    6: "Белый коралл",
    7: "Аметист",
    8: "Сапфир",
    9: "Красный коралл",
    11: "Лунный камень",
    22: "Оникс",
    33: "Аквамарин"
  };
  
  return stones[num] || "Кристалл";
}

function getColor(num: number): string {
  const colors: {[key: number]: string} = {
    1: "Красный",
    2: "Белый",
    3: "Желтый",
    4: "Зеленый",
    5: "Голубой",
    6: "Серебряный",
    7: "Фиолетовый",
    8: "Темно-синий",
    9: "Оранжевый",
    11: "Светло-голубой",
    22: "Золотой",
    33: "Розовый"
  };
  
  return colors[num] || "Многоцветный";
}

function getArchetype(num: number): string {
  const archetypes: {[key: number]: string} = {
    1: "Воин",
    2: "Жрица",
    3: "Творец",
    4: "Строитель",
    5: "Искатель",
    6: "Хранитель",
    7: "Мудрец",
    8: "Правитель",
    9: "Целитель",
    11: "Провидец",
    22: "Мастер",
    33: "Учитель"
  };
  
  return archetypes[num] || "Волшебник";
}

export default ResultCard;
