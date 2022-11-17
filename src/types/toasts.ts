export enum ToastType {
  default = "DEFAULT",
  success = "SUCCESS",
  danger = "DANGER",
}

export type Toast = {
  id: string;
  type: ToastType;
  message: string;
};
