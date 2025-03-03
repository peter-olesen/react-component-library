export const Section = ({
  children,
  className,
  width,
  height,
  margin,
  padding,
}) => {
  return (
    <section
      className={className}
      style={{
        width: width,
        height: height,
        margin: margin,
        padding: padding,
      }}
    >
      {children}
    </section>
  );
};
