
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ResultCardProps {
  matrix: {
    destinyNumber: number;
    soulNumber: number;
    nameNumber: number | null;
    externalNumber: number;
    personalYear: number;
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
  colorClass = "bg-primary"
}: { 
  number: number; 
  title: string; 
  description: string;
  iconName: string;
  colorClass?: string;
}) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-mystic-light/30 backdrop-blur-sm">
    <div className={`flex items-center justify-center rounded-full ${colorClass} w-12 h-12 text-white shrink-0`}>
      <Icon name={iconName} size={22} />
    </div>
    <div className="flex-1">
      <div className="flex items-center">
        <h3 className="font-bold text-base">{title}</h3>
        <Badge variant="outline" className="ml-2 bg-white/70 dark:bg-mystic/70">
          {number}
        </Badge>
      </div>
      <p className="text-sm mt-1 text-muted-foreground">{description}</p>
    </div>
  </div>
);

const ResultCard = ({ matrix }: ResultCardProps) => {
  if (!matrix) return null;

  return (
    <Card className="matrix-card w-full max-w-3xl animate-fade-in">
      <div className="mystic-circle w-48 h-48 -right-12 -top-12 opacity-30"></div>
      <div className="mystic-circle w-64 h-64 -left-16 -bottom-16 opacity-20"></div>
      
      <CardHeader>
        <CardTitle className="text-center text-2xl text-indigo">
          Ваша матрица судьбы
        </CardTitle>
      </CardHeader>
      
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NumberResult 
          number={matrix.destinyNumber} 
          title="Число судьбы" 
          description={matrix.descriptions.destiny}
          iconName="Star"
          colorClass="bg-accent-purple"
        />
        
        <NumberResult 
          number={matrix.soulNumber} 
          title="Число души" 
          description={matrix.descriptions.soul}
          iconName="Heart"
          colorClass="bg-indigo"
        />
        
        <NumberResult 
          number={matrix.externalNumber} 
          title="Внешнее число" 
          description={matrix.descriptions.external}
          iconName="Eye"
          colorClass="bg-indigo-light"
        />
        
        <NumberResult 
          number={matrix.personalYear} 
          title="Личный год" 
          description={matrix.descriptions.personalYear}
          iconName="Calendar"
          colorClass="bg-accent-pink"
        />
      </CardContent>
    </Card>
  );
};

export default ResultCard;
