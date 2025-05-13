
import { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { calculateDestinyMatrix } from '@/lib/matrixCalculator';

interface DateCalculatorProps {
  onCalculate: (matrix: any) => void;
}

const DateCalculator = ({ onCalculate }: DateCalculatorProps) => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  const validateInputs = useCallback(() => {
    if (!day || !month || !year) {
      setError('Пожалуйста, введите полную дату рождения');
      return false;
    }
    
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    
    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      setError('Введите корректные числовые значения');
      return false;
    }
    
    if (monthNum < 1 || monthNum > 12) {
      setError('Месяц должен быть от 1 до 12');
      return false;
    }
    
    // Проверяем день в зависимости от месяца
    const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
    if (dayNum < 1 || dayNum > daysInMonth) {
      setError(`В этом месяце ${daysInMonth} дней`);
      return false;
    }
    
    return true;
  }, [day, month, year]);
  
  const handleCalculate = useCallback(() => {
    if (validateInputs()) {
      setError(null);
      const result = calculateDestinyMatrix(day, month, year, name);
      onCalculate(result);
    }
  }, [day, month, year, name, onCalculate, validateInputs]);

  return (
    <Card className="matrix-card w-full max-w-md animate-fade-in aura-border">
      <div className="mystic-circle w-32 h-32 -right-10 -top-10 opacity-50"></div>
      <div className="mystic-circle w-24 h-24 -left-5 -bottom-5 opacity-40"></div>
      
      <CardContent className="p-6 relative">
        <div className="talisman absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
        
        <div className="mb-6 text-center mt-10">
          <h2 className="text-2xl font-bold text-indigo dark:text-lavender glow-text">Матрица Судьбы</h2>
          <p className="text-muted-foreground mt-2">Откройте тайны своего числового кода</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <Label htmlFor="day" className="text-indigo dark:text-lavender">День</Label>
            <Input
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="ДД"
              maxLength={2}
              className="text-center bg-white/50 dark:bg-mystic-light/30 border-indigo/20 dark:border-lavender/20"
            />
          </div>
          <div>
            <Label htmlFor="month" className="text-indigo dark:text-lavender">Месяц</Label>
            <Input
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="ММ"
              maxLength={2}
              className="text-center bg-white/50 dark:bg-mystic-light/30 border-indigo/20 dark:border-lavender/20"
            />
          </div>
          <div>
            <Label htmlFor="year" className="text-indigo dark:text-lavender">Год</Label>
            <Input
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="ГГГГ"
              maxLength={4}
              className="text-center bg-white/50 dark:bg-mystic-light/30 border-indigo/20 dark:border-lavender/20"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="name" className="text-indigo dark:text-lavender">Имя (необязательно)</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите своё имя"
            className="bg-white/50 dark:bg-mystic-light/30 border-indigo/20 dark:border-lavender/20"
          />
          <p className="text-xs text-muted-foreground mt-1">Для расчёта числа имени</p>
        </div>
        
        {error && (
          <div className="text-destructive text-sm mb-4 text-center bg-white/50 dark:bg-mystic-light/30 p-2 rounded-md">
            {error}
          </div>
        )}
        
        <Button 
          onClick={handleCalculate} 
          className="w-full bg-indigo hover:bg-indigo-light relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo via-accent-purple to-indigo-light opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          <Icon name="Sparkles" className="mr-2" />
          <span className="relative z-10">Раскрыть тайны чисел</span>
        </Button>
        
        <div className="text-xs text-center mt-4 text-muted-foreground">
          <p>«Числа правят миром» — Пифагор</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DateCalculator;
