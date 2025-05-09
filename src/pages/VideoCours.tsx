
import React from 'react';
import NavBar from '@/components/NavBar';
import VideoCard from '@/components/VideoCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const VideoCours = () => {
  // Données de vidéos sur l'Islam
  const videos = [
    {
      title: "L'histoire de la révélation du Coran",
      description: "Découvrez comment le Coran a été révélé au Prophète Mohammed ﷺ et comment il a été préservé à travers les siècles.",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80",
      duration: "42:15",
      instructor: "Imam Ahmed Karimi"
    },
    {
      title: "Comment faire la prière (Salat)",
      description: "Guide pas à pas pour apprendre à faire correctement la prière quotidienne, avec démonstration des positions et récitations.",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
      duration: "35:48",
      instructor: "Dr. Fatima Zahra"
    },
    {
      title: "Les règles du jeûne pendant le Ramadan",
      description: "Explications détaillées des règles du jeûne, ses bienfaits spirituels et conseils pratiques pour le mois sacré.",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80",
      duration: "28:40",
      instructor: "Sheikh Abdullah Hassan"
    },
    {
      title: "Introduction à la science du Hadith",
      description: "Comprendre comment les paroles et actes du Prophète ont été collectés, vérifiés et classifiés par les savants.",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
      duration: "50:22",
      instructor: "Prof. Mohammed Saïd"
    },
    {
      title: "L'art islamique à travers les siècles",
      description: "Exploration visuelle des chefs-d'œuvre de l'art islamique, de l'architecture des mosquées à la calligraphie.",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80",
      duration: "38:54",
      instructor: "Dr. Leila Benali"
    },
    {
      title: "Éthique et morale en Islam",
      description: "Les principes éthiques fondamentaux dans l'Islam et leur application dans la vie quotidienne moderne.",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
      duration: "45:17",
      instructor: "Imam Youssef Abou"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Header avec nouveau gradient */}
      <div className="bg-gradient-to-r from-[#304352] to-[#517fa4] text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold">Vidéo Cours</h1>
          <p className="mt-4 max-w-2xl">Apprenez visuellement avec nos vidéos éducatives sur l'Islam</p>
        </div>
      </div>
      
      <div className="section-container">
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
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Toutes</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Coran</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Prière</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Histoire</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Hadith</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Art</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Éthique</Button>
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
      <footer className="bg-[#304352] text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t pt-8">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-serif italic mb-3 font-bold">Savoir & Spiritualité</h3>
              <p className="text-center text-gray-200 text-sm">
                &copy; {new Date().getFullYear()} Nour Al-Ilm. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoCours;
