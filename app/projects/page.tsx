import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A professional portfolio website currently in development. It is being designed to showcase my skills, coursework, future projects and progress as a Computer Science student.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Future Software Development Projects",
    description:
      "I am currently developing my programming skills and working towards building personal software projects. These projects will allow me to apply what I learn through my Computer Science studies to real-world problems.",
    tech: ["Java", "Programming", "Problem Solving"]
    
  },
];

export const metadata = {
  title: "My Projects",
  description: "A selection of academic, practical, and personal projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-mono text-white/50 mb-3">Selected work</p>
        <h1 className="text-4xl font-semibold mb-10">Projects</h1>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="bg-white/5 border-white/10 backdrop-blur-md text-white"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="border-white/20 text-white/70 bg-transparent text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
