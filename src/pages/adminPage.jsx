import Link from "next/link";
import { GraduationCap, LineChart, LogOut, Settings, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPanelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360 Admin</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/admin" className="text-sm font-medium text-blue-600">
              Dashboard
            </Link>
            <Link href="/admin/users" className="text-sm font-medium hover:text-blue-600">
              Users
            </Link>
            <Link href="/admin/content" className="text-sm font-medium hover:text-blue-600">
              Content
            </Link>
            <Link href="/admin/analytics" className="text-sm font-medium hover:text-blue-600">
              Analytics
            </Link>
            <Link href="/admin/settings" className="text-sm font-medium hover:text-blue-600">
              Settings
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
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Admin. Here's an overview of the platform.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-blue-100 dark:border-blue-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold">12,345</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-400">Active Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-green-600 mr-2" />
                  <span className="text-3xl font-bold">87</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-100 dark:border-amber-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Mentorship Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-amber-600 mr-2" />
                  <span className="text-3xl font-bold">1,234</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-purple-100 dark:border-purple-900/50 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700 dark:text-purple-400">Revenue (Monthly)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <LineChart className="h-8 w-8 text-purple-600 mr-2" />
                  <span className="text-3xl font-bold">$45,678</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="lg:col-span-2 border-blue-100 dark:border-blue-900/50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700 dark:text-blue-400">User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=User+Growth+Chart"
                    alt="User Growth Chart"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-green-700 dark:text-green-400">User Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <img
                    src="/placeholder.svg?height=300&width=300&text=User+Distribution+Chart"
                    alt="User Distribution Chart"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">Recent Activity</h2>
            <Tabs defaultValue="users">
              <TabsList className="grid w-full grid-cols-3 bg-blue-100 dark:bg-blue-900/30">
                <TabsTrigger value="users" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  User Activity
                </TabsTrigger>
                <TabsTrigger value="courses" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Course Updates
                </TabsTrigger>
                <TabsTrigger
                  value="mentorship"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Mentorship Activity
                </TabsTrigger>
              </TabsList>
              <TabsContent value="users" className="mt-6">
                <Card className="border-blue-100 dark:border-blue-900/50 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-400">
                      Recent User Registrations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["John Doe", "Jane Smith", "Alex Johnson", "Emily Brown", "Chris Lee"].map((user, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-blue-600" />
                            <span>{user}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">Registered 2 hours ago</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                    >
                      View All Users
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="courses" className="mt-6">
                {/* Similar structure to 'users' tab, with course update information */}
              </TabsContent>
              <TabsContent value="mentorship" className="mt-6">
                {/* Similar structure to 'users' tab, with mentorship activity information */}
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="border-blue-100 dark:border-blue-900/50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Platform Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Server Uptime</span>
                    <span className="text-sm text-green-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm text-amber-600">250ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Error Rate</span>
                    <span className="text-sm text-red-600">0.1%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20"
                >
                  View Detailed Metrics
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}