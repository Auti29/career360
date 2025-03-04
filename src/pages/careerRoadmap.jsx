import Link from "next/link";
import { CheckCircle, GraduationCap, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CareerRoadmapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/candidate-dashboard" className="text-sm font-medium hover:text-blue-600">Dashboard</Link>
            <Link href="/assessments" className="text-sm font-medium hover:text-blue-600">Assessments</Link>
            <Link href="/career-roadmap" className="text-sm font-medium text-blue-600">Career Roadmap</Link>
            <Link href="/resume-builder" className="text-sm font-medium hover:text-blue-600">Resume Builder</Link>
            <Link href="/job-insights" className="text-sm font-medium hover:text-blue-600">Job Insights</Link>
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
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Career Roadmap</h1>
            <p className="text-muted-foreground">Your personalized career development plan</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="mb-6 border-blue-100 dark:border-blue-900/50 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400">
                    Your Career Path: Frontend Developer → Senior Frontend Developer → Lead Engineer
                  </CardTitle>
                  <CardDescription>Based on your skills, interests, and industry trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-px bg-blue-200 dark:bg-blue-800"></div>
                    <div className="space-y-8">
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">Frontend Developer</h3>
                        <p className="text-sm text-muted-foreground">Current Position</p>
                        <div className="mt-2 text-sm">
                          <p>
                            You've mastered the fundamentals of frontend development and are now working on building more complex applications.
                          </p>
                        </div>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 bg-background text-blue-600">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">Senior Frontend Developer</h3>
                        <p className="text-sm text-muted-foreground">1-2 Years</p>
                        <div className="mt-2 text-sm">
                          <p>Focus on advanced JavaScript frameworks, architecture patterns, and mentoring junior developers.</p>
                        </div>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 bg-background text-slate-500">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">Lead Engineer</h3>
                        <p className="text-sm text-muted-foreground">3-5 Years</p>
                        <div className="mt-2 text-sm">
                          <p>Develop technical leadership skills, system design expertise, and team management abilities.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
