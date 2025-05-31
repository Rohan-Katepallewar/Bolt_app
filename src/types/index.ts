export interface Quote {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface BarData {
  label: string;
  value: number;
  color: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}