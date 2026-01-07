import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { name: "WhatsApp", icon: <MessageCircle size={20} />, href: "https://wa.me/+5528999951420" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "https://instagram.com/viniciusfardinF" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vinicius-fardin-de-figueiredo-7864a7173/" },
  { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/viniciusfardinf" },
  { name: "E-mail", icon: <Mail size={20} />, href: "mailto:viniciusfigueired0@hotmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">
          Vamos criar algo <br /> 
          <span className="text-zinc-500 italic">extraordinário?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <span className="group-hover:scale-110 transition-transform font-bold">
                {link.icon}
              </span>
              <span className="font-bold tracking-tight">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}