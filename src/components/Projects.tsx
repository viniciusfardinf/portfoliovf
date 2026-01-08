import ProjectCard from "./ProjectCard";

// Importando as imagens da pasta src/images
import imgBrandU from "../images/brandu.png";
import imgPizzaria from "../images/pizzaria.png";
import imgCaoIdeal from "../images/caoideal.png"; // Adicione o print do site aqui

const projects = [
  {
    title: "CãoIdeal",
    description: "Aplicação Full Stack que utiliza lógica de match para conectar usuários à raça de cachorro ideal, com dados reais via API.",
    link: "https://cao-ideal.vercel.app", // Substitua pelo seu link da Vercel
    image: imgCaoIdeal,
    tags: ["React", "NestJS", "REST API", "Tailwind"]
  },
  {
    title: "Brandu",
    description: "Plataforma profissional de branding e automação de identidade visual.",
    link: "https://brandu-two.vercel.app",
    image: imgBrandU,
    tags: ["React.js", "CSS", "Chatbot AI"]
  },
  {
    title: "Mendonza's Pizzaria",
    description: "Cardápio focado em UX com atualização dinâmica de dados via integração com Google Sheets API.",
    link: "https://mendonzas-pizzaria.vercel.app",
    image: imgPizzaria,
    tags: ["React", "CSS", "Google API"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">Projetos</h2>
          <div className="h-1.5 w-12 bg-white mt-4 rounded-full opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}