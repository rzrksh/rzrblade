export type ConfigType = 'encode' | 'decode' | 'compose' | 'decompose';

export interface URLParam {
  [key: string]: string;
}

export interface URLNode {
  id: string;
  url?: string;
  baseUrl?: string;
  level: number;
  params?: URLParam[];
  children?: URLNode[];
}
