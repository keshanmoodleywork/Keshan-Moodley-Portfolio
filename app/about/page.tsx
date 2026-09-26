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
            My interest in Information Technology started through my love for
            gaming and anime, which made me curious about how technology can
            create interactive digital experiences. As I learned more about
            computers and how software works, I became interested in
            understanding what happens behind the screen. Learning about
            programming and solving problems made me realise that I enjoy using
            technology to create and improve things. This eventually motivated
            me to pursue Computer Science and work towards a career in software
            development.
          </p>
        </section>

        {/* Career Goals */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-2">
            Career goals
          </h2>

          <p className="text-white/70 leading-relaxed">
            Over the next few years, I would like to grow into a skilled
            software developer and gain experience working on real-world
            software projects. I am interested in the technology and gaming
            industries, where I could combine my interest in technology with
            my creativity and problem-solving skills. I would like to work for
            a company where I can learn from experienced developers, contribute
            to meaningful projects and continue developing my technical skills.
            Ultimately, I want to build a successful career in software
            development and keep growing as technology evolves.
          </p>
        </section>

        {/* Interests */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-2">
            Interests within IT
          </h2>

          <p className="text-white/70 leading-relaxed">
            The area that excites me most is software development, particularly
            coding and creating software. I enjoy writing code, solving
            problems and seeing an idea turn into something that actually works.
            I find the development process interesting because there is always
            something new to learn and improve. My main goal is to become a
            strong software developer and continue building my skills through
            practical experience.
          </p>
        </section>



        {/* Professional Reflection */}
        <section>
          <h2 className="text-lg font-medium mb-4">
            Professional Reflection
          </h2>

          <div className="space-y-5 text-white/70 leading-relaxed">

            <p>
              During this module, I have learned more about what it means to
              develop myself as an IT professional and how important it is to
              present my skills and experience professionally. I have also
              gained a better understanding of how to create a digital
              portfolio and use it to communicate my interests, skills,
              education and career goals. Building this portfolio has given me
              the opportunity to reflect on my journey into Information
              Technology, which started around Grade 8 when I first became
              interested in technology. In Grade 10, I chose Information
              Technology as a subject, which increased my interest in
              programming and eventually influenced my decision to study
              Computer and Information Sciences in Application Development at
              college, with a focus on Computer Science.
            </p>

            <p>
              I believe my strongest IT professional skill is problem-solving,
              particularly my ability to identify weaknesses in my work and
              find ways to fix them. When I encounter an error or something
              that does not work as expected, I try to understand what caused
              the problem rather than simply moving on. This has helped me
              become more patient when working with code and has shown me that
              mistakes can be useful learning opportunities.
            </p>

            <p>
              One skill I would like to improve is my programming ability.
              Although I have gained experience through my studies, I know that
              I still have a lot to learn before I can become a confident
              software developer. I would like to become better at writing
              more complex programs, understanding different programming
              concepts and developing solutions without relying too heavily on
              examples.
            </p>

            <p>
              To develop this skill, I plan to practise coding regularly and
              work on personal projects outside of my normal coursework. I
              also want to continue learning from mistakes, research solutions
              when I get stuck and gradually take on more challenging
              programming problems. Building projects will allow me to apply
              what I learn and gain practical experience.
            </p>

            <p>
              This portfolio can support my future studies and career by
              providing a place where I can document my progress and showcase
              the skills I develop over time. As I complete more projects and
              gain experience, I can continue adding them to the portfolio. In
              the future, I hope it will give potential employers a better
              understanding of my abilities, interests and growth as an
              aspiring software developer.
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