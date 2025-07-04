import React from 'react';
import { Link, useParams } from 'react-router';

export interface Question {
  id: number;
  status: 'completed' | 'unlocked' | 'locked';
  position: 1 | 2 | 3;
  side: 'none' | 'left' | 'right';
}

interface ItemQuestionTrailProps {
  question: Question;
}

export default function ItemQuestionTrail({ question }: ItemQuestionTrailProps) {
  const { classCode } = useParams<{ classCode: string }>();

  function getMarginClass() {
    if (question.position === 2 && question.side === 'right') return 'ml-22';
    if (question.position === 3 && question.side === 'right') return 'ml-32';
    if (question.position === 2 && question.side === 'left') return 'mr-22';
    if (question.position === 3 && question.side === 'left') return 'mr-32';
    return '';
  };

  function getBackgroudColor() {
    if (question.status === 'completed') return 'bg-green-500';
    if (question.status === 'unlocked') return 'bg-gray-300  border-4 border-dashed dark:bg-gray-700';
    return 'bg-gray-300 dark:bg-gray-700';
  };

  return (
    <Link to={`/students/${classCode}/questions/${question.id}`}>
      <div className={`${getBackgroudColor()} w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg cursor-pointer transition-transform hover:scale-110 ${getMarginClass()}`}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center">
          {question.id}
        </div>
      </div>
    </Link>
  );
};
