export const Heading = ({
  level,
  className,
  children,
  margin,
  padding,
  color,
}) => {
  // Set the default level to 1 if not provided
  const Heading = `h${level || 1}`;

  return (
    <Heading
      className={className}
      style={{
        margin: margin,
        padding: padding,
        color: color,
      }}
    >
      {children}
    </Heading>
  );
};
