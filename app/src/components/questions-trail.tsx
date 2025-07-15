import ItemQuestionTrail, { type Question } from "./item-question-trail";

interface QuestionsTrailProps {
  questions: Question[];
}

export default function QuestionsTrail({ questions }: QuestionsTrailProps){
  return (
    <div className="flex flex-col items-center min-h-screen bg-background py-12">
      <div className="flex flex-col items-center space-y-8">
        {questions.map((question) => (
          <ItemQuestionTrail key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
