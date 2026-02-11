
import React from 'react';

const Telemetry: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark p-6 space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-xs font-bold tracking-widest text-primary uppercase">GDA Telemetry</h1>
          <p className="text-xl font-bold">Porsche 911 GT3 <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-2">LIVE</span></p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-500 uppercase">System Health</p>
          <p className="text-sm font-bold text-emerald-500">94.2%</p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-dark/50 p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
          <div className="w-full flex justify-between text-[8px] font-bold text-slate-500 uppercase mb-4">
             <span>Thermal Load</span>
             <span className="material-icons text-sm text-primary">thermostat</span>
          </div>
          <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border-4 border-t-safety border-r-safety border-b-transparent border-l-transparent rotate-45"></div>
             <div className="text-center">
                <span className="text-2xl font-bold">78</span><span className="text-xs">%</span>
             </div>
          </div>
          <div className="mt-4 w-full flex justify-between text-[8px] font-mono text-slate-500">
             <span>MIN 62°C</span>
             <span>MAX 105°C</span>
          </div>
        </div>

        <div className="bg-surface-dark/50 p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
          <div className="w-full flex justify-between text-[8px] font-bold text-slate-500 uppercase mb-4">
             <span>Fluid Quality</span>
             <span className="material-icons text-sm text-primary">opacity</span>
          </div>
          <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-l-transparent -rotate-45"></div>
             <div className="text-center">
                <span className="text-2xl font-bold">88</span><span className="text-xs">vI</span>
             </div>
          </div>
          <div className="mt-4 w-full flex justify-between text-[8px] font-mono text-slate-500 uppercase">
             <span>Optimal</span>
             <span className="text-emerald-500">Stable</span>
          </div>
        </div>
      </section>

      <div className="bg-surface-dark border border-slate-800 rounded-2xl p-5">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">TPMS - Tire Monitoring</h3>
        <div className="flex justify-between items-center px-4">
          <div className="space-y-12 text-right">
             <div><p className="text-lg font-bold">32.4 <span className="text-xs text-slate-500">psi</span></p><p className="text-[8px] font-bold text-emerald-500 uppercase">FL</p></div>
             <div><p className="text-lg font-bold">34.1 <span className="text-xs text-slate-500">psi</span></p><p className="text-[8px] font-bold text-emerald-500 uppercase">RL</p></div>
          </div>
          <div className="w-24 opacity-30 invert">
            <img src="https://picsum.photos/id/111/100/200" alt="Vehicle" className="w-full grayscale"/>
          </div>
          <div className="space-y-12 text-left">
             <div><p className="text-lg font-bold">32.2 <span className="text-xs text-slate-500">psi</span></p><p className="text-[8px] font-bold text-emerald-500 uppercase">FR</p></div>
             <div><p className="text-lg font-bold text-safety">30.8 <span className="text-xs text-slate-500">psi</span></p><p className="text-[8px] font-bold text-safety uppercase">RR</p></div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4">
         <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
            <span className="material-icons">landscape</span>
         </div>
         <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-bold leading-none">Altitude Risk Detected</p>
              <span className="text-[8px] font-bold bg-safety/20 text-safety px-2 rounded">MODERATE</span>
            </div>
            <p className="text-xs text-slate-500 leading-tight">Current elevation (2,400m) may trigger Lean Mixture Compensation.</p>
         </div>
      </div>
    </div>
  );
};

export default Telemetry;
