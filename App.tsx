
import React, { useState } from 'react';
import { Screen } from './types';
import Dashboard from './pages/Dashboard';
import MapScreen from './pages/MapScreen';
import ProviderDetail from './pages/ProviderDetail';
import Logistics from './pages/Logistics';
import Telemetry from './pages/Telemetry';
import Revenue from './pages/Revenue';
import Settings from './pages/Settings';
import BottomNav from './components/BottomNav';
import { LanguageProvider } from './LanguageContext';

const AppContent: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD:
        return <Dashboard onNavigate={setCurrentScreen} />;
      case Screen.MAP:
        return <MapScreen onNavigate={setCurrentScreen} />;
      case Screen.DETAIL:
        return <ProviderDetail onBack={() => setCurrentScreen(Screen.MAP)} />;
      case Screen.LOGISTICS:
        return <Logistics />;
      case Screen.TELEMETRY:
        return <Telemetry />;
      case Screen.REVENUE:
        return <Revenue />;
      case Screen.SETTINGS:
        return <Settings onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-background-dark relative flex flex-col overflow-hidden border-x border-slate-800 shadow-2xl">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderScreen()}
      </div>
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
