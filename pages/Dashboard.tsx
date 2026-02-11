
import React from 'react';
import { Screen } from '../types';
import { useLanguage } from '../LanguageContext';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col p-5 space-y-6">
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Guía del Automotor</span>
          <h1 className="text-2xl font-extrabold flex items-center gap-2">
            {t('dashboard').toUpperCase()} <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] border border-primary/30 uppercase">Pro</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onNavigate(Screen.SETTINGS)}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"
          >
            <span className="material-icons text-primary">language</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 relative">
            <span className="material-icons text-slate-400">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full"></span>
          </button>
        </div>
      </header>

      <button className="w-full bg-danger hover:bg-red-600 active:scale-95 transition-all p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-danger/20 border-b-4 border-red-800">
        <div className="flex items-center gap-3 mb-1 text-white">
          <span className="material-icons text-3xl animate-pulse">emergency</span>
          <span className="text-3xl font-black tracking-tighter uppercase">{t('zero_hour')}</span>
        </div>
        <span className="text-xs font-bold text-white/90 uppercase tracking-[0.2em]">{t('road_assistance')}</span>
      </button>

      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
        <span className="material-icons text-primary">my_location</span>
        <div className="flex-1">
          <p className="text-[10px] text-slate-500 uppercase font-bold">{t('current_location')}</p>
          <p className="text-sm font-semibold">RN 9, Km 285, Rosario</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-green-500">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          LIVE GPS
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-dark p-4 rounded-xl border border-slate-800 hover:border-primary/50 transition-all group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20">
            <span className="material-icons text-primary">terminal</span>
          </div>
          <h3 className="font-bold text-sm">{t('diagnostics')}</h3>
          <p className="text-[10px] text-slate-500">Tele-descargas & ECU</p>
        </div>
        <div className="bg-surface-dark p-4 rounded-xl border border-slate-800 hover:border-safety/50 transition-all group">
          <div className="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-3 group-hover:bg-safety/20">
            <span className="material-icons text-safety">precision_manufacturing</span>
          </div>
          <h3 className="font-bold text-sm">{t('heavy_duty')}</h3>
          <p className="text-[10px] text-slate-500">Recupero de flota</p>
        </div>
        <div 
          onClick={() => onNavigate(Screen.MAP)}
          className="col-span-2 bg-surface-dark p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-primary/50 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">
            <span className="material-icons text-slate-300">map</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">{t('coverage_network')}</h3>
            <p className="text-[10px] text-slate-500">{t('verified_centers')}</p>
          </div>
          <span className="material-icons text-slate-500">chevron_right</span>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 flex justify-between items-center text-[10px] font-bold">
        <div className="flex items-center gap-2">
          <span className="material-icons text-sm text-primary">verified_user</span>
          GDA NETWORK ACTIVE
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 4G LIVE</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> TECHS: 142</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
