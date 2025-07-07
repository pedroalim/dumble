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
        <h1 className="text-4xl font-bold mb-4">Pergunta {questionId}</h1>

        <QuestionsFooter state='correct' />
      </div>
    </div>
  )
}
