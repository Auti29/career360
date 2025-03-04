import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Career360</span>
            </Link>
            <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="job-seeker" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="job-seeker" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Job Seeker</TabsTrigger>
                <TabsTrigger value="recruiter" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Recruiter</TabsTrigger>
              </TabsList>
              <TabsContent value="job-seeker">
                <LoginCard title="Job Seeker Login" description="Enter your email and password to access your dashboard" signUpRole="candidate" />
              </TabsContent>
              <TabsContent value="recruiter">
                <LoginCard title="Recruiter Login" description="Enter your email and password to access your HR dashboard" signUpRole="recruiter" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginCard({ title, description, signUpRole }) {
  return (
    <Card className="border-blue-100 dark:border-blue-900/50 shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl text-blue-700 dark:text-blue-400">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" className="border-blue-200 dark:border-blue-800 focus-visible:ring-blue-500" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <Input id="password" type="password" className="border-blue-200 dark:border-blue-800 focus-visible:ring-blue-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid gap-1.5 leading-none">
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px flex-1 bg-muted"></div>
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-muted"></div>
        </div>
        <div className="grid gap-2">
          <Button variant="outline" className="w-full border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20">Continue with Google</Button>
          <Button variant="outline" className="w-full border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20">Continue with LinkedIn</Button>
        </div>
        <div className="text-center text-sm">
          Don't have an account? <Link href={`/signup?role=${signUpRole}`} className="text-blue-600 hover:underline">Sign up</Link>
        </div>
      </CardFooter>
    </Card>
  );
}
