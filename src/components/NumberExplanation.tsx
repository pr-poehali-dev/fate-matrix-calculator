
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const numberExplanations = [
  {
    number: 1,
    title: "Единица - Лидер",
    description: "Число 1 символизирует начало, индивидуальность и силу воли. Люди с этим числом обладают лидерскими качествами, независимостью и амбициями.",
    strengths: "Решительность, оригинальность, целеустремленность",
    weaknesses: "Эгоизм, доминирование, нетерпимость",
    icon: "Crown"
  },
  {
    number: 2,
    title: "Двойка - Дипломат",
    description: "Число 2 представляет баланс, партнерство и чувствительность. Люди с этим числом обладают дипломатическими способностями и высокой интуицией.",
    strengths: "Сотрудничество, интуиция, терпение",
    weaknesses: "Чрезмерная чувствительность, нерешительность",
    icon: "HeartHandshake"
  },
  {
    number: 3,
    title: "Тройка - Творец",
    description: "Число 3 символизирует самовыражение, оптимизм и творчество. Люди с этим числом имеют прирожденный талант к коммуникации и искусству.",
    strengths: "Творчество, общительность, оптимизм",
    weaknesses: "Поверхностность, расточительность",
    icon: "Palette"
  },
  {
    number: 4,
    title: "Четверка - Строитель",
    description: "Число 4 представляет стабильность, порядок и дисциплину. Люди с этим числом являются надежными, методичными и практичными.",
    strengths: "Организованность, надежность, трудолюбие",
    weaknesses: "Упрямство, негибкость, консерватизм",
    icon: "Building"
  },
  {
    number: 5,
    title: "Пятерка - Искатель",
    description: "Число 5 символизирует свободу, изменения и приключения. Люди с этим числом обладают адаптивностью, разносторонними интересами и энергичностью.",
    strengths: "Адаптивность, универсальность, любознательность",
    weaknesses: "Непостоянство, импульсивность, излишний риск",
    icon: "Compass"
  },
  {
    number: 6,
    title: "Шестерка - Покровитель",
    description: "Число 6 представляет гармонию, ответственность и служение. Люди с этим числом обладают врожденным желанием заботиться о других.",
    strengths: "Забота, ответственность, гармоничность",
    weaknesses: "Самопожертвование, навязчивость, беспокойство",
    icon: "Home"
  },
  {
    number: 7,
    title: "Семерка - Мыслитель",
    description: "Число 7 символизирует мудрость, анализ и духовность. Люди с этим числом обладают аналитическим умом и склонны к духовным поискам.",
    strengths: "Интеллект, интуиция, духовность",
    weaknesses: "Отчужденность, скептицизм, отстранённость",
    icon: "BookOpen"
  },
  {
    number: 8,
    title: "Восьмерка - Достигатель",
    description: "Число 8 представляет власть, материальный успех и исполнительность. Люди с этим числом обладают деловой хваткой и организаторскими способностями.",
    strengths: "Амбициозность, практичность, уверенность в себе",
    weaknesses: "Материализм, властность, трудоголизм",
    icon: "Briefcase"
  },
  {
    number: 9,
    title: "Девятка - Гуманист",
    description: "Число 9 символизирует завершение, сострадание и идеализм. Люди с этим числом обладают широким взглядом на мир и стремятся к высоким идеалам.",
    strengths: "Сострадание, мудрость, вдохновение",
    weaknesses: "Непрактичность, самопожертвование, отрешенность",
    icon: "Globe"
  }
];

const NumberExplanation = () => {
  return (
    <Card className="matrix-card w-full max-w-3xl animate-fade-in">
      <div className="mystic-circle w-40 h-40 -right-6 -top-6 opacity-30"></div>
      
      <CardHeader>
        <CardTitle className="text-center text-2xl text-indigo">
          Значения чисел в матрице судьбы
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {numberExplanations.map((item) => (
            <AccordionItem key={item.number} value={`item-${item.number}`}>
              <AccordionTrigger className="hover:text-indigo">
                <span className="flex items-center">
                  <div className="mr-3 flex items-center justify-center rounded-full bg-lavender dark:bg-indigo/30 w-8 h-8 shrink-0 text-indigo dark:text-lavender">
                    <Icon name={item.icon} size={16} />
                  </div>
                  <span className="font-semibold">{item.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-11 space-y-2 text-muted-foreground">
                  <p>{item.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-white/50 dark:bg-mystic-light/30 p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1 text-indigo">Сильные стороны</h4>
                      <p className="text-sm">{item.strengths}</p>
                    </div>
                    <div className="bg-white/50 dark:bg-mystic-light/30 p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1 text-indigo">Слабые стороны</h4>
                      <p className="text-sm">{item.weaknesses}</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default NumberExplanation;
