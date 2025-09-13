import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Brain, BarChart3, BookOpen, MessageSquare, Target, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Document Processing",
    description: "Upload PDFs, texts, and images. Our AI instantly extracts key concepts and creates structured learning materials.",
    color: "bg-gradient-info",
    delay: "0s"
  },
  {
    icon: Brain,
    title: "AI Quiz Generation",
    description: "Automatically generate personalized quizzes and assessments based on your uploaded content and learning progress.",
    color: "bg-gradient-card",
    delay: "0.2s"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Visualize your learning journey with detailed analytics, performance metrics, and improvement suggestions.",
    color: "bg-gradient-success",
    delay: "0.4s"
  },
  {
    icon: MessageSquare,
    title: "AI Study Companion",
    description: "Chat with your personal AI tutor for explanations, clarifications, and study guidance anytime.",
    color: "bg-gradient-energy",
    delay: "0.6s"
  },
  {
    icon: Target,
    title: "Adaptive Learning Paths",
    description: "Personalized study recommendations that adapt to your learning style and pace for optimal results.",
    color: "bg-gradient-info",
    delay: "0.8s"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Track strengths and weaknesses, identify knowledge gaps, and optimize your study strategy.",
    color: "bg-gradient-success",
    delay: "1s"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Smarter Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of education with our comprehensive AI-powered learning platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 shadow-card"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="space-y-4">
                <div className={`${feature.color} p-3 rounded-xl w-fit shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button variant="hero" size="lg" className="text-lg">
            <Zap className="h-5 w-5" />
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};