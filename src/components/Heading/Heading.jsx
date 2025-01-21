export const Heading = ({ level, children, m, p, bc, tc }) => {
  // Set the default level to 1 if not provided
  const Heading = `h${level || 1}`;

  return (
    <Heading
      style={{
        margin: m,
        padding: p,
        backgroundColor: bc,
        color: tc,
      }}
    >
      {children}
    </Heading>
  );
};
