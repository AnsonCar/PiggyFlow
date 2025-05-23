type TAuth = {
  token: string | undefined;
  refresh: string | undefined;
};

type TTPSidebar = {
  text?: string;
  items: TTPSidebarItem[];
};

type TTPSidebarItem = {
  text: string;
  name: string;
  items?: TTTPSidebar[];
};

type TTransactionTableFormData = {
  [key: string]: {
    uuid: string;
    user_uuid: string;
    datetime: string;
    label: string;
    price: number;
  }[];
};

type TransactionDisplay = {
  date: string;
  total: number;
  item: {
    datetime: string;
    label: string;
    price: number;
    uuid: string;
  }[];
};

type TTodoTableFormData = {
  [key: string]: {
    uuid: string;
    user_uuid: string;
    datetime: string;
    label: string;
    done: boolean;
  }[];
};

type TodoDisplay = {
  date: string;
  total: number;
  item: {
    datetime: string;
    label: string;
    done: boolean;
    uuid: string;
  }[];
};
