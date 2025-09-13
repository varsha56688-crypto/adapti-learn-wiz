import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, User, Lightbulb, Book, Calculator } from "lucide-react";
import aiTutorImage from "@/assets/ai-tutor.jpg";

const chatMessages = [
  {
    type: "user",
    message: "Can you explain quantum entanglement in simple terms?",
    time: "2:34 PM"
  },
  {
    type: "ai",
    message: "Imagine two particles that become 'connected' in such a way that measuring one instantly affects the other, no matter how far apart they are. It's like having two magical coins that always land on opposite sides!",
    time: "2:34 PM"
  },
  {
    type: "user", 
    message: "That's helpful! Can you create a quiz about this?",
    time: "2:35 PM"
  },
  {
    type: "ai",
    message: "Absolutely! I'll generate a personalized quiz with 5 questions about quantum entanglement, ranging from basic concepts to applications. Ready to test your understanding?",
    time: "2:35 PM"
  }
];

export const AITutorSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <img 
              src={aiTutorImage} 
              alt="AI Tutor assistant" 
              className="rounded-2xl shadow-elegant"
            />
            
            {/* Floating subject badges */}
            <div className="absolute -top-6 -left-6 space-y-2 animate-float">
              <Badge className="bg-gradient-info text-white px-3 py-1">
                <Calculator className="h-3 w-3 mr-2" />
                Mathematics
              </Badge>
              <Badge className="bg-gradient-success text-white px-3 py-1">
                <Book className="h-3 w-3 mr-2" />
                Literature
              </Badge>
            </div>
            
            <Card className="absolute -bottom-4 -right-4 p-3 bg-white/95 backdrop-blur-sm shadow-glow animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="bg-gradient-energy p-2 rounded-lg">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-xs">Smart Insights</div>
                  <div className="text-xs text-muted-foreground">Available 24/7</div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Meet Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  AI Study Companion
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get instant explanations, generate quizzes, and receive personalized study recommendations from your intelligent virtual tutor.
              </p>
            </div>
            
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Live Chat Session
                </CardTitle>
                <CardDescription>
                  See how our AI tutor helps students learn complex concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-3 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`p-2 rounded-full ${msg.type === 'user' ? 'bg-gradient-info' : 'bg-gradient-energy'}`}>
                          {msg.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-gradient-info text-white' : 'bg-muted'}`}>
                          <p className="text-sm">{msg.message}</p>
                          <span className={`text-xs ${msg.type === 'user' ? 'text-white/70' : 'text-muted-foreground'} mt-1 block`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-4 p-3 bg-muted rounded-lg">
                  <input 
                    placeholder="Ask me anything about your studies..." 
                    className="flex-1 bg-transparent border-0 outline-none text-sm"
                  />
                  <Button size="sm" variant="energy">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex gap-4">
              <Button variant="hero" size="lg">
                Start Chatting
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Badge component for this section
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium shadow-card ${className}`}>
    {children}
  </div>
);