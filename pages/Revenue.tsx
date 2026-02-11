
import React from 'react';
import { Transaction } from '../types';

const TRANSACTIONS: Transaction[] = [
  { id: '1', vehicle: 'Toyota Hilux SRX', service: 'Emergency Response', amount: 320.00, status: 'SETTLED', logo: 'https://picsum.photos/id/1/50/50' },
  { id: '2', vehicle: 'VW Amarok V6', service: 'Telecarga/Diagnostics', amount: 185.00, status: 'SETTLED', logo: 'https://picsum.photos/id/2/50/50' },
  { id: '3', vehicle: 'Ford Ranger XLT', service: 'Parts: Brake Pads', amount: 442.50, status: 'PENDING', logo: 'https://picsum.photos/id/3/50/50' },
];

const Revenue: React.FC = () => {
  return (
    <div className="p-6 space-y-8 bg-background-dark min-h-screen">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Revenue Reports</h1>
        <p className="text-xs text-slate-500 font-medium">Workshop ID: #GDA-8829</p>
      </header>

      <div className="flex p-1 bg-slate-800 rounded-lg">
        {['7D', '30D', '90D', 'Year'].map((p, i) => (
          <button key={p} className={`flex-1 py-1.5 text-xs font-bold rounded-md ${i === 0 ? 'bg-primary text-white' : 'text-slate-500'}`}>
            {p}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-surface-dark border border-slate-800">
          <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Total Earnings</p>
          <div className="text-2xl font-bold">$12,450</div>
          <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-safety">
            <span className="material-icons text-xs">trending_up</span> +12.5%
          </div>
        </div>
        <div className="p-4 rounded-xl bg-surface-dark border border-slate-800">
          <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Completed</p>
          <div className="text-2xl font-bold">42 <span className="text-xs text-slate-500">jobs</span></div>
          <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-primary">
            <span className="material-icons text-xs">check_circle</span> On Target
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-surface-dark border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold">Performance Trend</h3>
          <span className="material-icons text-slate-500 text-sm">info</span>
        </div>
        <div className="h-32 w-full flex items-end justify-between gap-2">
          {[40, 60, 55, 85, 45, 70, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group">
              <div 
                className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ${i === 3 ? 'bg-primary' : 'bg-primary/40'}`} 
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
        </div>
      </div>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Recent Transactions</h3>
          <button className="text-xs font-semibold text-primary">View All</button>
        </div>
        <div className="space-y-3">
          {TRANSACTIONS.map(tx => (
            <div key={tx.id} className="flex items-center gap-4 p-3 rounded-xl bg-surface-dark border border-slate-800">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img src={tx.logo} alt={tx.vehicle} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold">{tx.vehicle}</h4>
                <p className="text-[10px] text-slate-500 uppercase font-medium">{tx.service}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">${tx.amount.toFixed(2)}</p>
                <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase ${tx.status === 'SETTLED' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="w-full bg-primary py-4 rounded-xl text-white font-bold text-sm shadow-xl shadow-primary/20">
        Export for Tax Purposes
      </button>
    </div>
  );
};

export default Revenue;
