
import React from 'react';

const Logistics: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
      <header className="p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold uppercase tracking-tight">Logística Zero Hour</h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-primary font-bold">Real-time Tracking</p>
        </div>
        <button className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <div className="h-48 bg-slate-900 relative overflow-hidden">
         <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtH7qllMPAOBlgF4pwLTszIIPT635u1vwtd_BT6bPFrwazVkWGl5W1oSHfM57u4H63jn7P_U8sAPSifbMDpbzW0lflJFwIG2sC3ywt4PmSHXZqhKv2z4RtusO-_xdj0cWqzksLN27qBNNSkgTgNDv3l4FnLpRFq_b1OMRwB4ObCH0aTp54mkqAP4-ScQ6ERhEjoRzjuAcZM0cdQjifWRAs895A27lNqrBoyoqf4UFjnAWW-FaIhrlCjlAl6zEO0oZZV5ILuVoDxzHO" 
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Tracking map"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 animate-bounce">
              <span className="material-icons text-white text-3xl">local_shipping</span>
            </div>
            <div className="mt-2 bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-black border border-primary text-primary">
              EN MOVIMIENTO
            </div>
          </div>
        </div>
      </div>

      <main className="p-6 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
           <div className="flex justify-between items-start mb-6">
              <div>
                <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Prioridad Alta</span>
                <h2 className="text-2xl font-bold mt-1">Inyector Bosch v4</h2>
                <p className="text-slate-500 text-[10px] font-medium uppercase mt-0.5">Ref: #GDA-88291-BA</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none">ETA</p>
                <p className="text-3xl font-black text-primary">12 <span className="text-sm">min</span></p>
              </div>
           </div>

           <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                <img 
                  src="https://picsum.photos/id/64/100/100" 
                  alt="Courier" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight">Especialista GDA</p>
                <h3 className="font-bold">Rodrigo M.</h3>
                <p className="text-[10px] text-primary font-bold">★ 4.9 <span className="text-slate-500 font-normal ml-1">Renault Master</span></p>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary/20 text-primary p-2 rounded-full"><span className="material-icons text-sm">chat</span></button>
                <button className="bg-primary text-white p-2 rounded-full"><span className="material-icons text-sm">call</span></button>
              </div>
           </div>

           <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-10 bg-slate-800"></div>
                  <div className="w-2 h-2 rounded-full border border-primary"></div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-[8px] font-bold text-slate-500 uppercase">Origen</p>
                    <p className="text-xs font-semibold">Depósito GDA Oeste</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-primary uppercase">Entrega</p>
                    <p className="text-xs font-semibold">RN 9, Km 285 (Su Ubicación)</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Logistics;
