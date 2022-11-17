import { NavigateFunction } from "react-router-dom";

export type MiddlewareType = {
  rule(data?: any): void;
  action(): void;
};
