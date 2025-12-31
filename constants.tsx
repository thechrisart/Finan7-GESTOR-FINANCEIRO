
import React from 'react';
import { FinanceItem } from './types';

export const DEFAULT_INCOMES: FinanceItem[] = [
  { id: 'inc-1', description: 'Salário Líquido (Pessoa 01)', value: 0 },
  { id: 'inc-2', description: 'Vale-Alimentação (Pessoa 01)', value: 0 },
  { id: 'inc-3', description: 'Vale-Refeição (Pessoa 01)', value: 0 },
  { id: 'inc-4', description: 'Salário Líquido (Pessoa 02)', value: 0 },
  { id: 'inc-5', description: 'Vale-Alimentação (Pessoa 02)', value: 0 },
  { id: 'inc-6', description: 'Vale-Refeição (Pessoa 02)', value: 0 },
  { id: 'inc-7', description: 'Outras Entradas 01 (Avon, Uber...)', value: 0 },
  { id: 'inc-8', description: 'Outras Entradas 02 (Comissões, Bônus...)', value: 0 },
  { id: 'inc-9', description: 'Outras Entradas 03 (Aluguel, Aulas...)', value: 0 },
];

export const DEFAULT_ESSENTIAL_EXPENSES: FinanceItem[] = [
  { id: 'ess-1', description: 'Moradia (Aluguel/Financiamento)', value: 0 },
  { id: 'ess-2', description: 'Condomínio', value: 0 },
  { id: 'ess-3', description: 'Supermercado', value: 0 },
  { id: 'ess-4', description: 'Água', value: 0 },
  { id: 'ess-5', description: 'Luz', value: 0 },
  { id: 'ess-6', description: 'Gás', value: 0 },
  { id: 'ess-7', description: 'IPTU', value: 0 },
  { id: 'ess-8', description: 'Plano de Saúde', value: 0 },
  { id: 'ess-9', description: 'Seguro de Vida', value: 0 },
  { id: 'ess-10', description: 'Investimentos (Obrigatório!)', value: 0 },
];

export const DEFAULT_NON_ESSENTIAL_EXPENSES: FinanceItem[] = [
  { id: 'non-1', description: 'Cartão de Crédito', value: 0 },
  { id: 'non-2', description: 'Combustível', value: 0 },
  { id: 'non-3', description: 'Farmácia', value: 0 },
  { id: 'non-4', description: 'Gastos com Animais', value: 0 },
  { id: 'non-5', description: 'Gastos Imprevistos', value: 0 },
  { id: 'non-6', description: 'Transporte (Ônibus/Uber)', value: 0 },
  { id: 'non-7', description: 'Gastos com Veículo', value: 0 },
  { id: 'non-8', description: 'Internet Residencial', value: 0 },
  { id: 'non-9', description: 'Netflix/Amazon/Disney+', value: 0 },
  { id: 'non-10', description: 'Lazer (Cinema/Sair)', value: 0 },
];
