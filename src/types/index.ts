export type TabId = 
  | 'report' 
  | 'introduction' 
  | 'trends' 
  | 'today' 
  | 'tomorrow' 
  | 'funding' 
  | 'appendices';

export interface PlanGoal {
  id: string;
  number: number;
  title: string;
  description: string;
  iconName: string;
  badgeBg: string;
  accentColor: string;
  metrics: {
    label: string;
    target: string;
    benchmark: string;
  }[];
  details: string;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  text: string[];
  callout?: {
    type: 'info' | 'stat' | 'highlight';
    title: string;
    content: string;
  };
  hasInteractiveFigure?: 'figure1_map' | 'demographics_chart' | 'commuter_flow' | 'funding_breakdown';
  tableData?: {
    title: string;
    headers: string[];
    rows: (string | number)[][];
    source?: string;
  };
}

export interface ChapterData {
  id: TabId;
  chapterNumber?: number;
  title: string;
  fullTitle: string;
  subtitle: string;
  pdfFilename: string;
  sections: SectionContent[];
}
