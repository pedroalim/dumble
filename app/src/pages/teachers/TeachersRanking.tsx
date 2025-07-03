import CurrentClass from "@/components/current-class";
import TeachersNavigation from "@/components/teachers-navigation";
import { useParams } from "react-router";

export default function TeachersRanking() {
  const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`ED-1234`} title={`Estrutura de Dados`} userType="teacher"/>
      <div className="min-h-screen flex items-center justify-center pb-24">
        <h1 className="text-4xl font-bold mb-4">Ranking do Professor - {classCode}</h1>
      </div>

      <TeachersNavigation activePage="ranking" />
    </div>
  )
}
