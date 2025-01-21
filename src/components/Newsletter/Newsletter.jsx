import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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

  const submitEmail = () => {
    if (validateEmail(email)) {
      console.log("Form submitted with email:", email);
    } else {
      alert("Indtast en rigtig emailadresse.");
    }
  };

  return (
    <div>
      <InputField
        type="email"
        name="newsletter"
        id="newsletter"
        w="50%"
        placeholder="Skriv den email du ønsker at modtage vores nyhedsbrev"
        required={true}
        action={handleEmailChange}
      />
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <Button action={() => submitEmail()}>Tilmeld mig nyhedsbrevet</Button>
    </div>
  );
};
