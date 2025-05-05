
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

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
    <Card className="jeton-card-hover border overflow-hidden group">
      {/* Barre de couleur en haut avec le nouveau dégradé orange-rouge */}
      <div className="h-1 w-full bg-gradient-to-r from-scienceco-orange to-scienceco-red"></div>
      
      <CardHeader className="pb-3 pt-5 px-6">
        <div className="flex items-center justify-between mb-2">
          <span className="badge-orange-red">
            {category}
          </span>
          <span className="text-xs font-medium text-scienceco-darkgray flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {duration}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-scienceco-orange transition-colors">{title}</h3>
      </CardHeader>
      
      <CardContent className="pt-2 px-6">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-2 pb-5 px-6">
        <span className={`badge-jeton
          ${level === 'Débutant' ? 'bg-green-100 text-green-800' : 
            level === 'Intermédiaire' ? 'bg-amber-100 text-amber-800' : 
            'bg-red-100 text-red-800'}`}>
          {level}
        </span>
        <Button size="sm" variant="ghost" className="text-scienceco-orange hover:text-scienceco-red hover:bg-scienceco-orange/10 group">
          <Book className="h-4 w-4 mr-1 transition-all group-hover:scale-110" />
          Commencer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
