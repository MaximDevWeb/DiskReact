import { useAppSelector } from "../store/store";
import ToastsItem from "./ToastsItem";

/**
 * This is the Toasts list component.
 */

const Toasts = () => {
  /**
   * Get toasts list
   */
  const { toasts } = useAppSelector((state) => state.toasts);

  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <ToastsItem toast={toast} key={toast.id} />
      ))}
    </div>
  );
};

export default Toasts;
