
export interface TechnicalCenter {
  id: string;
  name: string;
  location: string;
  status: 'READY' | 'WAIT' | 'BUSY';
  waitTime?: string;
  slots: number;
  tags: string[];
}

export interface Transaction {
  id: string;
  vehicle: string;
  service: string;
  amount: number;
  status: 'SETTLED' | 'PENDING' | 'CANCELLED';
  logo: string;
}

export type Language = 'es' | 'en' | 'it' | 'pt';

export enum Screen {
  DASHBOARD = 'dashboard',
  MAP = 'map',
  DETAIL = 'detail',
  LOGISTICS = 'logistics',
  TELEMETRY = 'telemetry',
  REVENUE = 'revenue',
  SETTINGS = 'settings'
}
