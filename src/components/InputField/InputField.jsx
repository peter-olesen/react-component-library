export const InputField = ({
  label,
  type,
  placeholder,
  name,
  id,
  required,
  action,

  // Styling options
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
  ol,
}) => {
  const onInputChange = (e) => {
    action(e.target.value);
  };

  return (
    <>
      {name && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        onChange={(event) => onInputChange(event)}
        className={className}
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
          outline: ol,
        }}
      />
    </>
  );
};
