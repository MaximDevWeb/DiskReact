import Icon from "./icon/Icon";
import { ReactNode, MouseEvent } from "react";

/**
 * This is the ModalBox component.
 *
 * @property title - The title for the modal.
 * @property visible - The visible for the modal.
 * @property nameSlot - The slots for the modal.
 */

type Props = {
  title: string;
  visible: boolean;
  bodySlot: ReactNode;
  footerSlot: ReactNode;
  closeModal: Function;
};

const ModalBox = ({
  title,
  visible,
  bodySlot,
  footerSlot,
  closeModal,
}: Props) => {
  const close = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <aside className={`modal ${visible ? "modal__active" : ""}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h2>{title}</h2>

          <a href="#" className="modal__close" onClick={close}>
            <Icon type="close" />
          </a>
        </div>

        <div className="modal__body">{bodySlot}</div>
        <div className="modal__footer">{footerSlot}</div>
      </div>

      <div className="modal__bg"></div>
    </aside>
  );
};

export default ModalBox;
