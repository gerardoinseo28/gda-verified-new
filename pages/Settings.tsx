
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

interface SettingsProps {
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const { language, setLanguage, t } = useLanguage();

  const languageOptions: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇦🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
      <header className="px-4 py-4 flex items-center border-b border-primary/10 bg-background-dark sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-primary">
          <span className="material-icons">arrow_back_ios</span>
        </button>
        <h1 className="text-xl font-bold flex-grow text-center pr-8">{t('settings')}</h1>
      </header>

      <main className="p-4 space-y-8">
        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-primary/70 uppercase px-2 mb-3">{t('language_region')}</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {languageOptions.map((lang) => (
              <button 
                key={lang.code} 
                onClick={() => setLanguage(lang.code)}
                className={`w-full flex items-center justify-between p-4 border-b border-slate-800 last:border-0 transition-colors ${language === lang.code ? 'bg-primary/10' : 'hover:bg-slate-800'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">{lang.flag}</span>
                  <span className={`font-medium ${language === lang.code ? 'text-white' : 'text-slate-400'}`}>{lang.label}</span>
                </div>
                {language === lang.code && <span className="material-icons text-primary animate-in fade-in zoom-in duration-300">check_circle</span>}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-primary/70 uppercase px-2 mb-3">{t('system_prefs')}</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-800">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">{t('units')}</span>
                <span className="text-xs text-primary font-bold">Metric</span>
              </div>
              <div className="bg-background-dark p-1 rounded-lg flex">
                <button className="flex-1 py-2 rounded-md bg-primary text-white text-[10px] font-bold uppercase">Metric (km, °C)</button>
                <button className="flex-1 py-2 rounded-md text-slate-500 text-[10px] font-bold uppercase">Imperial (mi, °F)</button>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-icons text-primary">warning_amber</span>
                <div>
                  <p className="text-sm font-medium">{t('emergency_alerts')}</p>
                  <p className="text-[10px] text-slate-500 tracking-tight">Priority bypass for Zero Hour dispatches</p>
                </div>
              </div>
              <div className="w-11 h-6 bg-primary rounded-full relative">
                <div className="absolute top-1 left-6 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 flex gap-4">
          <span className="material-icons text-primary">verified_user</span>
          <div>
            <h3 className="text-xs font-bold">Verified Technical Capacity</h3>
            <p className="text-[10px] text-slate-500 mt-1">Settings optimized for the Argentinian road network.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
