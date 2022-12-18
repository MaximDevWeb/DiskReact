import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect, useState } from "react";
import InputText from "./InputText";
import { EventData } from "../types/auth";
import ModalBox from "./ModalBox";
import { setEditFile, setModalFileVisible } from "../store/reducers/FilesSlice";
import { useUpdateFileMutation } from "../store/services/Files";

/**
 * This is the ModalFile component.
 */

const ModalFile = () => {
  const dispatch = useAppDispatch();
  const { editFile: file, modalFileVisible } = useAppSelector(
    (state) => state.files
  );
  const [updateFile, { isLoading: saving, isSuccess: saved }] =
    useUpdateFileMutation();
  const [fileName, setFileName] = useState("");
  const [fileExt, setExtFile] = useState("");

  /**
   * Monitor update of editFile
   */
  useEffect(() => {
    setFileName(file?.name.split(".").slice(0, -1).join(".") ?? "");
    setExtFile(file?.name.split(".").pop() ?? "");
  }, [file]);

  /**
   * Monitor update file name
   */
  useEffect(() => {
    dispatch(setModalFileVisible(false));
    dispatch(setEditFile(null));
  }, [saved]);

  /**
   * The function close modal folder
   */
  const closeModal = (): void => {
    dispatch(setModalFileVisible(false));
  };

  /**
   * The function update filename
   */
  const saveFile = () => {
    if (file) {
      const id = file.id;
      const name = `${fileName}.${fileExt}`;

      updateFile({ id, name });
    }
  };

  /**
   * Change data value handler
   * @param e
   */
  const changeHandler = (e: EventData) => {
    setFileName(e.value);
  };

  /**
   * The function body slot render
   */
  const bodySlot = () => (
    <InputText
      name="name"
      value={fileName}
      placeholder="File name"
      errors={[]}
      change={changeHandler}
    />
  );

  /**
   * The function footer slot render
   */
  const footerSlot = () => (
    <>
      <button className="btn" onClick={closeModal}>
        Отмена
      </button>
      <button
        className={"btn btn_default " + (saving ? "btn_inactive" : "")}
        onClick={saveFile}
      >
        Сохранить
      </button>
    </>
  );

  return (
    <ModalBox
      title="Rename File"
      visible={modalFileVisible}
      bodySlot={bodySlot()}
      footerSlot={footerSlot()}
      closeModal={closeModal}
    />
  );
};

export default ModalFile;
