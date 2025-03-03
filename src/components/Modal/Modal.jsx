import s from "./Modal.module.scss";

export const Modal = ({ children, action }) => {
  return (
    <>
      <div onClick={() => action()} className={s.Overlay}></div>
      <div className={s.Modal}>
        <button onClick={() => action()} className={s.modalBtn}>
          X
        </button>
        {children}
      </div>
    </>
  );
};
