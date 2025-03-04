import Link from "next/link";
import {
  BarChart,
  BriefcaseIcon,
  CheckCircle,
  GraduationCap,
  LineChart,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HRDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/hr-dashboard" className="text-sm font-medium text-blue-600">
              Dashboard
            </Link>
            <Link href="/job-postings" className="text-sm font-medium hover:text-blue-600">
              Job Postings
            </Link>
            <Link href="/applicants" className="text-sm font-medium hover:text-blue-600">
              Applicants
            </Link>
            <Link href="/interviews" className="text-sm font-medium hover:text-blue-600">
              Interviews
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:text-blue-600">
              Reports
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
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">HR Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah. Here's an overview of your recruitment activities.</p>
        </div>
      </main>
    </div>
  );
}