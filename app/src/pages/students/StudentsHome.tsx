//import { useParams } from 'react-router-dom';
import StudentsNavigation from "@/components/students-navigation";
import CurrentClass from '@/components/current-class';
import QuestionsTrail from '@/components/questions-trail';

export default function StudentsHome() {
  //const { classCode } = useParams<{ classCode: string }>();

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`ED-1234`} title={`Estrutura de Dados`} userType="student"/>
      <div className="min-h-screen flex items-center justify-center mt-24 pb-24"> 
        <QuestionsTrail />
      </div>

      <StudentsNavigation activePage="home" />
    </div>
  )
}
