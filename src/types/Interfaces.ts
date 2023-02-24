export interface Picture {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
  liked?: boolean;
}

export type SelectOption = {
  label: string;
  value: string | number;
};

export interface Theme {
  lightTheme: boolean;
  setLightTheme: any;
}
