import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (error) {
      setError("");
    }
  };

  const submitEmail = async () => {
    if (!validateEmail(email)) {
      setError("Indtast en gyldig emailadresse.");
      return;
    }

    console.log("Form submitted with email:", email);
    setIsLoading(true);
    setError("");

    const url = "https://api.mediehuset.net/bakeonline/newsletter";
    const body = new URLSearchParams();
    body.append("email", email);

    const options = {
      method: "POST",
      body: body,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        setSignUpMessage("Du er nu tilmeldt nyhedsbrevet!");
        setEmail("");
      } else {
        setError(data.message || "Noget gik galt, prøv igen.");
      }
    } catch (err) {
      setError("Der opstod en fejl, prøv venligst igen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <InputField
        type="email"
        name="newsletter"
        id="newsletter"
        placeholder="Skriv den email du ønsker at modtage vores nyhedsbrev"
        required={true}
        action={handleEmailChange}
        value={email}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button action={submitEmail} disabled={isLoading}>
        {isLoading ? "Tilmelder..." : "Tilmeld mig nyhedsbrevet"}
      </Button>
      {signUpMessage && <p style={{ color: "green" }}>{signUpMessage}</p>}
    </div>
  );
};
