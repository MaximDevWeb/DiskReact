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
