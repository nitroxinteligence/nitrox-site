import { NavBarDemo } from "@/components/ui/navbar-demo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Conteúdo principal com padding adequado */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl text-center p-6 pt-28 md:p-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Nitrox Inteligência
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Transformando dados em inteligência para o seu negócio
        </p>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
    </main>
  );
}
