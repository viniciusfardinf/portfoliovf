import Image, { StaticImageData } from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: StaticImageData | string; // Aceita o import direto
}

export default function ProjectCard({ title, description, link, tags, image }: ProjectProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <ExternalLink size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-wider text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}