import { Button } from "@/components/ui/button";
import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-card text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-hero p-2 rounded-xl shadow-glow">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AdaptLearn AI</h3>
                <p className="text-white/70 text-sm">Personalized Learning Platform</p>
              </div>
            </div>
            <p className="text-white/80">
              Revolutionizing education with AI-powered adaptive learning experiences for every student.
            </p>
            <div className="flex gap-3">
              <Button variant="glass" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Platform</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Dashboard</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Upload Documents</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">AI Tutor</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Analytics</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Tutorials</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Community</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Careers</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 AdaptLearn AI. Built for the future of education.
          </p>
        </div>
      </div>
    </footer>
  );
};