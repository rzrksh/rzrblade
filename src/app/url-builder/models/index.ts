export type ConfigType = 'encode' | 'decode' | 'compose' | 'decompose';

export interface URLParam {
  key: string;
  value: string;
  id: string;
  isUrl: boolean;
}

export interface URLNode {
  id: string;
  baseUrl?: string;
  level: number;
  params?: URLParam[];
  hash?: string;
  parentURLParam: string;
  children?: Array<URLNode | null>;
}
