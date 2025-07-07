import ItemQuestionTrail, { type Question } from "./item-question-trail";

const questions: Question[] = [
  { id: 1, status: 'completed', position: 1, side: 'none', type: 'multiple' },
  { id: 2, status: 'completed', position: 2, side: 'left', type: 'pairs' },
  { id: 3, status: 'unlocked', position: 3, side: 'left', type: 'fill' },
  { id: 4, status: 'locked', position: 2, side: 'left', type: 'multiple' },
  { id: 5, status: 'locked', position: 1, side: 'none', type: 'multiple' },
  { id: 6, status: 'locked', position: 2, side: 'right', type: 'multiple' },
  { id: 7, status: 'locked', position: 3, side: 'right', type: 'multiple' },
  { id: 8, status: 'locked', position: 2, side: 'right', type: 'multiple' },
  { id: 9, status: 'locked', position: 1, side: 'none', type: 'multiple' },
];

export default function StudentsNavigation(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background py-12">
      <div className="flex flex-col items-center space-y-8">
        {questions.map((question) => (
          <ItemQuestionTrail key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
