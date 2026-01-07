export default function Header() {
  return (
    <header className="w-full flex justify-end items-center py-6 px-12"> 
      {/* justify-end: joga tudo para a direita
          px-12: afasta os botões da margem lateral 
      */}
      <nav>
        <ul className="flex gap-8"> 
          {/* gap-8: aumenta o espaço entre um botão e outro */}
          <li>
            <a href="#projects" className="hover:text-gray-400 transition-colors">Projetos</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400 transition-colors">Habilidades</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}