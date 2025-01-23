export const Copyright = ({ siteName }) => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <p>
      &copy; {currentYear()} {siteName} All rights reserved.
    </p>
  );
};
