
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { book } from 'lucide-react';

export interface CourseProps {
  title: string;
  description: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
}

const CourseCard: React.FC<CourseProps> = ({
  title,
  description,
  category,
  level,
  duration,
}) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="pb-3 pt-5 px-6 bg-gradient-to-r from-scienceco-blue/10 to-transparent">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-scienceco-gray text-scienceco-darkgray">
            {category}
          </span>
          <span className="text-xs font-medium text-scienceco-darkgray">{duration}</span>
        </div>
        <h3 className="text-lg font-semibold text-scienceco-darkblue">{title}</h3>
      </CardHeader>
      <CardContent className="pt-4 px-6">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 pb-5 px-6">
        <span className={`text-xs font-medium px-2 py-1 rounded-full 
          ${level === 'Débutant' ? 'bg-green-100 text-green-800' : 
            level === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          {level}
        </span>
        <Button size="sm" variant="ghost" className="text-scienceco-blue hover:text-scienceco-darkblue group">
          <book className="h-4 w-4 mr-1 group-hover:animate-fade-in" />
          Commencer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
