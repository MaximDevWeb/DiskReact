import InputText from "./InputText";
import ModalBox from "./ModalBox";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  cleanDataFolder,
  setDataFolder,
  setModalFolderVisible,
} from "../store/reducers/FoldersSlice";
import { useEffect, useState } from "react";
import { ErrorsData, EventData } from "../types/auth";
import {
  useCreateFolderMutation,
  useUpdateFolderMutation,
} from "../store/services/Folders";
import { useParams } from "react-router-dom";

/**
 * This is the ModalFolder component.
 */

const ModalFolder = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { modalFolderVisible, data } = useAppSelector((state) => state.folders);
  const [createFolder, { isLoading: saving }] = useCreateFolderMutation();
  const [updateFolder, { isLoading: updating }] = useUpdateFolderMutation();
  const [title, setTitle] = useState("Create Folder");
  const [error, setError] = useState<ErrorsData>({});

  useEffect(() => {
    setTitle(data.id ? "Rename Folder" : "Create Folder");
  }, [data]);

  /**
   * The function close modal folder
   */
  const closeModal = (): void => {
    dispatch(setModalFolderVisible(false));
    dispatch(cleanDataFolder());
  };

  /**
   * The function save folder
   */
  const saveFolder = async () => {
    const dataFolder = { ...data, prefix: params["*"] };

    try {
      if (data.id) {
        await updateFolder(dataFolder).unwrap();
      } else {
        await createFolder(dataFolder).unwrap();
      }

      closeModal();
    } catch (err: any) {
      setError(err.data.errors as ErrorsData);
    }
  };

  /**
   * Change data value handler
   * @param e
   */
  const changeHandler = (e: EventData) => {
    dispatch(setDataFolder({ ...data, name: e.value }));
    setError({ ...error, name: [] });
  };

  /**
   * The function body slot render
   */
  const bodySlot = () => (
    <InputText
      name="name"
      value={data.name}
      placeholder="Folder name"
      errors={error.name || []}
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
        className={
          "btn btn_default " + (saving || updating ? "btn_inactive" : "")
        }
        onClick={saveFolder}
      >
        Сохранить
      </button>
    </>
  );

  return (
    <ModalBox
      title={title}
      visible={modalFolderVisible}
      bodySlot={bodySlot()}
      footerSlot={footerSlot()}
      closeModal={closeModal}
    />
  );
};

export default ModalFolder;
