export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center justify-center text-center">
      
      {/* Background Decorativo Principal */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 opacity-50 blur-[120px]" />
      </div>

      {/* Arte de Código de Fundo (Simulando VS Code) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Bloco de código na esquerda */}
        <div className="absolute left-[-5%] top-[20%] text-left font-mono text-[10px] md:text-sm opacity-[0.03] rotate-[-12deg] hidden lg:block">
          <pre className="text-blue-400">
            {`function buildExperience(user) {
  const stack = ['React', 'Next.js', 'Node'];
  return stack.map(tech => ({
    ...user,
    experience: tech.impact,
    quality: 'Premium'
  }));
}`}
          </pre>
          <pre className="text-purple-400 mt-4">
            {`interface Developer {
  name: "Vinícius Fardin";
  role: "Full Stack";
  focus: "Customer Experience";
}`}
          </pre>
        </div>

        {/* Bloco de código na direita */}
        <div className="absolute right-[-5%] bottom-[15%] text-left font-mono text-[10px] md:text-sm opacity-[0.03] rotate-[12deg] hidden lg:block">
          <pre className="text-green-400">
            {`<section id="hero">
  <h1 className="gradient">
    {name}
  </h1>
  <p>{description}</p>
  <Button onClick={contact} />
</section>`}
          </pre>
          <pre className="text-orange-400 mt-4">
            {`const config = {
  responsive: true,
  performance: "100%",
  deployment: "Vercel"
};`}
          </pre>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-6 whitespace-nowrap">
          Vinícius{" "}
          <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent italic">
            Fardin
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mx-auto">
          Desenvolvedor Full Stack especializado em construir interfaces 
          <span className="text-white font-medium"> modernas</span> e escaláveis, focadas na 
          <span className="text-white font-medium"> experiência do usuário</span>.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Ver Projetos
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-white/10 hover:bg-zinc-800 transition-all transform hover:scale-105"
          >
            Entrar em contato
          </a>
        </div>

        {/* Badge de Status movida para baixo dos botões */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/10 text-xs font-medium text-zinc-400 mt-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponível para novos projetos
        </div>

      </div>
    </section>
  );
}