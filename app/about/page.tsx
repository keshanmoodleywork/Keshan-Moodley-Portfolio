import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  "Java",
  "Delphi",
  "HTML",
  "SQL",
  "CSS",
  "JavaScript",
  "Coming Soon"
];

export const metadata = {
  title: "About Me",
  description:
    "Why I chose IT, my career goals, skills, and professional reflection.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <Image
            src="/keshan.jpeg"
            alt="Keshan Moodley"
            width={180}
            height={180}
            className="rounded-full object-cover border border-white/10"
          />
        </div>

        <p className="text-sm font-mono text-white/50 mb-3">
          About
        </p>

        <h1 className="text-4xl font-semibold mb-10">
          About Me
        </h1>

        {/* Why I chose IT */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-2">
            Why I chose IT
          </h2>

          <p className="text-white/70 leading-relaxed">
            The area of Information Technology attracted my attention via my passion for games. My interest in the way technology can create an interactive experience in the virtual world has developed into an interest in learning what goes on behind the computer screen. My interest in programming and problem-solving has made me realize that I like to use technology to create and enhance something. It has encouraged me to get into Computer Science.
          </p>
        </section>

        {/* Career Goals */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-2">
            Career goals
          </h2>

          <p className="text-white/70 leading-relaxed">
            In the coming few years, I intend to develop myself into an efficient software engineer with practical experience in software engineering projects. I would be keen on getting into the technology industry and/or gaming industry where I can put together my fascination in technology and my creative and problem-solving abilities. I would like to join a firm where I can learn from professional software engineers and participate in relevant projects and further my technical knowledge. In essence, I would like to create a successful career as a software engineer.
          </p>
        </section>

        {/* Interests */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-2">
            Interests within IT
          </h2>

          <p className="text-white/70 leading-relaxed">
            My most exciting area of study involves the development of software and codes. I love coding as well as making codes. It is very fascinating for me to code and solve problems and make ideas come true. What makes me excited about development process is that there is always something new that one can learn or better himself or herself. My primary objective is to be a good software developer.
          </p>
        </section>



        {/* Professional Reflection */}
        <section>
          <h2 className="text-lg font-medium mb-4">
            Professional Reflection
          </h2>

          <div className="space-y-5 text-white/70 leading-relaxed">

            <p>
              Throughout this module, I have become more aware of the meaning of developing oneself as an IT professional and the importance of presenting oneself professionally. During this module, I have also become more familiar with the development of a digital portfolio, which will help me convey my interests, skills, education and career aspirations. Through the process of developing my portfolio, I have become more aware of my journey as an IT professional, which began in Grade 8 when I developed an interest in technology. In Grade 10, I took Information Technology as a subject, which made me interested in programming and ultimately led me to choose Computer and Information Sciences in Application Development as my college degree, specifically Computer Science.
            </p>

            <p>
              I feel that my best professional skill as an IT specialist is the problem-solving ability, especially when it comes to being able to see flaws in my performance and how to remedy them. Whenever I experience some sort of mistake or anything that is not going well for me, I make sure that I determine the cause of that instead of skipping it.
            </p>

            <p>
              I would like to enhance my skill at programming.
              While I have learned something from my education, I am aware
              that there is much more for me to learn before I can feel
              comfortable enough to be a good programmer. I would like to be
              able to write more complex programs and understand various
              aspects of programming without always using examples.
            </p>

            <p>
              In order to build this skill, I intend to code frequently and take up personal projects beyond my regular coursework. It is important for me to keep on learning from my mistakes and to research for solutions in case I am faced with any difficulties while coding. Taking up challenging coding projects will help me learn through practice.
            </p>

            <p>
              The value of this portfolio is that it can help me in the future when I pursue further education and career by
              serving as a platform where I can demonstrate my skills that have
              developed throughout the time. With each passing project, I can keep
              on including it in the portfolio, and one day in the future,
              hopefully, it will make people understand what I am capable of as a
              prospective software developer.
            </p>

          </div>
        </section>

                {/* Skills */}
        <section className="mt-10 mb-10">
          <h2 className="text-lg font-medium mb-4">
            Skills I'm developing
          </h2>

          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="border-white/20 text-white/80 bg-white/5"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}