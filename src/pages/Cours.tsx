
import React from 'react';
import NavBar from '@/components/NavBar';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Cours = () => {
  // Données de cours islamiques
  const courses = [
    {
      title: "Introduction aux fondements de l'Islam",
      description: "Découvrez les cinq piliers de l'Islam et les articles de foi. Ce cours couvre les concepts essentiels pour tout musulman.",
      category: "Fondements",
      level: "Débutant" as const,
      duration: "6 heures"
    },
    {
      title: "Le Coran : lecture et interprétation",
      description: "Apprenez à lire et comprendre le Coran, avec une introduction au tajwid et aux règles de récitation.",
      category: "Coran",
      level: "Intermédiaire" as const,
      duration: "10 heures"
    },
    {
      title: "La vie du Prophète Mohammed ﷺ",
      description: "Explorez la biographie du Prophète Mohammed et ses enseignements à travers les hadiths authentiques.",
      category: "Histoire",
      level: "Débutant" as const,
      duration: "8 heures"
    },
    {
      title: "Fiqh : jurisprudence islamique",
      description: "Étude des règles pratiques concernant les actes d'adoration, les transactions et les relations sociales.",
      category: "Droit",
      level: "Avancé" as const,
      duration: "12 heures"
    },
    {
      title: "Langue arabe pour la compréhension religieuse",
      description: "Introduction à la langue arabe nécessaire pour la compréhension des textes religieux islamiques.",
      category: "Langue",
      level: "Débutant" as const,
      duration: "15 heures"
    },
    {
      title: "La spiritualité en Islam",
      description: "Découverte de la dimension spirituelle de l'Islam, centrée sur la purification du cœur et le développement de la foi.",
      category: "Spiritualité",
      level: "Intermédiaire" as const,
      duration: "8 heures"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Header avec nouveau gradient */}
      <div className="bg-gradient-to-r from-[#304352] to-[#517fa4] text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold">Cours</h1>
          <p className="mt-4 max-w-2xl">Découvrez nos cours pour approfondir votre connaissance de l'Islam</p>
        </div>
      </div>
      
      <div className="section-container">
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
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Tous</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Fondements</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Coran</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Histoire</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Droit</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Langue</Button>
          <Button variant="outline" size="sm" className="hover:bg-[#304352]/10 hover:text-[#304352]">Spiritualité</Button>
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

export default Cours;
