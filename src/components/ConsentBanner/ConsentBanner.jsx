import ReactGA from "react-ga4";
import { PiCookie } from "react-icons/pi";
import s from "./ConsentBanner.module.scss";
import { useEffect, useState } from "react";

export const ConsentBanner = () => {
  const [withTracking, setWithTracking] = useState(false);
  const [hasUserCookie, setHasUserCookie] = useState(null);
  const [showConsent, setShowConsent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookiesAllowed");

    if (cookieConsent === "true") {
      setWithTracking(true);
      ReactGA.initialize("G-W4CKHB3Q28");
    }
    setHasUserCookie(cookieConsent);
  }, []);

  const enableGA = () => {
    setWithTracking(true);
    localStorage.setItem("cookiesAllowed", "true");
    setHasUserCookie("true");
    ReactGA.initialize("G-W4CKHB3Q28");
    setShowConsent(false);
  };

  const disableGA = () => {
    setWithTracking(false);
    localStorage.setItem("cookiesAllowed", "false");
    setHasUserCookie("false");
    setShowConsent(false);
  };

  const showConsentBanner = () => {
    setShowConsent(true);
    setShowButton(false);
  };

  return (
    <>
      {showConsent || hasUserCookie === null ? (
        <div className={s.ConsentBanner}>
          <div className={s.buttons}>
            <button onClick={enableGA}>Accepter alle cookies</button>
            <br />
            <button onClick={disableGA}>Ingen cookies, tak!</button>
          </div>
          <div>
            <p>
              Vi bruger cookies til at forbedre din oplevelse på vores
              hjemmeside. <br /> Vælg venligst om du vil accepterer brugen af
              cookies.
            </p>
          </div>
        </div>
      ) : null}

      {(hasUserCookie === "true" || hasUserCookie === "false") &&
        !showConsent && (
          <button className={s.ConsentButton} onClick={showConsentBanner}>
            {/* Ændre cookieindstillinger */}
            <PiCookie /> Cookie-samtykke
          </button>
        )}
    </>
  );
};
