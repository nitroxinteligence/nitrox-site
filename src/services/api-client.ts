/**
 * Cliente para chamadas de API
 */
type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
  data?: unknown;
}

interface ApiError extends Error {
  status: number;
  data: any;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, data, headers: customHeaders, ...restOptions } = options;
    const method = restOptions.method || 'GET';

    // Construir a URL com parâmetros de consulta, se houver
    let url = `${this.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value);
      });
      url += `?${searchParams.toString()}`;
    }

    // Configurar cabeçalhos padrão
    const headers = new Headers({
      'Content-Type': 'application/json',
      ...customHeaders,
    });

    const config: RequestInit = {
      method,
      headers,
      ...restOptions,
    };

    // Adicionar corpo para métodos não-GET
    if (data && method !== 'GET') {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(
          errorData.message || `API error with status ${response.status}`
        ) as ApiError;
        error.status = response.status;
        error.data = errorData;
        throw error;
      }

      // Para respostas sem conteúdo ou respostas 204
      if (response.status === 204 || response.headers.get('content-length') === '0') {
        return {} as T;
      }

      // Tenta ler como JSON, com fallback para texto
      if (response.headers.get('content-type')?.includes('application/json')) {
        return await response.json();
      } else {
        const text = await response.text();
        try {
          return JSON.parse(text) as T;
        } catch {
          return text as unknown as T;
        }
      }
    } catch (error) {
      if ((error as ApiError).status) {
        throw error;
      }
      throw new Error(`Falha na requisição: ${(error as Error).message}`);
    }
  }

  // Métodos auxiliares
  get<T>(endpoint: string, options: Omit<RequestOptions, 'method' | 'data'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, data?: unknown, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'POST', data });
  }

  put<T>(endpoint: string, data?: unknown, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'PUT', data });
  }

  patch<T>(endpoint: string, data?: unknown, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', data });
  }

  delete<T>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// Exportar uma instância padrão
export const apiClient = new ApiClient();

export default apiClient; 