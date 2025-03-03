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
      />
    </>
  );
};
