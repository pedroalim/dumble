import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from '@/lib/utils';

interface QuestionMultipleChoiceProps {
  showResults: boolean;
  onValidationComplete: (status: 'correct' | 'wrong') => void;
}

export default function QuestionMultipleChoice({ showResults, onValidationComplete }: QuestionMultipleChoiceProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const correctAnswer = "option-B"; 

  useEffect(() => {
    if (showResults && selectedValue) {
      const isCorrect = selectedValue === correctAnswer;
      onValidationComplete(isCorrect ? 'correct' : 'wrong');
    }
  }, [showResults, selectedValue, onValidationComplete, correctAnswer]);

  const handleValueChange = (value: string) => {
    if (showResults) return;
    setSelectedValue(value);
  };

  const getOptionClass = (optionValue: string) => {
    const isSelected = selectedValue === optionValue;
    const isCorrectOption = optionValue === correctAnswer;

    return cn(
      `border rounded-md p-4 w-full cursor-pointer flex items-center gap-4`,
      {
        'hover:bg-zinc-900': !showResults, 
        'border-violet-400': isSelected && !showResults, 
        'border-lime-400': showResults && isCorrectOption && isSelected, 
        'border-red-400': showResults && isSelected && !isCorrectOption, 
      }
    );
  };

  const getIndicatorClass = (optionValue: string) => {
    const isSelected = selectedValue === optionValue;
    const isCorrectOption = optionValue === correctAnswer;

    return cn(
      `border rounded-full w-10 h-10 flex items-center justify-center font-bold`,
      {
        'border-violet-400': isSelected && !showResults,
        'border-lime-400': showResults && isCorrectOption && isSelected,
        'border-red-400': showResults && isSelected && !isCorrectOption,
      }
    );
  };

  return (
    <div className="flex flex-col max-h-screen w-2xl mt-24">
        <h2 className="font-extrabold p-4">Escolha a alternativa correta:</h2>
        <div className="mt-2">
          <p className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries?</p>
          <div className="flex flex-col items-center w-full p-4">
            <RadioGroup
              value={selectedValue}
              onValueChange={handleValueChange}
              className="w-full flex flex-col gap-3"
            >
              <Label
                htmlFor="option-A"
                className={getOptionClass("option-A")}
              >
                <RadioGroupItem
                  value="option-A"
                  id="option-A"
                  className="hidden"
                />
                <div className={getIndicatorClass("option-A")}>
                  A
                </div>
                <span className="flex-1 text-center font-bold">Option One</span>
                <div className="w-10 h-10 flex items-center justify-center font-bold" />
              </Label>

              <Label
                htmlFor="option-B"
                className={getOptionClass("option-B")}
              >
                <RadioGroupItem
                  value="option-B"
                  id="option-B"
                  className="hidden"
                />
                <div className={getIndicatorClass("option-B")}>
                  B
                </div>
                <span className="flex-1 text-center font-bold">Option Two</span>
                <div className="w-10 h-10 flex items-center justify-center font-bold" />
              </Label>

              <Label
                htmlFor="option-C"
                className={getOptionClass("option-C")}
              >
                <RadioGroupItem
                  value="option-C"
                  id="option-C"
                  className="hidden"
                />
                <div className={getIndicatorClass("option-C")}>
                  C
                </div>
                <span className="flex-1 text-center font-bold">Option Three</span>
                <div className="w-10 h-10 flex items-center justify-center font-bold" />
              </Label>

              <Label
                htmlFor="option-D"
                className={getOptionClass("option-D")}
              >
                <RadioGroupItem
                  value="option-D"
                  id="option-D"
                  className="hidden"
                />
                <div className={getIndicatorClass("option-D")}>
                  D
                </div>
                <span className="flex-1 text-center font-bold">Option Four</span>
                <div className="w-10 h-10 flex items-center justify-center font-bold" />
              </Label>
            </RadioGroup>
          </div>    
        </div>
    </div>
  )
}