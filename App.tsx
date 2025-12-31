
import React, { useState, useMemo, useCallback } from 'react';
import { 
  DEFAULT_INCOMES, 
  DEFAULT_ESSENTIAL_EXPENSES, 
  DEFAULT_NON_ESSENTIAL_EXPENSES 
} from './constants';
import { FinanceItem, FinanceCategory } from './types';
import FinanceTable from './components/FinanceTable';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [incomes, setIncomes] = useState<FinanceItem[]>(DEFAULT_INCOMES);
  const [essentialExpenses, setEssentialExpenses] = useState<FinanceItem[]>(DEFAULT_ESSENTIAL_EXPENSES);
  const [nonEssentialExpenses, setNonEssentialExpenses] = useState<FinanceItem[]>(DEFAULT_NON_ESSENTIAL_EXPENSES);

  const handleUpdate = useCallback((
    category: FinanceCategory, 
    id: string, 
    field: 'description' | 'value', 
    value: string | number
  ) => {
    const updater = (prev: FinanceItem[]) => 
      prev.map(item => item.id === id ? { ...item, [field]: value } : item);

    if (category === 'ENTRADAS') setIncomes(updater);
    else if (category === 'ESSENCIAIS') setEssentialExpenses(updater);
    else setNonEssentialExpenses(updater);
  }, []);

  const handleAddRow = useCallback((category: FinanceCategory) => {
    const newItem: FinanceItem = {
      id: `${Date.now()}-${Math.random()}`,
      description: 'Novo Item',
      value: 0
    };
    if (category === 'ENTRADAS') setIncomes(prev => [...prev, newItem]);
    else if (category === 'ESSENCIAIS') setEssentialExpenses(prev => [...prev, newItem]);
    else setNonEssentialExpenses(prev => [...prev, newItem]);
  }, []);

  const handleRemoveRow = useCallback((category: FinanceCategory, id: string) => {
    if (category === 'ENTRADAS') setIncomes(prev => prev.filter(i => i.id !== id));
    else if (category === 'ESSENCIAIS') setEssentialExpenses(prev => prev.filter(i => i.id !== id));
    else setNonEssentialExpenses(prev => prev.filter(i => i.id !== id));
  }, []);

  // Calculations
  const totalIncomes = useMemo(() => incomes.reduce((acc, curr) => acc + curr.value, 0), [incomes]);
  const totalEssential = useMemo(() => essentialExpenses.reduce((acc, curr) => acc + curr.value, 0), [essentialExpenses]);
  const totalNonEssential = useMemo(() => nonEssentialExpenses.reduce((acc, curr) => acc + curr.value, 0), [nonEssentialExpenses]);
  const totalExpenses = useMemo(() => totalEssential + totalNonEssential, [totalEssential, totalNonEssential]);
  const netBalance = useMemo(() => totalIncomes - totalExpenses, [totalIncomes, totalExpenses]);
  const emergencyFund = useMemo(() => totalEssential * 6, [totalEssential]);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="min-h-screen pb-12 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Logo />
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Saldo Mensal</span>
              <span className={`text-xl font-bold ${netBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(netBalance)}
              </span>
            </div>
            <div className="h-10 w-px bg-slate-200 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Atualizado em</span>
              <span className="text-sm font-medium text-slate-700">
                {new Date().toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Incomes & Summary */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Income Table */}
          <section>
            <FinanceTable 
              title="Entradas / Ganhos"
              items={incomes}
              onUpdate={(id, field, value) => handleUpdate('ENTRADAS', id, field, value)}
              onAdd={() => handleAddRow('ENTRADAS')}
              onRemove={(id) => handleRemoveRow('ENTRADAS', id)}
            />
            <div className="mt-2 bg-yellow-400 p-3 rounded-lg flex justify-between items-center shadow-sm">
              <span className="font-bold text-xs md:text-sm text-black">TOTAL DE ENTRADAS</span>
              <span className="font-black text-lg text-black">{formatCurrency(totalIncomes)}</span>
            </div>
          </section>

          {/* Goal & Emergency Summary Card */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sobra Mensal Estimada</p>
                  <p className="text-xl font-bold text-slate-800">{formatCurrency(netBalance)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black text-white rounded-xl border border-black/5">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reserva de Emergência Ideal (6 meses)</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(emergencyFund)}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                * A reserva de emergência recomendada deve cobrir pelo menos 6 meses dos seus gastos essenciais ({formatCurrency(totalEssential)}/mês).
              </p>
            </div>
          </section>

          {/* Branding/Footer Mini */}
          <div className="hidden lg:flex flex-col items-center justify-center py-8 opacity-20 grayscale hover:grayscale-0 transition-all cursor-default">
             <Logo className="w-16 h-16 opacity-50" />
             <p className="text-xs font-bold mt-2">FINAN7 | PREMIUM CONTROL</p>
          </div>
        </div>

        {/* Right Column - Expenses */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Essential Expenses */}
          <section className="relative">
            <div className="absolute -left-6 top-12 bottom-4 w-1 bg-yellow-400 rounded-full hidden xl:block" />
            <FinanceTable 
              title="Despesas Essenciais"
              items={essentialExpenses}
              onUpdate={(id, field, value) => handleUpdate('ESSENCIAIS', id, field, value)}
              onAdd={() => handleAddRow('ESSENCIAIS')}
              onRemove={(id) => handleRemoveRow('ESSENCIAIS', id)}
            />
            <div className="mt-2 bg-slate-900 p-3 rounded-lg flex justify-between items-center text-white">
              <span className="font-bold text-xs uppercase tracking-tighter">SUBTOTAL ESSENCIAIS</span>
              <span className="font-black text-base">{formatCurrency(totalEssential)}</span>
            </div>
          </section>

          {/* Non-Essential Expenses */}
          <section className="relative">
             <div className="absolute -left-6 top-12 bottom-4 w-1 bg-slate-200 rounded-full hidden xl:block" />
            <FinanceTable 
              title="Despesas Não Essenciais"
              items={nonEssentialExpenses}
              onUpdate={(id, field, value) => handleUpdate('NAO_ESSENCIAIS', id, field, value)}
              onAdd={() => handleAddRow('NAO_ESSENCIAIS')}
              onRemove={(id) => handleRemoveRow('NAO_ESSENCIAIS', id)}
              bgColor="bg-slate-700"
            />
            <div className="mt-2 bg-slate-800 p-3 rounded-lg flex justify-between items-center text-white">
              <span className="font-bold text-xs uppercase tracking-tighter">SUBTOTAL NÃO ESSENCIAIS</span>
              <span className="font-black text-base">{formatCurrency(totalNonEssential)}</span>
            </div>
          </section>

          {/* Grand Total Footer */}
          <section className="bg-yellow-400 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg ring-4 ring-yellow-400/20">
            <div>
              <h4 className="font-black text-black text-xl uppercase tracking-tighter leading-none">Total Geral de Despesas</h4>
              <p className="text-black/60 text-xs mt-1 font-medium">Soma de todos os seus gastos mensais</p>
            </div>
            <div className="text-right">
               <span className="text-3xl font-black text-black">{formatCurrency(totalExpenses)}</span>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Mobile Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex items-center justify-between shadow-2xl z-40">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Sobra</span>
          <span className={`font-black ${netBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(netBalance)}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Total Gastos</span>
          <span className="font-black text-slate-900">{formatCurrency(totalExpenses)}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
