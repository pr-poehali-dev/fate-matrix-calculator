
import { useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import DateCalculator from '@/components/DateCalculator';
import ResultCard from '@/components/ResultCard';
import NumberExplanation from '@/components/NumberExplanation';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [matrixResult, setMatrixResult] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // Apply theme on initial load
  useState(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <div className={`min-h-screen hero-pattern bg-secondary dark:bg-mystic transition-colors duration-300`}>
      <Button 
        onClick={toggleTheme} 
        variant="ghost" 
        className="fixed top-4 right-4 p-2 h-10 w-10 rounded-full"
      >
        {isDarkMode ? (
          <SunMedium className="h-5 w-5 text-lavender" />
        ) : (
          <MoonStar className="h-5 w-5 text-indigo" />
        )}
      </Button>

      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-indigo dark:text-lavender">
            Матрица Судьбы
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте ключевые числа своей судьбы и их влияние на вашу жизнь, характер и предназначение
          </p>
        </header>

        <main className="flex flex-col items-center space-y-10">
          <DateCalculator onCalculate={setMatrixResult} />
          
          {matrixResult && (
            <>
              <ResultCard matrix={matrixResult} />
              <NumberExplanation />
            </>
          )}
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Матрица Судьбы</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
