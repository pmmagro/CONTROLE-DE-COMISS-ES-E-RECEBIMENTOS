
export enum UserRole {
  Proprietario = 'Proprietário',
  Financeiro = 'Assistente Financeiro',
  Visualizador = 'Visualizador',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export enum StatusCliente {
  Ativo = 'Ativo',
  Inativo = 'Inativo',
}

export interface Cliente {
  id: string;
  nome: string;
  razao_social?: string;
  cnpj?: string;
  cidade_uf?: string;
  telefone?: string;
  segmento: string;
  status: StatusCliente;
  comissao_padrao: number;
  created_at: Date;
  updated_at: Date;
}

export interface Pedido {
  id: string;
  numero: string;
  cliente_id: string;
  data_pedido: Date;
  tons: number;
  preco_ton: number;
  prazo_dias: number;
  created_at: Date;
  updated_at: Date;
}

export interface Nota {
  id: string;
  numero: string;
  chave_nfe?: string;
  pedido_id: string;
  data_emissao: Date;
  tons: number;
  valor_nota: number;
  created_at: Date;
  updated_at: Date;
}

export enum FormaPagamento {
  PIX = 'PIX',
  TED = 'TED',
  Boleto = 'Boleto',
  Cartao = 'Cartão',
  Outro = 'Outro',
}

export interface Pagamento {
  id: string;
  nota_id: string;
  data_pagamento: Date;
  valor_pago: number;
  forma_pagamento: FormaPagamento;
  vencimento_original?: Date;
  created_at: Date;
  updated_at: Date;
}

export enum ResponsavelPagamento {
  Propria = 'Calcário Bela Vista',
  Terceiro = 'Terceiro',
  Outro = 'Outro',
}

export interface Comissao {
  id: string;
  nota_id: string;
  cliente_id: string;
  percentual: number;
  valor_base: number;
  valor_comissao: number;
  valor_pago: number;
  responsavel_pagamento: ResponsavelPagamento;
  created_at: Date;
  updated_at: Date;
}

export enum StatusPagamento {
  Pendente = 'Pendente',
  Parcial = 'Parcial',
  Paga = 'Paga',
  Aberta = 'Aberta',
  Aguardando = 'Aguardando Pagamento',
  Totalmente = 'Pago Totalmente'
}
