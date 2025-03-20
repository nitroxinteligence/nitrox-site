import { NextRequest, NextResponse } from 'next/server';

/**
 * Exemplo de rota de API para demonstrar a estrutura
 * 
 * Esta rota retorna um simples objeto JSON com data e um exemplo de mensagem
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    data: {
      message: 'API endpoint de exemplo da Nitrox Inteligência',
      timestamp: new Date().toISOString(),
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Aqui você poderia processar os dados recebidos
    
    return NextResponse.json({
      success: true,
      data: {
        message: 'Dados recebidos com sucesso',
        received: body,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao processar a requisição',
        message: (error as Error).message,
      },
      { status: 400 }
    );
  }
} 