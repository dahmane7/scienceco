
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { play } from 'lucide-react';

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
    <Card className="card-hover overflow-hidden">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full w-12 h-12 bg-white/80 hover:bg-white shadow-md transform transition-transform hover:scale-110"
          >
            <play className="h-6 w-6 text-scienceco-blue" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
          {duration}
        </div>
      </div>
      <CardHeader className="pb-2 pt-4 px-5">
        <h3 className="text-lg font-semibold text-scienceco-darkblue">{title}</h3>
      </CardHeader>
      <CardContent className="py-1 px-5">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4 px-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-gray-600">Par: {instructor}</span>
          <Button size="sm" variant="ghost" className="text-scienceco-blue hover:text-scienceco-darkblue">
            Regarder
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
