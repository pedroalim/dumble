import { useParams } from 'react-router-dom';
import StudentsNavigation from "@/components/students-navigation";
import CurrentClass from '@/components/current-class';

export default function StudentsHome() {
  const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`ED-1234`} title={`Estrutura de Dados`} userType="student"/>
      <div className="min-h-screen flex items-center justify-center pb-24"> 
        <h1 className="text-4xl font-bold mb-4">Home Students {classCode}</h1>
      </div>

      <StudentsNavigation activePage="home" />
    </div>
  )
}
