import { Toast, ToastType } from "../types/toasts";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { removeToast } from "../store/reducers/ToastsSlice";
import Icon from "./icon/Icon";

/**
 * This is the ToastsItem component.
 *
 * @property toast - The toast data.
 */

type Props = {
  toast: Toast;
};

const ToastsItem = ({ toast }: Props) => {
  const [cls, setCls] = useState("");
  const id = useRef<ReturnType<typeof setTimeout>>();

  const dispatch = useAppDispatch();

  /**
   * Computed class type for toast
   */
  useEffect(() => {
    switch (toast.type) {
      case ToastType.danger:
        setCls("toast_danger");
        break;
      case ToastType.success:
        setCls("toast_success");
        break;
    }
  }, [toast]);

  /**
   * Remove a toast after a delay
   */
  useEffect(() => {
    id.current = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, 10000);
  });

  /**
   * Manual remove a toast
   */
  const removeHandler = () => {
    dispatch(removeToast(toast.id));
  };

  return (
    <div className={"toast " + cls}>
      <div className="toast__content">{toast.message}</div>

      <div role="button" onClick={removeHandler}>
        <Icon type="close" />
      </div>
    </div>
  );
};

export default ToastsItem;
