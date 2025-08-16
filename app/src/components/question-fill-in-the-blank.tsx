import { useState, useEffect } from "react";
import { cn } from '@/lib/utils';

interface QuestionFillInTheBlackProps {
  showResults: boolean;
  onValidationComplete: (status: 'correct' | 'wrong') => void;
}

export default function QuestionFillInTheBlack({ showResults, onValidationComplete }: QuestionFillInTheBlackProps) {
  const sentence = "O ___ brincou com seu ___ .";
  const blanks = ["dono", "cachorro"]; // Correct answers for the blanks
  const allWords = ["dono", "casa", "cachorro", "parede"]; // All available words

  const [filledBlanks, setFilledBlanks] = useState<string[]>(["", ""]);
  const [availableWords, setAvailableWords] = useState<string[]>(allWords);

  useEffect(() => {
    if (showResults) {
      const isCorrect = filledBlanks.every((word, index) => word === blanks[index]);
      onValidationComplete(isCorrect ? 'correct' : 'wrong');
    }
  }, [showResults, filledBlanks, onValidationComplete, blanks]);

  const handleWordClick = (word: string) => {
    if (showResults) return;

    const firstEmptyIndex = filledBlanks.findIndex(blank => blank === "");
    if (firstEmptyIndex !== -1) {
      const newFilledBlanks = [...filledBlanks];
      newFilledBlanks[firstEmptyIndex] = word;
      setFilledBlanks(newFilledBlanks);

      setAvailableWords(prev => prev.filter(w => w !== word));
    }
  };

  const handleBlankClick = (index: number) => {
    if (showResults) return;

    const wordToReturn = filledBlanks[index];
    if (wordToReturn) {
      const newFilledBlanks = [...filledBlanks];
      newFilledBlanks[index] = "";
      setFilledBlanks(newFilledBlanks);

      setAvailableWords(prev => [...prev, wordToReturn]);
    }
  };

  const renderSentence = () => {
    const sentenceParts = sentence.split("___");
    return (
      <p className="flex items-center p-4 text-lg h-[72px]">
        {sentenceParts.map((part, index) => (
          <span key={index}>
            {part}
            {index < sentenceParts.length - 1 && (
              <span
                className={cn(
                  "p-2 inline-flex items-center justify-center w-auto h-8 mx-2 overflow-hidden leading-8 underline underline-offset-1",
                  {
                    "border rounded-md  border-lime-400": showResults && filledBlanks[index] === blanks[index],
                    "border rounded-md  border-red-400": showResults && filledBlanks[index] !== blanks[index] && filledBlanks[index] !== "",
                    "cursor-pointer": !showResults
                  }
                )}
                onClick={() => handleBlankClick(index)}
              >
                {filledBlanks[index] !== '' ? filledBlanks[index] : '_______'}
              </span>
            )}
          </span>
        ))}
      </p>
    );
  };

  return (
    <div className="flex flex-col max-h-screen w-2xl mt-24">
      <h2 className="font-extrabold p-4">Preencha as lacunas:</h2>
      <div className="mt-2">
        {renderSentence()}
        <div className="flex flex-wrap gap-2 p-4">
          {availableWords.map((word, index) => (
            <span
              key={index}
              className={cn(
                "border rounded-md p-2 cursor-pointer",
                {
                  "bg-gray-200 text-gray-700": showResults,
                  "hover:bg-zinc-900": !showResults
                }
              )}
              onClick={() => handleWordClick(word)}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
