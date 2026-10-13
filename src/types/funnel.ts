export type StepType = 
  | 'traffic' 
  | 'page' 
  | 'conversion' 
  | 'checkout' 
  | 'upsell' 
  | 'followup' 
  | 'outcome';

export interface FunnelStep {
  id: string;
  titleAr: string;
  titleEn: string;
  type: StepType;
  descriptionAr: string;
  isPrimary?: boolean;
  benchmarkRate?: string;
  tacticalTip?: string;
  subItems?: string[];
  branchTo?: string; // e.g. "upsell" or "downsell" or "email-sequence"
  branchLabel?: string;
}

export interface FunnelMapData {
  number: number;
  id: string;
  nameAr: string;
  nameEn: string;
  tagline: string;
  category: string;
  complexity: 'مبتدئ' | 'متوسط' | 'متقدم';
  estimatedTimeToLaunch: string;
  goal: string;
  bestFor: string;
  trafficSources: string[];
  steps: FunnelStep[];
  whyItWorks: string[];
  whenToUse: string;
  commonMistake: string;
  implementationNote: string;
  keyMetric: string;
}

export interface FunnelCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  funnelCount: number;
  iconName: string;
  colorAccent?: string;
}

export interface SelectionMatrixItem {
  number: number;
  nameAr: string;
  nameEn: string;
  goalAr: string;
  complexity: 'سهل' | 'متوسط' | 'متقدم';
  speedToLaunch: string;
  bestTraffic: string;
  isBeginnerFriendly: boolean;
  salesDirectness: 'مباشر' | 'غير مباشر' | 'هجين';
}
