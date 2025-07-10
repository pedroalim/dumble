
import { useState } from "react";
import QuestionMatchingPairs from "@/components/question-matching-pairs";
import QuestionsFooter from "@/components/questions-footer";
import QuestionsProgressBar from "@/components/questions-progress-bar";
import { useParams } from "react-router";
import QuestionMultipleChoice from "@/components/question-multiple-choice";

export default function StudentsQuestion() {
  const { classCode, questionId } = useParams<{ classCode: string; questionId: string }>();
  const [showResults, setShowResults] = useState(false);
  const [footerState, setFooterState] = useState<'none' | 'correct' | 'wrong'>('none');

  const handleContinue = () => {
    setShowResults(true);
  };

  const handleValidationComplete = (status: 'correct' | 'wrong') => {
    setFooterState(status);
  };

  return (
    <div>
      <div className="flex justify-center pb-24">
        <QuestionsProgressBar classCode={classCode} />
        
        {questionId === '1' ? (
          <QuestionMatchingPairs 
            showResults={showResults} 
            onValidationComplete={handleValidationComplete} 
          />
        ) : (
          <QuestionMultipleChoice 
            showResults={showResults} 
            onValidationComplete={handleValidationComplete}
          />
        )}

        <QuestionsFooter state={footerState} onContinue={handleContinue} />
      </div>
    </div>
  )
}

