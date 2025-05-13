
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
      const result = calculateDestinyMatrix(day, month, year);
      onCalculate(result);
    }
  }, [day, month, year, onCalculate, validateInputs]);

  return (
    <Card className="matrix-card w-full max-w-md animate-fade-in">
      <div className="mystic-circle w-32 h-32 -right-10 -top-10 opacity-50"></div>
      <div className="mystic-circle w-24 h-24 -left-5 -bottom-5 opacity-40"></div>
      
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-indigo">Расчёт матрицы судьбы</h2>
          <p className="text-muted-foreground mt-2">Введите дату своего рождения</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="day">День</Label>
            <Input
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="ДД"
              maxLength={2}
              className="text-center"
            />
          </div>
          <div>
            <Label htmlFor="month">Месяц</Label>
            <Input
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="ММ"
              maxLength={2}
              className="text-center"
            />
          </div>
          <div>
            <Label htmlFor="year">Год</Label>
            <Input
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="ГГГГ"
              maxLength={4}
              className="text-center"
            />
          </div>
        </div>
        
        {error && (
          <div className="text-destructive text-sm mb-4 text-center">
            {error}
          </div>
        )}
        
        <Button 
          onClick={handleCalculate} 
          className="w-full bg-indigo hover:bg-indigo-light"
        >
          <Icon name="Calculator" className="mr-2" />
          Рассчитать
        </Button>
      </CardContent>
    </Card>
  );
};

export default DateCalculator;
