import CurrentClass from "@/components/current-class";
import TeachersNavigation from "@/components/teachers-navigation";
import { useParams } from "react-router";

export default function TeachersHome() {
  const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`ED-1234`} title={`Estrutura de Dados`} userType="teacher"/>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Home Teachers - {classCode}</h1>
      </div>
      
      <TeachersNavigation activePage="home" />
    </div>
  )
}
