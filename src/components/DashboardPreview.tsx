import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, Target, TrendingUp, CheckCircle } from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

export const DashboardPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Your Learning
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Command Center
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Track progress, analyze performance, and optimize your learning journey with beautiful, actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-success p-2 rounded-lg">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-lg">Score</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">92%</div>
                  <div className="text-sm text-muted-foreground">Average</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-info p-2 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-lg">Completed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-info">24</div>
                  <div className="text-sm text-muted-foreground">Modules</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Current Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Machine Learning Fundamentals</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Data Structures</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Algorithm Analysis</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <div className="flex gap-4">
              <Button variant="info" size="lg">
                View Full Dashboard
              </Button>
              <Button variant="outline" size="lg">
                Export Report
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={analyticsImage} 
              alt="Learning analytics dashboard" 
              className="rounded-2xl shadow-elegant"
            />
            
            {/* Floating achievement badges */}
            <div className="absolute -top-4 -right-4 animate-pulse-glow">
              <Badge className="bg-gradient-energy text-white px-4 py-2 text-sm font-semibold shadow-glow">
                <CheckCircle className="h-4 w-4 mr-2" />
                Achievement Unlocked!
              </Badge>
            </div>
            
            <Card className="absolute -bottom-6 -left-6 p-4 bg-white/95 backdrop-blur-sm shadow-glow animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-card p-2 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Study Streak</div>
                  <div className="text-xs text-muted-foreground">7 days strong!</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};