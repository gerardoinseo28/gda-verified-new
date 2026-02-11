
import React from 'react';
import { Screen } from '../types';
import { useLanguage } from '../LanguageContext';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const { t } = useLanguage();
  
  const navItems = [
    { id: Screen.DASHBOARD, label: t('home'), icon: 'dashboard' },
    { id: Screen.MAP, label: t('map'), icon: 'explore' },
    { id: Screen.LOGISTICS, label: t('logistics'), icon: 'local_shipping' },
    { id: Screen.TELEMETRY, label: t('telemetry'), icon: 'analytics' },
    { id: Screen.REVENUE, label: t('revenue'), icon: 'payments' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-background-dark/95 backdrop-blur-xl border-t border-slate-800 px-6 py-3 pb-8 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentScreen === item.id ? 'text-primary' : 'text-slate-500'
          }`}
        >
          <span className="material-icons">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
        </button>
      ))}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full"></div>
    </nav>
  );
};

export default BottomNav;
