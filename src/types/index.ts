// Definição de tipos para o projeto

// Tipo para metadados de páginas
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Tipo para navegação
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
}

// Tipo para itens de menu principal
export interface MainNavItem extends NavItem {}

// Tipo para itens de menu de rodapé 
export interface FooterItem extends NavItem {}

// Tipo para seções de conteúdo
export interface ContentSection {
  id: string;
  title: string;
  description?: string;
}

// Tipo para temas
export type Theme = "light" | "dark" | "system";

// Tipos para APIs, modelos de dados e funções específicas podem ser adicionados conforme necessário 