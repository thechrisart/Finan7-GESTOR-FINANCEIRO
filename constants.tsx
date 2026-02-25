
import React from 'react';
import { FinanceItem } from './types';

export const DEFAULT_INCOMES: FinanceItem[] = [
  { id: 'inc-1', description: 'Net Salary (Person 01)', value: 0 },
  { id: 'inc-2', description: 'Food Allowance (Person 01)', value: 0 },
  { id: 'inc-3', description: 'Meal Allowance (Person 01)', value: 0 },
  { id: 'inc-4', description: 'Net Salary (Person 02)', value: 0 },
  { id: 'inc-5', description: 'Food Allowance (Person 02)', value: 0 },
  { id: 'inc-6', description: 'Meal Allowance (Person 02)', value: 0 },
  { id: 'inc-7', description: 'Other Income 01 (Freelance, Side Hustle...)', value: 0 },
  { id: 'inc-8', description: 'Other Income 02 (Commissions, Bonuses...)', value: 0 },
  { id: 'inc-9', description: 'Other Income 03 (Rent, Classes...)', value: 0 },
];

export const DEFAULT_ESSENTIAL_EXPENSES: FinanceItem[] = [
  { id: 'ess-1', description: 'Housing (Rent/Mortgage)', value: 0 },
  { id: 'ess-2', description: 'Condo Fees', value: 0 },
  { id: 'ess-3', description: 'Groceries', value: 0 },
  { id: 'ess-4', description: 'Water', value: 0 },
  { id: 'ess-5', description: 'Electricity', value: 0 },
  { id: 'ess-6', description: 'Gas', value: 0 },
  { id: 'ess-7', description: 'Property Tax', value: 0 },
  { id: 'ess-8', description: 'Health Insurance', value: 0 },
  { id: 'ess-9', description: 'Life Insurance', value: 0 },
  { id: 'ess-10', description: 'Investments (Mandatory!)', value: 0 },
];

export const DEFAULT_NON_ESSENTIAL_EXPENSES: FinanceItem[] = [
  { id: 'non-1', description: 'Credit Card', value: 0 },
  { id: 'non-2', description: 'Fuel / Gas', value: 0 },
  { id: 'non-3', description: 'Pharmacy', value: 0 },
  { id: 'non-4', description: 'Pet Expenses', value: 0 },
  { id: 'non-5', description: 'Unexpected Expenses', value: 0 },
  { id: 'non-6', description: 'Transport (Bus/Uber)', value: 0 },
  { id: 'non-7', description: 'Vehicle Maintenance', value: 0 },
  { id: 'non-8', description: 'Home Internet', value: 0 },
  { id: 'non-9', description: 'Streaming (Netflix/Amazon/Disney+)', value: 0 },
  { id: 'non-10', description: 'Leisure (Cinema/Dining Out)', value: 0 },
];
