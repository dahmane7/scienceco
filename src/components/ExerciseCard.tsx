
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { file-text } from 'lucide-react';

export interface ExerciseProps {
  title: string;
  description: string;
  subject: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  estimatedTime: string;
  pointsAvailable: number;
}

const ExerciseCard: React.FC<ExerciseProps> = ({
  title,
  description,
  subject,
  difficulty,
  estimatedTime,
  pointsAvailable,
}) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2 pt-4 px-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-scienceco-gray text-scienceco-darkgray">
            {subject}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full 
            ${difficulty === 'Facile' ? 'bg-green-100 text-green-800' : 
              difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'}`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-scienceco-darkblue">{title}</h3>
      </CardHeader>
      <CardContent className="py-1 px-6">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4 px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">⏱️ {estimatedTime}</span>
            <span className="text-xs text-gray-600">🏅 {pointsAvailable} points</span>
          </div>
          <Button size="sm" className="bg-scienceco-blue hover:bg-scienceco-darkblue">
            <file-text className="h-4 w-4 mr-1" />
            Commencer
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
