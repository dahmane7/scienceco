
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import ExerciseCard from '@/components/ExerciseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Exercices = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // Données factices d'exercices
  const exercises = [
    {
      title: "Calcul de la force gravitationnelle",
      description: "Exercice pratique pour calculer la force gravitationnelle entre deux objets.",
      subject: "Physique",
      difficulty: "Moyen" as const,
      estimatedTime: "20 min",
      pointsAvailable: 15
    },
    {
      title: "Identifier les organelles cellulaires",
      description: "Exercice d'identification des différentes parties d'une cellule et de leurs fonctions.",
      subject: "Biologie",
      difficulty: "Facile" as const,
      estimatedTime: "15 min",
      pointsAvailable: 10
    },
    {
      title: "Équilibrer les équations chimiques",
      description: "Série d'équations chimiques à équilibrer pour comprendre la conservation de la masse.",
      subject: "Chimie",
      difficulty: "Moyen" as const,
      estimatedTime: "25 min",
      pointsAvailable: 20
    },
    {
      title: "Résolution d'équations différentielles",
      description: "Exercices de résolution d'équations différentielles du premier et second ordre.",
      subject: "Mathématiques",
      difficulty: "Difficile" as const,
      estimatedTime: "40 min",
      pointsAvailable: 30
    },
    {
      title: "Calcul des distances astronomiques",
      description: "Exercices pratiques pour calculer les distances entre différents corps célestes.",
      subject: "Astronomie",
      difficulty: "Moyen" as const,
      estimatedTime: "30 min",
      pointsAvailable: 20
    },
    {
      title: "Créer un algorithme de tri",
      description: "Exercice de programmation pour implémenter un algorithme de tri efficace.",
      subject: "Informatique",
      difficulty: "Difficile" as const,
      estimatedTime: "45 min",
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
      
      {/* Header avec gradient inspiré de jeton.com */}
      <div className="gradient-bg text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold">Exercices</h1>
          <p className="mt-4 max-w-2xl">Pratiquez et testez vos connaissances avec nos exercices interactifs</p>
        </div>
      </div>
      
      <div className="section-container">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher un exercice..." 
              className="pl-10 border-gray-300 focus:border-scienceco-blue focus:ring-scienceco-blue/20"
            />
          </div>
          
          {/* Filtres avec style inspiré de jeton.com */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={activeFilter === 'Tous' ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter('Tous')}
              className={activeFilter === 'Tous' ? 'bg-scienceco-blue' : ''}
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
      
      {/* Footer avec style inspiré de jeton.com */}
      <footer className="bg-scienceco-darkblue text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Science Co</h3>
              <p className="text-gray-300">Votre plateforme d'apprentissage scientifique en ligne</p>
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
              <p className="text-gray-300">info@scienceco.com</p>
              <p className="text-gray-300">+33 1 23 45 67 89</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-center text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Science Co. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exercices;
