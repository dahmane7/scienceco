
import React from 'react';
import NavBar from '@/components/NavBar';
import ExerciseCard from '@/components/ExerciseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Exercices = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <div className="section-container">
        <h1 className="section-title">Exercices</h1>
        
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher un exercice..." 
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm">Tous</Button>
          <Button variant="outline" size="sm">Facile</Button>
          <Button variant="outline" size="sm">Moyen</Button>
          <Button variant="outline" size="sm">Difficile</Button>
        </div>
        
        {/* Liste des exercices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              {...exercise}
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

export default Exercices;
