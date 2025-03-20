import type { Metadata } from 'next';
import siteConfig from '../metadata';

export const metadata: Metadata = {
  title: 'Início',
  description: 'Bem-vindo ao site da Nitrox Inteligência',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Nitrox Inteligência
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Este é o site base para a empresa Nitrox Inteligência.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Estrutura do projeto pronta para desenvolvimento.
        </p>
      </div>
    </main>
  );
} 