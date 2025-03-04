import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, GraduationCap, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AssessmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/candidate-dashboard" className="text-sm font-medium hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/assessments" className="text-sm font-medium text-blue-600">
              Assessments
            </Link>
            <Link href="/career-roadmap" className="text-sm font-medium hover:text-blue-600">
              Career Roadmap
            </Link>
            <Link href="/resume-builder" className="text-sm font-medium hover:text-blue-600">
              Resume Builder
            </Link>
            <Link href="/job-insights" className="text-sm font-medium hover:text-blue-600">
              Job Insights
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">AI-Powered Assessments</h1>
            <p className="text-muted-foreground">Evaluate your skills and get personalized feedback</p>
          </div>

          <Tabs defaultValue="available">
            <TabsList className="grid w-full grid-cols-3 bg-blue-100 dark:bg-blue-900/30">
              <TabsTrigger value="available" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Available Assessments
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Completed
              </TabsTrigger>
              <TabsTrigger value="recommended" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Recommended
              </TabsTrigger>
            </TabsList>
            <TabsContent value="available" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-blue-700 dark:text-blue-400">
                          Technical Skills Assessment
                        </CardTitle>
                        <CardDescription>Frontend Development</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400">
                        <Clock className="h-3 w-3" />
                        <span>45 min</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Evaluate your knowledge of HTML, CSS, JavaScript, and modern frameworks through adaptive questions and coding challenges.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}