import { Github, Linkedin, Mail } from "lucide-react";

const CONTACTS = [
  {
    label: "Email",
    value: "keshanmoodleywork@gmail.com",
    href: "mailto:keshanmoodleywork@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/keshanmoodleywork",
    href: "https://github.com/keshanmoodleywork",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/keshan-moodley-76193143a",
    href: "https://www.linkedin.com/in/keshan-moodley-76193143a",
    icon: Linkedin,
  },
];

export const metadata = {
  title: "Contact Details ",
  description: "Get in touch — email, GitHub, and LinkedIn.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-mono text-white/50 mb-3">Get in touch</p>
        <h1 className="text-4xl font-semibold mb-4">Contact</h1>
        <p className="text-white/70 mb-10">
          I&apos;m happy to hear from recruiters, collaborators, or fellow
          students. The best ways to reach me are below.
        </p>

        <ul className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {CONTACTS.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener" : undefined}
                className="flex items-center gap-4 py-5 group"
              >
                <Icon size={18} className="text-white/50" />
                <span className="font-mono text-xs text-white/50 w-20">
                  {label}
                </span>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-white/40 text-sm mt-10">
          This page intentionally omits a home address, ID number, or phone
          number, to protect personal privacy.
        </p>
      </div>
    </main>
  );
}
