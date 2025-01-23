import { useEffect, useState } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("da-DK", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("da-DK", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      updateTime();
      setInterval(updateTime, 60000);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div>{time}</div>;
};
