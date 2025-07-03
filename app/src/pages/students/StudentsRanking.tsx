import CurrentClass from "@/components/current-class";
import StudentsNavigation from "@/components/students-navigation";
import { useParams } from "react-router";

export default function StudentsRanking() {
    const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`ED-1234`} title={`Estrutura de Dados`} userType="student"/>
      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Ranking dos Estudantes - {classCode}</h1>
      </div>

      <StudentsNavigation activePage="ranking" />
    </div>
  )
}
