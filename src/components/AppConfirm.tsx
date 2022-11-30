import { useAppDispatch, useAppSelector } from "../store/store";
import { closeConfirm } from "../store/reducers/AppSlice";

/**
 * This is the AppConfirm component.
 */

const AppConfirm = () => {
  const { confirm } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  /**
   * The function run confirm callback
   */
  const confirmAccept = () => {
    if (confirm.callback) {
      confirm.callback(confirm.callbackArgs);
    }

    dispatch(closeConfirm());
  };

  /**
   * The function close confirm
   */
  const confirmReset = () => {
    dispatch(closeConfirm());
  };

  return (
    <>
      <aside
        className={"confirm " + (confirm.visible ? "confirm__active" : "")}
      >
        <div className="confirm__content">
          <div className="confirm__header">
            <h3>{confirm.message}</h3>
          </div>

          <div className="confirm__footer">
            <button className="btn" onClick={confirmReset}>
              Cancel
            </button>
            <button className="btn btn_default" onClick={confirmAccept}>
              Confirm
            </button>
          </div>
        </div>
        <div className="confirm__bg"></div>
      </aside>
    </>
  );
};

export default AppConfirm;
