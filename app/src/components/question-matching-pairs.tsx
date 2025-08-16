
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ColumnItem {
  id: string;
  content: string;
  matchId: string;
}

const leftColumnItems: ColumnItem[] = [
  { id: 'l1', content: 'Capital de Portugal', matchId: 'm1' },
  { id: 'l2', content: 'Capital da França', matchId: 'm2' },
  { id: 'l3', content: 'Capital da Espanha', matchId: 'm3' },
  { id: 'l4', content: 'Capital do Brasil', matchId: 'm4' },
];

const rightColumnItems: ColumnItem[] = [
  { id: 'r1', content: 'Paris', matchId: 'm2' },
  { id: 'r2', content: 'Madri', matchId: 'm3' },
  { id: 'r3', content: 'Lisboa', matchId: 'm1' },
  { id: 'r4', content: 'Brasilia', matchId: 'm4' },
];

interface QuestionMatchingPairsProps {
  showResults: boolean;
  onValidationComplete: (status: 'correct' | 'wrong') => void;
}

export default function QuestionMatchingPairs({ showResults, onValidationComplete }: QuestionMatchingPairsProps) {
  const [selectedLeft, setSelectedLeft] = useState<ColumnItem | null>(null);
  const [tempSelectedRight, setTempSelectedRight] = useState<ColumnItem | null>(null);
  const [userPairs, setUserPairs] = useState<Record<string, string>>({});
  const [validationStatus, setValidationStatus] = useState<Record<string, 'correct' | 'incorrect'>>({});

  useEffect(() => {
    if (showResults) {
      const newValidationStatus: Record<string, 'correct' | 'incorrect'> = {};
      const leftItemsById = new Map(leftColumnItems.map(item => [item.id, item]));
      let allCorrect = true;

      if (Object.keys(userPairs).length !== leftColumnItems.length) {
        allCorrect = false;
      }

      for (const leftId in userPairs) {
        const rightId = userPairs[leftId];
        const leftItem = leftItemsById.get(leftId);
        const rightItem = rightColumnItems.find(item => item.id === rightId);

        if (leftItem && rightItem) {
          const areCorrect = leftItem.matchId === rightItem.matchId;
          if (!areCorrect) {
            allCorrect = false;
          }
          newValidationStatus[leftId] = areCorrect ? 'correct' : 'incorrect';
          newValidationStatus[rightId] = areCorrect ? 'correct' : 'incorrect';
        } else {
          allCorrect = false;
        }
      }
      setValidationStatus(newValidationStatus);
      onValidationComplete(allCorrect ? 'correct' : 'wrong');
    }
  }, [showResults, userPairs, onValidationComplete]);

  const handleSelect = (item: ColumnItem, column: 'left' | 'right') => {
    if (showResults || tempSelectedRight) return;

    if (column === 'left') {
      if (userPairs[item.id]) return;
      setSelectedLeft(item);
    } else if (selectedLeft) {
      const leftId = selectedLeft.id;
      const rightId = item.id;

      if (Object.values(userPairs).includes(rightId)) return;

      setTempSelectedRight(item);

      setTimeout(() => {
        setUserPairs(prev => ({ ...prev, [leftId]: rightId }));
        setSelectedLeft(null);
        setTempSelectedRight(null);
      }, 500);
    }
  };

  const getItemClass = (item: ColumnItem) => {
    const isLeftSelected = selectedLeft?.id === item.id;
    const isRightTempSelected = tempSelectedRight?.id === item.id;
    const isPaired = userPairs[item.id] || Object.values(userPairs).includes(item.id);
    const status = validationStatus[item.id];

    return cn(
      'p-4 border rounded-md transition-colors h-full flex items-center justify-center text-center',
      {
        'cursor-pointer hover:bg-zinc-900': !isPaired && !showResults,
        'border-violet-400': isLeftSelected || isRightTempSelected,
        'opacity-50 cursor-not-allowed': isPaired && !showResults,
        'border-lime-400': showResults && status === 'correct',
        'border-red-400': showResults && status === 'incorrect',
      }
    );
  };

  const handleReset = () => {
    setSelectedLeft(null);
    setTempSelectedRight(null);
    setUserPairs({});
    setValidationStatus({});
  };

  return (
    <div className="mt-24 w-full max-w-2xl mx-auto">
      <h2 className="font-extrabold p-4 text-center">Combine os Pares</h2>
      <div className="mt-2 grid grid-cols-1 gap-4">
        {leftColumnItems.map((leftItem, index) => {
          const rightItem = rightColumnItems[index]; 
          return (
            <div key={leftItem.id} className="grid grid-cols-2 gap-4 items-stretch">
              <div
                className={getItemClass(leftItem)}
                onClick={() => handleSelect(leftItem, 'left')}
              >
                {leftItem.content}
              </div>
              <div
                className={getItemClass(rightItem)}
                onClick={() => handleSelect(rightItem, 'right')}
              >
                {rightItem.content}
              </div>
            </div>
          );
        })}
      </div> 
      <div className="mt-8 flex justify-center">
        {showResults ? (
            <Button onClick={handleReset} disabled>Reiniciar</Button>
        ) : (
            <Button onClick={handleReset}>Reiniciar</Button>
        )}
      </div>
    </div>
  );
}
