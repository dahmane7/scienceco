
import React from 'react';
import NavBar from '@/components/NavBar';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Cours = () => {
  // Données factices de cours
  const courses = [
    {
      title: "Introduction à la physique quantique",
      description: "Découvrez les fondements de la physique quantique et ses applications dans le monde moderne. Ce cours couvre les concepts de base et les principes fondamentaux.",
      category: "Physique",
      level: "Intermédiaire" as const,
      duration: "8 heures"
    },
    {
      title: "La biologie cellulaire",
      description: "Explorer la structure et le fonctionnement des cellules, les unités fondamentales de tous les organismes vivants.",
      category: "Biologie",
      level: "Débutant" as const,
      duration: "6 heures"
    },
    {
      title: "Chimie organique avancée",
      description: "Approfondissez vos connaissances en chimie organique avec ce cours qui couvre les réactions complexes et la synthèse moléculaire.",
      category: "Chimie",
      level: "Avancé" as const,
      duration: "12 heures"
    },
    {
      title: "Les mathématiques du quotidien",
      description: "Comment les mathématiques s'appliquent à notre vie de tous les jours, avec des exemples pratiques et des exercices concrets.",
      category: "Mathématiques",
      level: "Débutant" as const,
      duration: "4 heures"
    },
    {
      title: "Astronomie et cosmologie",
      description: "Voyage à travers l'univers pour comprendre les planètes, les étoiles, les galaxies et les théories sur l'origine et l'évolution de l'univers.",
      category: "Astronomie",
      level: "Intermédiaire" as const,
      duration: "10 heures"
    },
    {
      title: "Introduction à l'intelligence artificielle",
      description: "Comprendre les principes fondamentaux de l'intelligence artificielle, du machine learning et leurs applications actuelles.",
      category: "Informatique",
      level: "Intermédiaire" as const,
      duration: "8 heures"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <div className="section-container">
        <h1 className="section-title">Cours</h1>
        
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher un cours..." 
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm">Tous</Button>
          <Button variant="outline" size="sm">Physique</Button>
          <Button variant="outline" size="sm">Biologie</Button>
          <Button variant="outline" size="sm">Chimie</Button>
          <Button variant="outline" size="sm">Mathématiques</Button>
          <Button variant="outline" size="sm">Informatique</Button>
        </div>
        
        {/* Liste des cours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
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

export default Cours;
