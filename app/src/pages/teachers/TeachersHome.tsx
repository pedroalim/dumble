import CurrentClass from "@/components/current-class";
import TeachersNavigation from "@/components/teachers-navigation";
import QuestionsTrail from '@/components/questions-trail';
import { useParams } from "react-router";
import { Question } from "@/components/item-question-trail";

export default function TeachersHome() {
  const { classCode } = useParams<{ classCode: string }>();

  const questions: Question[] = [
    { id: 1, status: 'completed', position: 1, side: 'none', type: 'multiple' },
    { id: 2, status: 'completed', position: 2, side: 'left', type: 'pairs' },
    { id: 3, status: 'completed', position: 3, side: 'left', type: 'fill' },
    { id: 4, status: 'new', position: 2, side: 'left', type: 'none'}
  ];

  return (
    <div>
      <CurrentClass acronym={`ED`} code={`${classCode}`} title={`Estrutura de Dados`} userType="teacher"/>
      <div className="min-h-screen flex items-center justify-center mt-24 mb-24"> 
        <QuestionsTrail questions={questions}/>
      </div>
      
      <TeachersNavigation activePage="home" />
    </div>
  )
}
