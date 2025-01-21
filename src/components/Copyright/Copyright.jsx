export const Copyright = ({ siteName }) => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <p>
      &copy; Copyright {siteName} {currentYear()}
    </p>
  );
};
