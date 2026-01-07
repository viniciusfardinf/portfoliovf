import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-center">
        
        {/* Container de Botões Centralizados */}
        <nav className="flex items-center gap-3">
          <Link 
            href="#projects" 
            className="px-6 py-2.5 bg-zinc-900 text-zinc-400 text-sm font-bold rounded-full border border-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Projetos
          </Link>

          <Link 
            href="#skills" 
            className="px-6 py-2.5 bg-zinc-900 text-zinc-400 text-sm font-bold rounded-full border border-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Habilidades
          </Link>

          <Link 
            href="#contact" 
            className="px-6 py-2.5 bg-zinc-900 text-zinc-400 text-sm font-bold rounded-full border border-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Contato
          </Link>
        </nav>

      </div>
    </header>
  );
}