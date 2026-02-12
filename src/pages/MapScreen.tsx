
import React from 'react';
import { Screen, TechnicalCenter } from '../types';

interface MapScreenProps {
  onNavigate: (screen: Screen) => void;
}

const MOCK_CENTERS: TechnicalCenter[] = [
  { id: '1', name: 'Taller Norte GDA - Km 245', location: 'RN 34, Rafaela, Santa Fe', status: 'READY', slots: 3, tags: ['Hardware OK', 'Telecarga', 'Heavy Torque'] },
  { id: '2', name: 'Servicios Vía Láctea', location: 'RN 34, Sunchales (Km 280)', status: 'WAIT', waitTime: '2HR WAIT', slots: 0, tags: ['Hardware OK', 'Heavy Duty'] },
];

const MapScreen: React.FC<MapScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark">
      <div className="h-[50vh] relative w-full bg-slate-900 overflow-hidden">
        {/* Mock Map View */}
        <div className="absolute inset-0 grayscale opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm1VuXKKLJcM0-paNSl83lMUR5TlnZkDSkviUqU0XT2zrTfoKc-qEkYoPIi6l-HqYHCuiA6o4bBBFkkLc_xi_milsY9IgwexDmyXPQX0HGvyL7BkbwSi5QFvZqRW6ZTvIp_NAP2LPHNogahDER-WKYXj0lVf4F3eX1K_xKQtBW7OTlsBFMvooP3eE4iG-quOtExdOUpiyBU5hfBAo85g_TjomRVboc6f3p0B7wbkzCz4LRfBKqoXNXmO9_0bTFNBu323gQsqg5IVXd" 
            className="w-full h-full object-cover" 
            alt="Road map of Argentina"
          />
        </div>
        
        {/* Map Overlays */}
        <header className="absolute top-0 left-0 right-0 z-20 p-4 space-y-3 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="bg-background-dark/95 backdrop-blur-md shadow-lg rounded-xl flex-1 flex items-center px-3 py-2 border border-slate-700">
              <span className="material-icons text-primary mr-2">route</span>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase font-bold text-slate-500">Ruta Actual</span>
                <span className="text-xs font-semibold truncate">RN 34 - Technical Coverage</span>
              </div>
            </div>
            <button className="bg-primary text-white p-3 rounded-xl shadow-lg pointer-events-auto">
              <span className="material-icons">tune</span>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pointer-events-auto pb-2">
            {['Scanners', 'Trucks', 'Torque', 'Telecarga'].map(tag => (
              <button key={tag} className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap">
                {tag}
              </button>
            ))}
          </div>
        </header>

        {/* Pin */}
        <div className="absolute top-[45%] left-[40%] group pointer-events-auto">
          <div 
            onClick={() => onNavigate(Screen.DETAIL)}
            className="bg-primary p-2 rounded-full border-2 border-white shadow-xl cursor-pointer hover:scale-110 transition-transform"
          >
            <span className="material-icons text-white text-xs">build</span>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-background-dark text-white px-2 py-1 rounded text-[8px] font-bold whitespace-nowrap">
            GDA Km 245
          </div>
        </div>

        <div className="absolute bottom-10 left-4 right-4 flex justify-between items-end pointer-events-none">
          <div className="bg-background-dark/80 backdrop-blur-sm p-2 rounded text-white text-[8px] flex items-center gap-1 pointer-events-auto">
            <span className="material-icons text-[12px]">update</span> hace 4 min
          </div>
          <button className="bg-white p-3 rounded-full shadow-lg pointer-events-auto">
            <span className="material-icons text-primary">my_location</span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-background-dark rounded-t-3xl -mt-6 z-30 p-4 border-t border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-6"></div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Centros Verificados</h2>
          <span className="text-xs font-bold text-primary">{MOCK_CENTERS.length} Resultados</span>
        </div>

        <div className="space-y-3">
          {MOCK_CENTERS.map(center => (
            <div 
              key={center.id}
              onClick={() => onNavigate(Screen.DETAIL)}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-sm leading-tight">{center.name}</h3>
                  <div className="flex items-center gap-1 text-slate-500 text-[10px] mt-1">
                    <span className="material-icons text-[12px]">place</span> {center.location}
                  </div>
                </div>
                {center.status === 'READY' ? (
                  <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-1 rounded text-[9px] font-black flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> READY NOW
                  </div>
                ) : (
                  <div className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-1 rounded text-[9px] font-black flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> {center.waitTime}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {center.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 uppercase">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="text-[9px] font-bold">
                  <span className="text-slate-500 uppercase block mb-0.5">Idle Capacity</span>
                  {center.slots > 0 ? `${center.slots} Available Slots` : 'Queue Only'}
                </div>
                <button className="bg-primary text-white text-[10px] font-black py-2 px-4 rounded-lg uppercase">
                  Solicitar SOS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapScreen;
