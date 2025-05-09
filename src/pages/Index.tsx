
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, FileText } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#304352] to-[#517fa4] text-white">
        <div className="section-container py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Découvrez l'Islam <span className="text-[#eacda3]">avec sagesse</span>
              </h1>
              <p className="text-lg text-gray-100 max-w-lg">
                Explorez notre plateforme éducative dédiée à l'apprentissage de l'Islam, ses principes, son histoire et sa pratique à travers des cours, des vidéos et des exercices interactifs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-[#304352] hover:bg-gray-100">
                  <Link to="/cours">Découvrir les cours</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-orange-500 hover:bg-white/10 font-bold">
                  <Link to="/exercices">Essayer un exercice</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                alt="Mosquée au coucher du soleil" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#304352]">Notre plateforme d'apprentissage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#304352]/10 flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-[#304352]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cours</h3>
                <p className="text-gray-600 mb-4">
                  Accédez à des cours détaillés sur le Coran, la Sunnah, la théologie islamique et les pratiques religieuses.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-[#304352] hover:text-[#517fa4]">
                  <Link to="/cours">Voir les cours</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#304352]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#304352]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vidéo Cours</h3>
                <p className="text-gray-600 mb-4">
                  Regardez des explications visuelles sur l'histoire islamique, les rituels et les enseignements des savants.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-[#304352] hover:text-[#517fa4]">
                  <Link to="/video-cours">Voir les vidéos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#304352]/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-[#304352]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exercices</h3>
                <p className="text-gray-600 mb-4">
                  Testez vos connaissances sur l'Islam avec des exercices interactifs sur la langue arabe, les récits et les pratiques.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-[#304352] hover:text-[#517fa4]">
                  <Link to="/exercices">Voir les exercices</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#304352] text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/20 pt-8">
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

export default Index;
