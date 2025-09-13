import { Button } from "@/components/ui/button";
import { BookOpen, Brain, BarChart3, Upload, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-xl shadow-glow">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                AdaptLearn AI
              </h1>
              <p className="text-sm text-muted-foreground">Personalized Learning Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Study Materials
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Docs
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="glass" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};