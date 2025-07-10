
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

interface QuestionsFooterProps {
  state: 'none' | 'correct' | 'wrong';
  onContinue: () => void;
}

export default function QuestionsFooter({ state, onContinue }: QuestionsFooterProps) {

  const handleContinue = () => {
    onContinue();
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 border-t bg-background z-20">
        <div className="w-full max-w-2xl mx-auto p-4 flex flex-col items-center sm:justify-between gap-4 sm:flex-row">
            {state === 'correct' ? (
                <div className="w-full sm:w-auto flex items-center gap-2">
                    <div className="rounded-full border p-1 border-lime-400 text-lime-400">
                        <Check />
                    </div>
                    <span className="text-lime-400">Correto!</span>
                </div>
            ) : state === 'wrong' ? (
                 <div className="flex items-center gap-2">
                    <div className="rounded-full border p-1 border-red-400 text-red-400">
                        <X />
                    </div>
                    <span className="text-red-400">Errado!</span>
                </div>
            ) : 
                <div className="w-0 h-0"></div>
            }
            <div className="w-full sm:w-auto">
                <Button onClick={handleContinue} className={`w-full ${state === 'correct' ? 'bg-lime-400 hover:bg-lime-300' : state === 'wrong' ? 'bg-red-400 hover:bg-red-300' : ''}`}>
                    CONTINUAR
                </Button>
            </div>
        </div>
    </div>
  );
}

