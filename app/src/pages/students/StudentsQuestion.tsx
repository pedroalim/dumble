import QuestionMultipleChoice from "@/components/question-multiple-choice";
import QuestionsFooter from "@/components/questions-footer";
import QuestionsProgressBar from "@/components/questions-progress-bar";
import { useParams } from "react-router";

export default function StudentsQuestion() {
  const { classCode } = useParams<{ classCode: string }>();
  const { questionId } = useParams<{ questionId: string }>();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center pb-24">
        <QuestionsProgressBar classCode={classCode} />
        
        <QuestionMultipleChoice />

        <QuestionsFooter state='correct' />
      </div>
    </div>
  )
}
