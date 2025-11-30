import "./globals.css";

export const metadata = {
  title: "Sistema OS - Frontend",
  description: "Sistema de ordens de serviço e gestão de frotas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="flex bg-gray-100">
        
        {/* SIDEBAR */}
        <aside className="w-64 h-screen bg-[#e11a24] text-white flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-8">SISTEMA OS</h1>

          <nav className="flex flex-col gap-4 text-lg">
            <a href="/" className="hover:opacity-80">Dashboard</a>
            <a href="/frotas" className="hover:opacity-80">Frotas</a>
            <a href="/os" className="hover:opacity-80">Ordens de Serviço</a>
            <a href="/usuarios" className="hover:opacity-80">Usuários</a>
          </nav>

          <div className="mt-auto">
            <button className="bg-white text-[#e11a24] px-4 py-2 rounded hover:bg-gray-200">
              Sair
            </button>
          </div>
        </aside>

        {/* CONTEÚDO */}
        <main className="flex-1 p-10">
          {children}
        </main>

      </body>
    </html>
  );
}

