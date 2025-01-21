export const Button = ({
  children,
  className,
  w,
  minw,
  maxw,
  h,
  minh,
  maxh,
  m,
  p,
  bc,
  tc,
  br,
  bd,
  action,
}) => {
  return (
    <button
      className={className}
      onClick={action}
      style={{
        width: w,
        minWidth: minw,
        maxWidth: maxw,
        height: h,
        minHeight: minh,
        maxHeight: maxh,
        margin: m,
        padding: p,
        backgroundColor: bc,
        color: tc,
        borderRadius: br,
        border: bd,
      }}
    >
      {children}
    </button>
  );
};
