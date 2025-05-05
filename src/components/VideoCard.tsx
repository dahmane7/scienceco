
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export interface VideoProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  instructor: string;
}

const VideoCard: React.FC<VideoProps> = ({
  title,
  description,
  thumbnail,
  duration,
  instructor,
}) => {
  return (
    <Card className="jeton-card-hover overflow-hidden group">
      {/* Barre de couleur en haut avec le nouveau dégradé orange-rouge */}
      <div className="h-1 w-full bg-gradient-to-r from-scienceco-orange to-scienceco-red"></div>
      
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full w-12 h-12 bg-white/80 hover:bg-white shadow-md transform transition-transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          >
            <Play className="h-6 w-6 text-scienceco-orange" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
          {duration}
        </div>
      </div>
      
      <CardHeader className="pb-2 pt-4 px-5">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-scienceco-orange transition-colors">{title}</h3>
      </CardHeader>
      
      <CardContent className="py-1 px-5">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 px-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-1 text-scienceco-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Par: {instructor}
          </span>
          <Button size="sm" variant="ghost" className="text-scienceco-orange hover:text-scienceco-red hover:bg-scienceco-orange/10 group">
            Regarder
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
