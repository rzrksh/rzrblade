export type ConfigType = 'encdec' | 'compose' | 'template';

export interface URLParam {
  key: string;
  value: string;
  id: string;
  isUrl: boolean;
}

export interface URLNode {
  id: string;
  url: string;
  baseUrl: string;
  level: number;
  params: URLParam[];
  hash: string;
  parentURLParam: string;
  children: Array<URLNode | null>;
}
