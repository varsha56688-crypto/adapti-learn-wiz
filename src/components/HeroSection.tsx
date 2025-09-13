import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Brain, BarChart3, BookOpen, Star, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-light">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">AI-Powered Learning Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Learning with
                <span className="block bg-gradient-energy bg-clip-text text-transparent">
                  Adaptive AI
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Upload documents, get personalized quizzes, track progress, and receive AI-driven study recommendations. Your virtual tutor for every subject.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="energy" size="lg" className="text-lg">
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg">
                <Upload className="h-5 w-5" />
                Upload Documents
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-white/80 text-sm">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={heroImage} 
              alt="Students learning with AI technology" 
              className="rounded-2xl shadow-elegant"
            />
            
            {/* Floating feature cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-white/95 backdrop-blur-sm shadow-glow animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-info p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Analysis</div>
                  <div className="text-xs text-muted-foreground">Real-time processing</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-white/95 backdrop-blur-sm shadow-glow animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-success p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Progress Tracking</div>
                  <div className="text-xs text-muted-foreground">Visual analytics</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};