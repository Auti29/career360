import Link from "next/link";
import { Briefcase, Clock, GraduationCap, LogOut, Search, Settings, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MicroInternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['Dashboard', 'Assessments', 'Career Roadmap', 'Micro-Internships', 'Mentorship'].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium hover:text-blue-600">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {[Settings, User, LogOut].map((Icon, index) => (
              <Button key={index} variant="ghost" size="icon">
                <Icon className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </Button>
            ))}
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-blue-700">Micro-Internships & Freelance Work</h1>
          <p className="text-muted-foreground">Gain real-world experience with short-term projects and gigs</p>

          <div className="flex items-center justify-between my-6">
            <h2 className="text-2xl font-bold text-blue-700">Find Opportunities</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Search className="mr-2 h-4 w-4" /> Search Projects
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Input placeholder="Skill or Keyword" className="border-blue-200" />
            <Select>
              <SelectTrigger className="border-blue-200">
                <SelectValue placeholder="Project Duration" />
              </SelectTrigger>
              <SelectContent>
                {['Less than 1 week', '1-2 weeks', '2-4 weeks'].map((duration, index) => (
                  <SelectItem key={index} value={duration.toLowerCase().replace(' ', '-')}>{duration}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-blue-200">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {['Technology', 'Marketing', 'Design', 'Writing'].map((industry, index) => (
                  <SelectItem key={index} value={industry.toLowerCase()}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="featured" className="my-6">
            <TabsList className="grid w-full grid-cols-3 bg-blue-100">
              {['Featured Projects', 'Recently Added', 'Trending Skills'].map((tab, index) => (
                <TabsTrigger key={index} value={tab.toLowerCase().replace(' ', '-')}>{tab}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="featured">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[{ title: "UI/UX Redesign", company: "TechStart Inc.", duration: "2 weeks", pay: "$800" },
                  { title: "Content Writing", company: "ContentCraft", duration: "3 weeks", pay: "$600" }].map((project, index) => (
                  <Card key={index} className="border-blue-100 shadow-md hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-700">{project.title}</CardTitle>
                      <CardDescription>{project.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.pay}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="trending">
              <Card className="border-blue-100 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">Hot Skills in Demand</CardTitle>
                  <CardDescription>Skills frequently requested by companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {['React Development', 'Python Scripting', 'SEO Optimization'].map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium text-blue-700">{skill}</span>
                        <Star className="h-5 w-5 text-yellow-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}