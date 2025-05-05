
import React from 'react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const VideoCours = () => {
  // Données factices de vidéo cours
  const videos = [
    {
      title: "La relativité expliquée simplement",
      description: "Une explication visuelle de la théorie de la relativité d'Einstein et ses implications dans notre compréhension de l'univers.",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      duration: "45:22",
      instructor: "Dr. Marie Lambert"
    },
    {
      title: "L'ADN: Le code de la vie",
      description: "Découvrez comment fonctionne l'ADN, la molécule qui contient toutes les informations génétiques.",
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
      duration: "32:15",
      instructor: "Prof. Thomas Bernard"
    },
    {
      title: "Les réactions chimiques en action",
      description: "Visualisez les réactions chimiques les plus spectaculaires et comprenez les processus qui les sous-tendent.",
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
      duration: "28:40",
      instructor: "Dr. Sophie Dubois"
    },
    {
      title: "Le calcul intégral visualisé",
      description: "Une approche visuelle du calcul intégral qui vous aidera à comprendre intuitivement ce concept mathématique.",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
      duration: "51:08",
      instructor: "Prof. Michel Lavigne"
    },
    {
      title: "Voyage au cœur des exoplanètes",
      description: "Exploration visuelle des planètes situées en dehors de notre système solaire et leur potentiel pour abriter la vie.",
      thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
      duration: "38:54",
      instructor: "Dr. Claire Fontaine"
    },
    {
      title: "Les réseaux de neurones expliqués",
      description: "Comment fonctionnent les réseaux de neurones artificiels, la technologie derrière l'intelligence artificielle moderne.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      duration: "42:17",
      instructor: "Prof. Lucas Martin"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <div className="section-container">
        <h1 className="section-title">Vidéo Cours</h1>
        
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher une vidéo..." 
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm">Toutes</Button>
          <Button variant="outline" size="sm">Physique</Button>
          <Button variant="outline" size="sm">Biologie</Button>
          <Button variant="outline" size="sm">Chimie</Button>
          <Button variant="outline" size="sm">Mathématiques</Button>
          <Button variant="outline" size="sm">Informatique</Button>
        </div>
        
        {/* Liste des vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              {...video}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t pt-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Science Co. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoCours;
