type TAlert = {
  alertList: TAlertItem[];
  timeout: number;
};

type TAlertItem = {
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
  uuid?: string;
  timeLog?: string;
};

type TAlertInputItem = {
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
};
