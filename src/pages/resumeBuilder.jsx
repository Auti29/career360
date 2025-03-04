import Link from "next/link";
import { Download, FileText, GraduationCap, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumeBuilderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/candidate-dashboard" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link href="/assessments" className="text-sm font-medium hover:text-primary">Assessments</Link>
            <Link href="/career-roadmap" className="text-sm font-medium hover:text-primary">Career Roadmap</Link>
            <Link href="/resume-builder" className="text-sm font-medium text-primary">Resume Builder</Link>
            <Link href="/job-insights" className="text-sm font-medium hover:text-primary">Job Insights</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Resume Builder</h1>
            <p className="text-muted-foreground">Create an ATS-optimized resume with AI assistance</p>
          </div>
        </div>
      </main>
    </div>
  );
}
