import "./globals.css";

export const metadata = {
  title: "Vinicius Fardin | Portfólio",
  description: "Portfólio de Desenvolvedor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
