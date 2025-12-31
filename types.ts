
export interface FinanceItem {
  id: string;
  description: string;
  value: number;
  isEssential?: boolean;
}

export type FinanceCategory = 'ENTRADAS' | 'ESSENCIAIS' | 'NAO_ESSENCIAIS';

export interface FinanceState {
  incomes: FinanceItem[];
  essentialExpenses: FinanceItem[];
  nonEssentialExpenses: FinanceItem[];
}
