
import React from 'react';
import { FinanceItem } from '../types';

interface FinanceTableProps {
  title: string;
  items: FinanceItem[];
  onUpdate: (id: string, field: 'description' | 'value', value: string | number) => void;
  onAdd?: () => void;
  onRemove?: (id: string) => void;
  bgColor?: string;
}

const FinanceTable: React.FC<FinanceTableProps> = ({ 
  title, 
  items, 
  onUpdate, 
  onAdd, 
  onRemove,
  bgColor = "bg-black"
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
      <div className={`${bgColor} text-white px-4 py-3 flex justify-between items-center`}>
        <h3 className="font-bold tracking-wider uppercase text-sm md:text-base">{title}</h3>
        {onAdd && (
          <button 
            onClick={onAdd}
            className="text-xs bg-white/20 hover:bg-white/30 transition-colors px-2 py-1 rounded font-semibold uppercase"
          >
            + Adicionar
          </button>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-yellow-400 text-black font-bold uppercase text-[10px] md:text-xs">
            <tr>
              <th className="px-4 py-2 w-2/3 border-r border-yellow-500/30">DESCRIÇÃO</th>
              <th className="px-4 py-2 w-1/3 text-right">VALOR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-slate-50/80 transition-colors">
                <td className="px-3 py-1.5 border-r border-slate-100 relative">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => onUpdate(item.id, 'description', e.target.value)}
                      className="w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400/50 rounded px-1 py-0.5"
                    />
                    {onRemove && (
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity p-1"
                        title="Remover"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-3 py-1.5 text-right font-medium text-slate-700">
                  <div className="flex items-center justify-end">
                    <span className="text-slate-400 mr-1">R$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={item.value || ''}
                      placeholder="0,00"
                      onChange={(e) => onUpdate(item.id, 'value', parseFloat(e.target.value) || 0)}
                      className="w-24 bg-transparent text-right focus:outline-none focus:ring-1 focus:ring-yellow-400/50 rounded px-1 py-0.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceTable;
