"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";


const timelineData = [
{
  id: 1,
  title: "Discovering Technology",
  date: "Grade 8",
  content:
    "I started becoming interested in technology around Grade 8. My interest grew through gaming and learning more about how computers and technology work.",
  category: "Interest",
  icon: Calendar,
  relatedIds: [2],
  status: "completed" as const,
  energy: 100,
},

{
  id: 2,
  title: "Choosing IT",
  date: "Grade 10",
  content:
    "In Grade 10, I chose Information Technology as a subject. This gave me the opportunity to learn more about computers, programming and how technology can be used to solve problems.",
  category: "Education",
  icon: FileText,
  relatedIds: [1, 3],
  status: "completed" as const,
  energy: 90,
},

{
  id: 3,
  title: "Starting College",
  date: "2026",
  content:
    "After school, I decided to continue my interest in technology by studying Computer and Information Sciences in Application Development, with a focus on Computer Science.",
  category: "Education",
  icon: Code,
  relatedIds: [2, 4],
  status: "completed" as const,
  energy: 80,
},

{
  id: 4,
  title: "Developing My Skills",
  date: "2026",
  content:
    "I am currently developing my programming and problem-solving skills through my college studies. I am learning areas such as Java, software development, web development and databases.",
  category: "Development",
  icon: User,
  relatedIds: [3, 5],
  status: "in-progress" as const,
  energy: 65,
},

{
  id: 5,
  title: "Future Software Developer",
  date: "Future",
  content:
    "My goal is to become a skilled software developer, gain practical experience and continue improving my coding abilities while building software that solves real-world problems.",
  category: "Career",
  icon: Clock,
  relatedIds: [4],
  status: "pending" as const,
  energy: 30,
},
];

export default function Home() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
