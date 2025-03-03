import s from "./Grid.module.scss";

export const Grid = ({ children, style }) => {
  const inline = {
    gridTemplateColumns: `repeat(${col}, ${fr})`,
    gap,
    padding,
  };

  return (
    <div className={s.Grid} style={{ ...inline, ...style }}>
      {children}
    </div>
  );
};
