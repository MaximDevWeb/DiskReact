export type MenuItem = {
  name: string;
  link: string;
  icon: string;
};

export type Breadcrumbs = {
  link?: string;
  name: string;
};

export type LoaderData = {
  title?: string;
  dev?: boolean;
};

export type Confirm = {
  message: string;
  callback: Function | null;
  callbackArgs: any;
  visible: boolean;
};

export type ConfirmProps = {
  message: string;
  callback: Function;
  callbackArgs?: any;
};

export type InputSwitchItem = {
  value: string;
  icon: string;
  id?: string;
};

export type InputSelectItem = {
  value: string;
  name: string;
};
