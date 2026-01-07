export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-zinc-500 text-sm font-medium tracking-wide">
          © {currentYear} — <span className="text-zinc-300">Vinícius Fardin de Figueiredo</span>
          
        </p>
      </div>
    </footer>
  );
}