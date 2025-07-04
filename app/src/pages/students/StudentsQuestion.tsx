import { useParams } from "react-router";

export default function StudentsQuestion() {
  const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Pergunta {classCode}</h1>
      </div>
    </div>
  )
}
