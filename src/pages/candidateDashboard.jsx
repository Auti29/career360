import Link from "next/link";
import { BookOpen, GraduationCap, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CandidateDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/candidate-dashboard" className="text-sm font-medium text-blue-600">
              Dashboard
            </Link>
            <Link href="/assessments" className="text-sm font-medium hover:text-blue-600">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-2 lg:col-span-3">
              <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Welcome back, Alex</h1>
              <p className="text-muted-foreground">Here's an overview of your career progress</p>
            </div>
            <Card className="border-blue-100 dark:border-blue-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Career Progress</CardTitle>
                <CardDescription>Your overall career readiness score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-600">78%</span>
                    </div>
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle
                        className="stroke-slate-200 dark:stroke-slate-700"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        strokeWidth="10"
                      />
                      <circle
                        className="stroke-blue-600"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="62"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      You're making great progress! Complete more assessments to improve your score.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                >
                  View Detailed Report
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-400">Skill Breakdown</CardTitle>
                <CardDescription>Your top skills based on assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Problem Solving</span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">85%</span>
                    </div>
                    <Progress
                      value={85}
                      className="h-2 bg-green-100 dark:bg-green-900/30"
                      indicatorClassName="bg-green-600 dark:bg-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Communication</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">72%</span>
                    </div>
                    <Progress
                      value={72}
                      className="h-2 bg-blue-100 dark:bg-blue-900/30"
                      indicatorClassName="bg-blue-600 dark:bg-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Technical Skills</span>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">68%</span>
                    </div>
                    <Progress
                      value={68}
                      className="h-2 bg-purple-100 dark:bg-purple-900/30"
                      indicatorClassName="bg-purple-600 dark:bg-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Leadership</span>
                      <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">60%</span>
                    </div>
                    <Progress
                      value={60}
                      className="h-2 bg-amber-100 dark:bg-amber-900/30"
                      indicatorClassName="bg-amber-600 dark:bg-amber-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                >
                  Improve Skills
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-purple-100 dark:border-purple-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700 dark:text-purple-400">Industry Benchmarking</CardTitle>
                <CardDescription>How you compare to industry standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm">You</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                      <span className="text-sm">Industry Average</span>
                    </div>
                  </div>
                  <div className="h-[200px] w-full">
                    <img
                      alt="Benchmark Chart"
                      className="h-full w-full object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20"
                >
                  View Full Comparison
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="recommendations">
              <TabsList className="grid w-full grid-cols-4 bg-blue-100 dark:bg-blue-900/30">
                <TabsTrigger
                  value="recommendations"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Recommendations
                </TabsTrigger>
                <TabsTrigger
                  value="assessments"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Assessments
                </TabsTrigger>
                <TabsTrigger
                  value="learning"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Learning
                </TabsTrigger>
                <TabsTrigger
                  value="opportunities"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Opportunities
                </TabsTrigger>
              </TabsList>
              <TabsContent value="recommendations" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Complete Your Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Your profile is 75% complete. Add your work experience to improve visibility to recruiters.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                      >
                        Update Profile
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-green-700 dark:text-green-400">
                        Take Technical Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Based on your profile, we recommend taking the Frontend Development assessment.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                      >
                        Start Assessment
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-purple-100 dark:border-purple-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-purple-50 dark:bg-purple-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-purple-700 dark:text-purple-400">
                        Join Mentorship Program
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Connect with a senior professional in your field for career guidance.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20"
                      >
                        Find a Mentor
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="assessments" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Evaluate your programming, design, and technical knowledge with adaptive tests.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                      >
                        Start Assessment
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-green-700 dark:text-green-400">Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Assess your communication, teamwork, and problem-solving abilities.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                      >
                        Start Assessment
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-100 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Job Simulation</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Experience real-world scenarios and tasks related to your target role.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-950/20"
                      >
                        Start Simulation
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="learning" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Recommended Courses</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          <span>Advanced JavaScript Techniques</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          <span>UI/UX Design Fundamentals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          <span>Project Management Essentials</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                      >
                        View All Courses
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-green-700 dark:text-green-400">Skill Development</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Based on your assessments, we recommend focusing on these skill areas:
                      </p>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Data Analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                          <span>Public Speaking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                          <span>Team Leadership</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                      >
                        Create Learning Plan
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-100 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Upcoming Webinars</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li>
                          <div className="font-medium text-amber-700 dark:text-amber-400">
                            Mastering Technical Interviews
                          </div>
                          <div className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</div>
                        </li>
                        <li>
                          <div className="font-medium text-amber-700 dark:text-amber-400">
                            Career Transitions in Tech
                          </div>
                          <div className="text-xs text-muted-foreground">May 15, 1:00 PM</div>
                        </li>
                        <li>
                          <div className="font-medium text-amber-700 dark:text-amber-400">
                            Building Your Personal Brand
                          </div>
                          <div className="text-xs text-muted-foreground">May 20, 3:30 PM</div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-950/20"
                      >
                        Register for Webinars
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="opportunities" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Job Matches</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3 text-sm">
                        <li>
                          <div className="font-medium text-blue-700 dark:text-blue-400">Senior Frontend Developer</div>
                          <div className="text-xs text-muted-foreground">TechCorp Inc. • Remote</div>
                          <div className="mt-1 text-xs text-green-600 font-medium">Match: 92%</div>
                        </li>
                        <li>
                          <div className="font-medium text-blue-700 dark:text-blue-400">UX Designer</div>
                          <div className="text-xs text-muted-foreground">Design Studio • New York</div>
                          <div className="mt-1 text-xs text-green-600 font-medium">Match: 87%</div>
                        </li>
                        <li>
                          <div className="font-medium text-blue-700 dark:text-blue-400">Product Manager</div>
                          <div className="text-xs text-muted-foreground">Innovate Inc. • San Francisco</div>
                          <div className="mt-1 text-xs text-amber-600 font-medium">Match: 78%</div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                      >
                        View All Matches
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-100 dark:border-green-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-green-700 dark:text-green-400">Micro-Internships</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3 text-sm">
                        <li>
                          <div className="font-medium text-green-700 dark:text-green-400">Website Redesign Project</div>
                          <div className="text-xs text-muted-foreground">2 weeks • $500</div>
                          <div className="mt-1 text-xs">Skills: UI/UX, HTML, CSS</div>
                        </li>
                        <li>
                          <div className="font-medium text-green-700 dark:text-green-400">
                            Marketing Campaign Analysis
                          </div>
                          <div className="text-xs text-muted-foreground">1 week • $300</div>
                          <div className="mt-1 text-xs">Skills: Data Analysis, Marketing</div>
                        </li>
                        <li>
                          <div className="font-medium text-green-700 dark:text-green-400">Content Creation</div>
                          <div className="text-xs text-muted-foreground">3 weeks • $750</div>
                          <div className="mt-1 text-xs">Skills: Writing, SEO</div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                      >
                        Browse Projects
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-purple-100 dark:border-purple-900/50 shadow-md hover:shadow-lg transition-all">
                    <CardHeader className="pb-2 bg-purple-50 dark:bg-purple-950/20 rounded-t-lg">
                      <CardTitle className="text-lg text-purple-700 dark:text-purple-400">Networking Events</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3 text-sm">
                        <li>
                          <div className="font-medium text-purple-700 dark:text-purple-400">Tech Meetup</div>
                          <div className="text-xs text-muted-foreground">May 18 • Virtual</div>
                          <div className="mt-1 text-xs">50+ attendees from your industry</div>
                        </li>
                        <li>
                          <div className="font-medium text-purple-700 dark:text-purple-400">Career Fair</div>
                          <div className="text-xs text-muted-foreground">June 5 • Chicago</div>
                          <div className="mt-1 text-xs">25+ companies recruiting</div>
                        </li>
                        <li>
                          <div className="font-medium text-purple-700 dark:text-purple-400">Industry Conference</div>
                          <div className="text-xs text-muted-foreground">June 15-17 • Online</div>
                          <div className="mt-1 text-xs">Speakers from top companies</div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20"
                      >
                        View All Events
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 Career360. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Help
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}