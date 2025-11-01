export type ConfigType = 'encode' | 'decode' | 'compose' | 'decompose';

export interface URLParam {
  [key: string]: string | number | boolean | null | undefined;
}

export interface URLNode {
  id: string;
  url?: string;
  level: number;
  params?: URLParam[];
  children?: URLNode[];
}
