
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Play, FileText } from 'lucide-react';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Hero Section avec le dégradé orange-rouge */}
      <section className="gradient-orange-red text-white">
        <div className="section-container py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Apprenez les sciences <span className="text-yellow-300">simplement</span>
              </h1>
              <p className="text-lg text-gray-100 max-w-lg">
                Découvrez notre plateforme d'apprentissage qui vous permet d'apprendre à votre rythme avec des cours, des vidéos et des exercices interactifs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-scienceco-red hover:bg-gray-100">
                  <Link to="/cours">Découvrir les cours</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/exercices">Essayer un exercice</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Plateforme d'apprentissage Science Co" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section avec des cartes utilisant le nouveau style orange-rouge */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-8 text-center text-scienceco-red">Notre plateforme d'apprentissage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-scienceco-orange/10 flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-scienceco-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cours</h3>
                <p className="text-gray-600 mb-4">
                  Accédez à des cours détaillés avec des explications claires et des exemples pratiques.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-scienceco-orange hover:text-scienceco-red">
                  <Link to="/cours">Voir les cours</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-scienceco-orange/10 flex items-center justify-center mb-4">
                  <Play className="h-8 w-8 text-scienceco-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vidéo Cours</h3>
                <p className="text-gray-600 mb-4">
                  Regardez des explications visuelles et des démonstrations pour mieux comprendre les concepts.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-scienceco-orange hover:text-scienceco-red">
                  <Link to="/video-cours">Voir les vidéos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-scienceco-orange/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-scienceco-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exercices</h3>
                <p className="text-gray-600 mb-4">
                  Pratiquez avec des exercices interactifs pour tester et renforcer vos connaissances.
                </p>
                <Button asChild variant="ghost" className="mt-auto text-scienceco-orange hover:text-scienceco-red">
                  <Link to="/exercices">Voir les exercices</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-scienceco-red text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-gray-200 text-sm">
              &copy; {new Date().getFullYear()} Science Co. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
