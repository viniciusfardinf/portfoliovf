import { 
  Code2, 
  Database, 
  Webhook, 
  HeartHandshake, 
  Globe, 
  Layers 
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"],
    icon: <Code2 className="text-blue-400" />,
    description: "Criação de interfaces modernas e interativas."
  },
  {
    category: "Backend",
    items: ["Node.js", "C#", "Python"],
    icon: <Layers className="text-orange-400" />,
    description: "Desenvolvimento de lógica e APIs eficientes."
  },
  {
    category: "Bancos de Dados",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    icon: <Database className="text-green-400" />,
    description: "Gerenciamento de dados seguro e escalável."
  },
  {
    category: "Customer Experience",
    items: ["Suporte Técnico", "Sucesso do Cliente", ],
    icon: <HeartHandshake className="text-pink-400" />,
    description: "Foco total na satisfação e jornada do usuário."
  },
  {
    category: "Integração API", // Alterado de Mobile
    items: ["RESTful APIs"],
    icon: <Webhook className="text-purple-400" />, // Ícone alterado para combinar
    description: "Conectividade entre sistemas e consumo de dados real-time."
  },
  {
    category: "Idiomas", // Alterado de Performance
    items: ["Inglês Avançado", "Espanhol Intermediário"],
    icon: <Globe className="text-yellow-400" />, // Ícone alterado para combinar
    description: "Comunicação fluida em ambientes internacionais."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Habilidades</h2>
          <p className="text-zinc-500 mt-4 max-w-lg italic">
            Transformando código em experiências memoráveis para o usuário.
          </p>
          <div className="h-1.5 w-12 bg-zinc-800 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.category}
              className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/60"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{skill.category}</h3>
              </div>
              
              <p className="text-zinc-500 text-sm mb-6 font-medium leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-bold text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}