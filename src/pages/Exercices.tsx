
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import ExerciseCard from '@/components/ExerciseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Exercices = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // Données d'exercices sur l'Islam
  const exercises = [
    {
      title: "Mémorisation des sourates courtes",
      description: "Exercices pour aider à mémoriser les sourates courtes du Coran avec système de révision.",
      subject: "Coran",
      difficulty: "Facile" as const,
      estimatedTime: "15 min",
      pointsAvailable: 10
    },
    {
      title: "Règles de tajwid",
      description: "Pratiquez les règles de tajwid pour une récitation correcte du Coran.",
      subject: "Récitation",
      difficulty: "Moyen" as const,
      estimatedTime: "25 min",
      pointsAvailable: 15
    },
    {
      title: "Quiz sur la vie du Prophète Mohammed ﷺ",
      description: "Testez vos connaissances sur les événements importants de la vie du Prophète.",
      subject: "Histoire",
      difficulty: "Moyen" as const,
      estimatedTime: "20 min",
      pointsAvailable: 20
    },
    {
      title: "Vocabulaire arabe religieux",
      description: "Apprenez les termes arabes essentiels utilisés dans les textes et pratiques islamiques.",
      subject: "Langue",
      difficulty: "Facile" as const,
      estimatedTime: "30 min",
      pointsAvailable: 15
    },
    {
      title: "Les grandes figures de l'Islam",
      description: "Exercices sur les compagnons du Prophète et les grandes figures historiques de l'Islam.",
      subject: "Histoire",
      difficulty: "Moyen" as const,
      estimatedTime: "30 min",
      pointsAvailable: 20
    },
    {
      title: "Application des règles du fiqh",
      description: "Étude de cas pratiques pour appliquer les principes de jurisprudence islamique.",
      subject: "Droit",
      difficulty: "Difficile" as const,
      estimatedTime: "40 min",
      pointsAvailable: 25
    }
  ];

  // Filtrer les exercices par difficulté
  const filteredExercises = activeFilter === 'Tous' 
    ? exercises 
    : exercises.filter(exercise => exercise.difficulty === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Header avec nouveau gradient */}
      <div className="bg-gradient-to-r from-[#304352] to-[#517fa4] text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold">Exercices</h1>
          <p className="mt-4 max-w-2xl">Pratiquez et testez vos connaissances sur l'Islam avec nos exercices interactifs</p>
        </div>
      </div>
      
      <div className="section-container">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher un exercice..." 
              className="pl-10 border-gray-300 focus:border-[#304352] focus:ring-[#304352]/20"
            />
          </div>
          
          {/* Filtres */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={activeFilter === 'Tous' ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter('Tous')}
              className={activeFilter === 'Tous' ? 'bg-[#304352]' : ''}
            >
              Tous
            </Button>
            <Button
              variant={activeFilter === 'Facile' ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter('Facile')}
              className={activeFilter === 'Facile' ? 'bg-green-500' : ''}
            >
              Facile
            </Button>
            <Button
              variant={activeFilter === 'Moyen' ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter('Moyen')}
              className={activeFilter === 'Moyen' ? 'bg-yellow-500' : ''}
            >
              Moyen
            </Button>
            <Button
              variant={activeFilter === 'Difficile' ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter('Difficile')}
              className={activeFilter === 'Difficile' ? 'bg-red-500' : ''}
            >
              Difficile
            </Button>
          </div>
        </div>
        
        {/* Liste des exercices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              {...exercise}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#304352] text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nour Al-Ilm</h3>
              <p className="text-gray-300">Votre plateforme d'apprentissage islamique en ligne</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
                <li><a href="/cours" className="text-gray-300 hover:text-white">Cours</a></li>
                <li><a href="/video-cours" className="text-gray-300 hover:text-white">Vidéo Cours</a></li>
                <li><a href="/exercices" className="text-gray-300 hover:text-white">Exercices</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">info@nour-al-ilm.com</p>
              <p className="text-gray-300">+33 1 23 45 67 89</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-serif italic mb-3 font-bold">Savoir & Spiritualité</h3>
              <p className="text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Nour Al-Ilm. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exercices;
