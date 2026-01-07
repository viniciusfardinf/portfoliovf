// src/app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact"; // 1. Importe o novo componente
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact /> {/* 2. Adicione a sessão aqui */}
      <Footer />
    </main>
  );
}