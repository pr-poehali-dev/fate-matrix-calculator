
import { useState, useEffect } from 'react';
import { MoonStar, SunMedium, Sparkles } from 'lucide-react';
import DateCalculator from '@/components/DateCalculator';
import ResultCard from '@/components/ResultCard';
import NumberExplanation from '@/components/NumberExplanation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [matrixResult, setMatrixResult] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [revealElements, setRevealElements] = useState<boolean[]>([]);

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
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      const newRevealState = [...revealElements];
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          (el as HTMLElement).classList.add('revealed');
          newRevealState[index] = true;
        }
      });
      
      if (newRevealState.length > 0) {
        setRevealElements(newRevealState);
      }
    };
    
    // Initialize with empty array matching the number of reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    setRevealElements(new Array(elements.length).fill(false));
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [matrixResult]);

  return (
    <div className={`min-h-screen cosmic-bg transition-colors duration-500`}>
      <div className="mystic-glow"></div>
      
      <Button 
        onClick={toggleTheme} 
        variant="ghost" 
        className="fixed top-4 right-4 p-2 h-10 w-10 rounded-full z-10 bg-white/10 dark:bg-mystic/30 backdrop-blur-sm"
      >
        {isDarkMode ? (
          <SunMedium className="h-5 w-5 text-lavender" />
        ) : (
          <MoonStar className="h-5 w-5 text-indigo" />
        )}
      </Button>

      <div className="container max-w-6xl px-4 py-12 mx-auto relative">
        <div className="cosmic-symbol text-3xl top-20 left-10 opacity-30">♄</div>
        <div className="cosmic-symbol text-4xl bottom-40 right-10 opacity-30 delay-700">☿</div>
        <div className="cosmic-symbol text-3xl top-60 right-20 opacity-30 delay-1000">♃</div>
        <div className="cosmic-symbol text-4xl bottom-20 left-20 opacity-30 delay-500">♀</div>
        
        <header className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80">
            <div className="talisman"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-indigo dark:text-lavender mt-12 font-cinzel glow-text">
            Матрица Судьбы
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cormorant">
            Раскройте сакральный код своей судьбы, узнайте о скрытых талантах и жизненном предназначении через древнее искусство нумерологии
          </p>
          
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              <Sparkles className="h-5 w-5 text-accent-purple animate-pulse-slow" />
              <span className="text-sm text-muted-foreground italic">
                "Числа — ключ к пониманию универсальных законов мироздания"
              </span>
              <Sparkles className="h-5 w-5 text-accent-purple animate-pulse-slow" />
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center space-y-16">
          <div className="w-full scroll-reveal">
            <DateCalculator onCalculate={setMatrixResult} />
          </div>
          
          {matrixResult && (
            <>
              <div className="w-full scroll-reveal">
                <ResultCard matrix={matrixResult} />
              </div>
              
              <Separator className="w-1/2 mx-auto bg-indigo/10 dark:bg-lavender/10" />
              
              <div className="w-full scroll-reveal">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-indigo dark:text-lavender font-cinzel glow-text">
                    Эзотерическое значение чисел
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mt-2 font-cormorant">
                    Погрузитесь в мистический мир чисел и раскройте их влияние на разные аспекты вашей жизни
                  </p>
                </div>
                
                <NumberExplanation />
              </div>
              
              <div className="w-full max-w-3xl mx-auto scroll-reveal">
                <div className="matrix-card p-6 text-center">
                  <h2 className="text-xl font-bold text-indigo dark:text-lavender mb-4 font-cinzel">
                    Что ещё можно узнать с помощью нумерологии
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-center mb-2">
                        <div className="rounded-full bg-indigo/20 dark:bg-accent-purple/20 p-2">
                          <Icon name="Map" className="h-6 w-6 text-indigo dark:text-lavender" />
                        </div>
                      </div>
                      <h3 className="text-indigo dark:text-lavender font-medium mb-1">Карта души</h3>
                      <p className="text-xs text-muted-foreground">
                        Глубинный анализ кармических уроков, талантов из прошлых жизней и вашего духовного пути
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-center mb-2">
                        <div className="rounded-full bg-indigo/20 dark:bg-accent-purple/20 p-2">
                          <Icon name="Users" className="h-6 w-6 text-indigo dark:text-lavender" />
                        </div>
                      </div>
                      <h3 className="text-indigo dark:text-lavender font-medium mb-1">Совместимость</h3>
                      <p className="text-xs text-muted-foreground">
                        Детальный анализ нумерологической совместимости в любви, дружбе и деловых отношениях
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-mystic-light/20 p-4 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-center mb-2">
                        <div className="rounded-full bg-indigo/20 dark:bg-accent-purple/20 p-2">
                          <Icon name="CalendarDays" className="h-6 w-6 text-indigo dark:text-lavender" />
                        </div>
                      </div>
                      <h3 className="text-indigo dark:text-lavender font-medium mb-1">Годовой прогноз</h3>
                      <p className="text-xs text-muted-foreground">
                        Предсказание энергий и возможностей на год вперед на основе персональных циклов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <div className="flex justify-center space-x-2 mb-2">
            <div className="cosmic-symbol text-lg opacity-60">☽</div>
            <div className="cosmic-symbol text-lg opacity-60">☿</div>
            <div className="cosmic-symbol text-lg opacity-60">♀</div>
            <div className="cosmic-symbol text-lg opacity-60">♁</div>
            <div className="cosmic-symbol text-lg opacity-60">♃</div>
            <div className="cosmic-symbol text-lg opacity-60">♄</div>
            <div className="cosmic-symbol text-lg opacity-60">♅</div>
          </div>
          <p>© {new Date().getFullYear()} Матрица Судьбы — Познай себя через числа</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
