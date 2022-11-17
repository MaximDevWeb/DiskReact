export type LoginData = {
  email: string;
  password: string;
  remember: boolean;
};

export type RegisterData = {
  email: string;
  name: string;
  password: string;
  confirm: string;
  accept: boolean;
};

export type ForgotData = {
  email: string;
};

export type PasswordData = {
  email: string;
  password: string;
  confirm: string;
  token: string;
};

export type ConfirmData = {
  email: string;
  code: string;
};

export type EventData = {
  value: any;
  name: string;
};

export type ErrorsData = {
  email?: Array<string>;
  name?: Array<string>;
  password?: Array<string>;
  confirm?: Array<string>;
  accept?: Array<string>;
  code?: Array<string>;
  [key: string]: any;
};
