
import React from 'react';

interface ProviderDetailProps {
  onBack: () => void;
}

const ProviderDetail: React.FC<ProviderDetailProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
          <span className="material-icons">arrow_back_ios_new</span>
        </button>
        <div className="text-center">
          <p className="text-[8px] uppercase tracking-widest text-primary font-bold">GDA Verified</p>
          <h1 className="text-[10px] font-semibold uppercase flex items-center justify-center gap-1">
            <span className="material-icons text-sm">precision_manufacturing</span> Detalle Técnico
          </h1>
        </div>
        <button className="p-2 -mr-2 text-slate-400">
          <span className="material-icons">share</span>
        </button>
      </header>

      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUu1FXGP3cnCHSG6SMZfn53hECZvNOXJ3GiPifTQLzzSyKGxYomvuVa8DyimTP75EdGmIb8boldZ9ltVKQz0WUVxEsL2r7JzT8kvTA73wKBenUe1aHJAbqvJo0P6rt-hbjt7inKI8lugxG61UPsduPzBFwYH18MYnxLteohR8XX6tdEprXGzpJQ6UquZWi_LESrtueXObaK6Su79R2mtuJ_hAQXWRN2M7VBh4zZ-nb1OowDOikBvlrV6dcCxZnasGLwwuupBQC8HUL" 
          alt="Workshop" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-primary text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase">RTR Certified</span>
            <span className="bg-green-600 text-white text-[8px] font-bold px-2 py-0.5 rounded uppercase">Disponible</span>
          </div>
          <h2 className="text-2xl font-bold leading-tight">Diesel Tech Pro Santa Fe</h2>
          <p className="text-slate-400 text-xs flex items-center mt-1">
            <span className="material-icons text-xs mr-1 text-primary">location_on</span> RN 11, KM 452
          </p>
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 text-white p-2 rounded-lg text-center shadow-xl backdrop-blur-sm border border-white/20">
          <p className="text-[6px] font-black uppercase tracking-tighter opacity-80 leading-none mb-1">Latencia</p>
          <p className="text-lg font-mono font-bold leading-none">1.4m</p>
        </div>
      </div>

      <main className="p-4 space-y-6">
        <section className="bg-primary/10 border border-primary/20 rounded-lg p-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary">Logística de Crisis</h3>
            <span className="text-[8px] text-primary bg-primary/20 px-2 py-1 rounded-full font-mono">ETA Repuestos: 45m</span>
          </div>
          <div className="relative h-24 w-full rounded-md overflow-hidden bg-slate-800 mb-2 border border-slate-700">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwPKW52f0Bd173zi69QHGpsUiZiVN809HCwrCju1TL5ygTJWJdrcptY7iX7IEJhC71E5VXsiv-LF4_3wn2z9V8z7lwdBbLxsEfZUymfgbYE_CXTGFYG5RvMf3kQl7vTtT9eYpCRV3rA3-KzZ3I6narcUnfDNtJf5ot3WNuJ24SjsuKOK23gKPwmwY7fNNcrQ-lsayLmyWMURyKFijmICDQ7RuEifnJHhDaD0J9psVDEydu--DlIN9M7KdeOLZZYIT9nCBwlrLq6lqn" 
              className="w-full h-full object-cover opacity-40 grayscale"
              alt="Logistics Map"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="material-icons text-primary text-3xl animate-pulse">local_shipping</span>
                <span className="text-[8px] font-bold text-white bg-primary px-2 rounded-full mt-1">MÓVIL EN RUTA</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic leading-snug">Ruta crítica optimizada para despacho de inyectores desde centro regional.</p>
        </section>

        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3 border-l-2 border-primary pl-2">Arsenal de Diagnóstico</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Scanner Pesado', name: 'Bosch ESI[tronic]', status: 'Actualizado', icon: 'check_circle' },
              { label: 'Gestión Cummins', name: 'Insite™ v8.9', status: 'Link Directo', icon: 'bolt' },
              { label: 'Multi-Marca', name: 'Autel Maxisys CV', status: 'Euro 6 Ready', icon: 'verified' },
              { label: 'Elevación', name: '45 Toneladas', status: 'Fosa Hidráulica', icon: 'construction' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-xl relative overflow-hidden group">
                <p className="text-[8px] text-slate-500 font-bold uppercase">{item.label}</p>
                <p className="text-xs font-bold mt-0.5">{item.name}</p>
                <div className="mt-2 flex items-center text-[9px] text-emerald-500">
                  <span className="material-icons text-[12px] mr-1">{item.icon}</span> {item.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3 border-l-2 border-primary pl-2">Stock Crítico</h3>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-[10px]">
              <thead className="bg-slate-800 text-slate-400 uppercase tracking-tighter">
                <tr>
                  <th className="px-3 py-2">Componente</th>
                  <th className="px-3 py-2">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr><td className="px-3 py-3">Inyectores Bosch</td><td className="px-3 py-3 font-bold text-emerald-500">DISP (4)</td></tr>
                <tr><td className="px-3 py-3">Bomba de Agua Scania</td><td className="px-3 py-3 font-bold text-amber-500">BAJO STOCK</td></tr>
                <tr><td className="px-3 py-3">Filtros Fleetguard</td><td className="px-3 py-3 font-bold text-emerald-500">STOCK FULL</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-4 bg-background-dark/95 backdrop-blur-xl border-t border-slate-800 flex gap-3 z-50">
        <button className="flex-1 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-primary/30">
          <span className="material-icons text-xl">support_agent</span>
          <span>CONEXIÓN DIRECTA</span>
        </button>
        <button className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 border border-slate-700">
          <span className="material-icons text-2xl">near_me</span>
        </button>
      </div>
    </div>
  );
};

export default ProviderDetail;
